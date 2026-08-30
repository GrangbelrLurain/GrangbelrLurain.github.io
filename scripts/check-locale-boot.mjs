import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createContext, runInContext } from 'node:vm'

const source = readFileSync(new URL('../public/locale-boot.js', import.meta.url), 'utf8')

function runBoot({ pathname, search = '', hash = '', languages = ['en-US'], stored = null }) {
  const replaced = []
  const sandbox = {
    location: {
      pathname,
      search,
      hash,
      replace(url) {
        replaced.push(url)
      },
    },
    navigator: { languages, language: languages[0] },
    localStorage: {
      getItem(key) {
        return key === 'lang' ? stored : null
      },
    },
    URLSearchParams,
  }
  runInContext(source, createContext(sandbox))
  return replaced[0] ?? null
}

assert.equal(runBoot({ pathname: '/', languages: ['en-US'] }), '/en/')
assert.equal(runBoot({ pathname: '/', languages: [] }), '/en/')
assert.equal(runBoot({ pathname: '/', languages: ['de-DE'] }), '/en/')
assert.equal(runBoot({ pathname: '/', languages: ['ko-KR'] }), '/ko/')
assert.equal(runBoot({ pathname: '/', languages: ['en-US', 'ko'] }), '/en/')
assert.equal(runBoot({ pathname: '/', search: '?lang=ko', languages: ['en'] }), '/ko/')
assert.equal(runBoot({ pathname: '/', search: '?lang=en', languages: ['ko'] }), '/en/')
assert.equal(runBoot({ pathname: '/', stored: 'kr', languages: ['en'] }), '/ko/')
assert.equal(runBoot({ pathname: '/en/', stored: 'kr', languages: ['ko'] }), null)
assert.equal(runBoot({ pathname: '/ko/', stored: 'en', languages: ['en'] }), null)
assert.equal(runBoot({ pathname: '/en/', search: '?lang=ko' }), '/ko/')
assert.equal(runBoot({ pathname: '/', hash: '#experience', languages: ['en'] }), '/en/#experience')
assert.equal(runBoot({ pathname: '/', search: '?lang=ko&utm=1' }), '/ko/?utm=1')

console.log('locale-boot redirect checks passed')
