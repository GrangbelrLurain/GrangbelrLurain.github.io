import { metrics, profile } from '../../data/profile'
import { useUiPrefs } from '../../contexts/UiPrefsContext'

export function Hero() {
  const { t } = useUiPrefs()

  return (
    <section className="hero" id="intro">
      <div className="hero-stage">
        <div className="hero-photo-wrap">
          <img
            className="hero-photo"
            src={profile.photo}
            alt={t(profile.photoAlt)}
            width={320}
            height={400}
            decoding="async"
            fetchPriority="high"
          />
        </div>

        <div className="hero-copy">
          <p className="hero-kicker">Frontend Lead · Product Engineer</p>
          <h1 className="hero-name">{t(profile.name)}</h1>
          <p className="hero-title">{t(profile.title)}</p>
          <p className="hero-tagline">{t(profile.tagline)}</p>

          <ul className="contact-list">
            <li>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={profile.site} target="_blank" rel="noreferrer">
                delete-horizon.com
              </a>
            </li>
            {profile.resumes.map((resume) => (
              <li key={resume.href}>
                <a href={resume.href} target="_blank" rel="noreferrer">
                  {t(resume.label)}
                </a>
              </li>
            ))}
            <li>{t(profile.location)}</li>
          </ul>
        </div>
      </div>

      <dl className="metrics-list">
        {metrics.map((m) => (
          <div key={m.value} className="metrics-row">
            <dt>{m.value}</dt>
            <dd>{t(m.label)}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
