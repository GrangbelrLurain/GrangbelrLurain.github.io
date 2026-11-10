import { companies } from '../../data/experience'
import { useUiPrefs } from '../../contexts/UiPrefsContext'
import { CompanyBlock } from './CompanyBlock'
import { TaskFilter } from './TaskFilter'

export function ExperienceSection() {
  const { lang } = useUiPrefs()
  const title = lang === 'kr' ? '경력' : 'Experience'

  return (
    <section className="section experience-section" id="experience">
      <h2 className="sec-title">{title}</h2>
      <div className="experience-layout">
        <div className="experience-main">
          {companies.map((company) => (
            <CompanyBlock key={company.id} company={company} />
          ))}
        </div>
        <TaskFilter />
      </div>
    </section>
  )
}
