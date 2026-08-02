import type { Company, TaskGroup } from '../../data/types'
import { useUiPrefs } from '../../contexts/UiPrefsContext'
import { ImpactSummary } from './ImpactSummary'
import { TaskTable } from './TaskTable'

function GroupBlock({ group }: { group: TaskGroup }) {
  const { filter, t } = useUiPrefs()
  const visible =
    filter === 'all' ? group.tasks : group.tasks.filter((task) => task.category === filter)
  if (visible.length === 0) return null

  return (
    <div className="task-group">
      <h4 className="task-group-heading">{t(group.heading)}</h4>
      <TaskTable tasks={group.tasks} />
    </div>
  )
}

export function CompanyBlock({ company }: { company: Company }) {
  const { t, lang } = useUiPrefs()

  return (
    <article className="company-block">
      <header className="comp-head">
        <div className="comp-head-left">
          <h3 className="comp-name">{t(company.name)}</h3>
          <p className="comp-meta">
            <span>{t(company.badge)}</span>
            <span className="comp-meta-sep">·</span>
            <span>{t(company.subtitle)}</span>
          </p>
        </div>
        <time className="comp-date">{company.date}</time>
      </header>

      <ImpactSummary impacts={company.impacts} />

      <div className="company-details">
        <p className="eyebrow">{lang === 'kr' ? '상세 업무' : 'Detailed work'}</p>
        {company.groups?.map((group) => (
          <GroupBlock key={group.heading.kr} group={group} />
        ))}
        {company.tasks ? <TaskTable tasks={company.tasks} /> : null}
      </div>

      <p className="tech-line">{company.tech.join(' · ')}</p>

      {company.links && company.links.length > 0 ? (
        <p className="inline-links">
          {company.links.map((link, i) => (
            <span key={link.href}>
              {i > 0 ? <span className="link-sep"> · </span> : null}
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label.replace(/\s*↗\s*$/, '')}
              </a>
            </span>
          ))}
        </p>
      ) : null}
    </article>
  )
}
