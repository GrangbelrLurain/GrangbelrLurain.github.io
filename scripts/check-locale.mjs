import assert from 'node:assert/strict'

function langFromPathname(pathname) {
  const p = pathname.replace(/\/+$/, '') || '/'
  if (p === '/ko' || p === '/ko/index.html') return 'kr'
  if (p === '/en' || p === '/en/index.html') return 'en'
  return null
}

function langFromQuery(value) {
  if (!value) return null
  const q = value.toLowerCase()
  if (q === 'en') return 'en'
  if (q === 'ko' || q === 'kr') return 'kr'
  return null
}

function langFromStored(value) {
  if (value === 'en' || value === 'kr') return value
  if (value === 'ko') return 'kr'
  return null
}

function isKoreanPrimaryLanguage(languages) {
  const primary = (languages[0] || '').toLowerCase()
  return primary === 'ko' || primary.startsWith('ko-')
}

function resolveLang(input) {
  return (
    langFromQuery(input.queryLang) ??
    langFromPathname(input.pathname) ??
    langFromStored(input.storedLang) ??
    (isKoreanPrimaryLanguage(input.languages ?? []) ? 'kr' : 'en')
  )
}

assert.equal(resolveLang({ pathname: '/', languages: ['en-US'] }), 'en')
assert.equal(resolveLang({ pathname: '/', languages: [] }), 'en')
assert.equal(resolveLang({ pathname: '/', languages: ['fr-FR'] }), 'en')
assert.equal(resolveLang({ pathname: '/', languages: ['ko-KR'] }), 'kr')
assert.equal(resolveLang({ pathname: '/', languages: ['ko'] }), 'kr')
assert.equal(resolveLang({ pathname: '/', languages: ['en-US', 'ko'] }), 'en')
assert.equal(resolveLang({ pathname: '/', queryLang: 'ko', languages: ['en'] }), 'kr')
assert.equal(resolveLang({ pathname: '/', queryLang: 'kr', languages: ['en'] }), 'kr')
assert.equal(resolveLang({ pathname: '/', queryLang: 'en', languages: ['ko'] }), 'en')
assert.equal(resolveLang({ pathname: '/', storedLang: 'kr', languages: ['en'] }), 'kr')
assert.equal(resolveLang({ pathname: '/en/', storedLang: 'kr', languages: ['ko'] }), 'en')
assert.equal(resolveLang({ pathname: '/ko/', storedLang: 'en', languages: ['en'] }), 'kr')
assert.equal(resolveLang({ pathname: '/en/', queryLang: 'ko' }), 'kr')
assert.equal(langFromPathname('/'), null)
assert.equal(langFromPathname('/en'), 'en')
assert.equal(langFromPathname('/ko/'), 'kr')

console.log('locale resolve checks passed')
