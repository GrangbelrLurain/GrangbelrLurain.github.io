import type { LocaleText } from '../../data/types'
import { useUiPrefs } from '../../contexts/UiPrefsContext'
import { T } from '../common/T'

export function ImpactSummary({ impacts }: { impacts: LocaleText[] }) {
  const { lang } = useUiPrefs()

  return (
    <div className="impact-summary">
      <p className="eyebrow">{lang === 'kr' ? '핵심 임팩트' : 'Key Impact'}</p>
      <ul className="impact-summary-list">
        {impacts.map((item, i) => (
          <li key={`${lang}-${i}`}>
            <T text={item} as="span" />
          </li>
        ))}
      </ul>
    </div>
  )
}
