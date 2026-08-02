import { education } from '../../data/profile'
import { useUiPrefs } from '../../contexts/UiPrefsContext'
import { SectionCard } from '../common/SectionCard'

export function EducationSection() {
  const { lang, t } = useUiPrefs()
  const title = lang === 'kr' ? '학력' : 'Education'

  return (
    <SectionCard title={title}>
      <div className="edu-row">
        <span className="edu-school">{t(education.school)}</span>
        <span className="edu-detail">{t(education.detail)}</span>
      </div>
    </SectionCard>
  )
}
