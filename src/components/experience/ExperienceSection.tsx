import { companies } from '../../data/experience'
import { useUiPrefs } from '../../contexts/UiPrefsContext'
import { CompanyBlock } from './CompanyBlock'
import { TaskFilter } from './TaskFilter'

export function ExperienceSection() {
  const { lang } = useUiPrefs()
  const title = lang === 'kr' ? '경력' : 'Experience'

  const note =
    lang === 'kr'
      ? '커밋·레포 수치는 팀 전체 규모이며, 서술은 FE PL·담당 FE 역할 기준입니다.'
      : 'Commit/repo figures reflect team-wide scale; narratives describe FE PL / owning-FE scope.'

  return (
    <section className="section experience-section" id="experience">
      <h2 className="sec-title">{title}</h2>
      <p className="sec-note">{note}</p>
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
