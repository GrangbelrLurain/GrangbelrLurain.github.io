/**
 * Static GitHub Pages cannot read Accept-Language.
 * This script mirrors navigator.languages (the browser equivalent) plus
 * `?lang=` and the existing KR/EN toggle stored as localStorage.lang.
 *
 * Precedence: ?lang= → /en|/ko path → saved toggle → primary language → English.
 */
(function () {
  function langFromPath(pathname) {
    var p = pathname.replace(/\/+$/, '') || '/'
    if (p === '/ko' || p === '/ko/index.html') return 'kr'
    if (p === '/en' || p === '/en/index.html') return 'en'
    return null
  }

  function langFromQuery(value) {
    if (!value) return null
    var q = String(value).toLowerCase()
    if (q === 'en') return 'en'
    if (q === 'ko' || q === 'kr') return 'kr'
    return null
  }

  function langFromStored(value) {
    if (value === 'en' || value === 'kr') return value
    if (value === 'ko') return 'kr'
    return null
  }

  function isKoreanPrimary(languages) {
    var primary = String(languages[0] || '').toLowerCase()
    return primary === 'ko' || primary.indexOf('ko-') === 0
  }

  function dest(lang) {
    return lang === 'kr' ? '/ko/' : '/en/'
  }

  var params = new URLSearchParams(location.search)
  var queryLang = langFromQuery(params.get('lang'))
  var pathLang = langFromPath(location.pathname)
  var stored = null
  try {
    stored = langFromStored(localStorage.getItem('lang'))
  } catch {
    stored = null
  }

  var languages =
    navigator.languages && navigator.languages.length
      ? navigator.languages
      : navigator.language
        ? [navigator.language]
        : []

  var next =
    queryLang ||
    pathLang ||
    stored ||
    (isKoreanPrimary(languages) ? 'kr' : 'en')

  var alreadyOnLocale = pathLang === next
  if (alreadyOnLocale && !queryLang) return
  if (alreadyOnLocale && queryLang === pathLang) {
    // Drop ?lang= once the path already encodes the locale.
    if (params.has('lang')) {
      params.delete('lang')
      var cleaned = dest(next)
      var qs = params.toString()
      location.replace(cleaned + (qs ? '?' + qs : '') + (location.hash || ''))
    }
    return
  }

  params.delete('lang')
  var search = params.toString()
  location.replace(dest(next) + (search ? '?' + search : '') + (location.hash || ''))
})()
