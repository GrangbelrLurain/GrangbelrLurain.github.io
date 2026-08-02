import { skillRows } from '../../data/profile'
import { useUiPrefs } from '../../contexts/UiPrefsContext'
import { SectionCard } from '../common/SectionCard'

export function SkillsSection() {
  const { lang } = useUiPrefs()
  const title = lang === 'kr' ? '기술' : 'Skills'

  return (
    <SectionCard id="skills" title={title}>
      <div className="stack-grid">
        {skillRows.map((row) => (
          <div key={row.label} className="stack-row">
            <span className="stack-label">{row.label}</span>
            <p className="stack-text">{row.tags.join(' · ')}</p>
          </div>
        ))}
      </div>
    </SectionCard>
  )
}
