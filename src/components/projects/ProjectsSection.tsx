import { projects } from '../../data/profile'
import { useUiPrefs } from '../../contexts/UiPrefsContext'
import { SectionCard } from '../common/SectionCard'
import { T } from '../common/T'

export function ProjectsSection() {
  const { lang } = useUiPrefs()
  const title = lang === 'kr' ? '개인 제품' : 'Products'

  return (
    <SectionCard id="projects" title={title}>
      {projects.map((project) => (
        <article key={project.id} className="proj-block">
          <header className="proj-head">
            <h3 className="proj-name">{project.name}</h3>
            <p className="inline-links">
              {project.links.map((link, i) => (
                <span key={link.href}>
                  {i > 0 ? <span className="link-sep"> · </span> : null}
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label.replace(/\s*↗\s*$/, '')}
                  </a>
                </span>
              ))}
            </p>
          </header>
          <p className="tech-line">{project.techLine}</p>
          <ul className="bullet-list">
            {project.bullets.map((bullet, i) => (
              <li key={`${project.id}-${i}`}>
                <T text={bullet} as="span" />
              </li>
            ))}
          </ul>
        </article>
      ))}
    </SectionCard>
  )
}
