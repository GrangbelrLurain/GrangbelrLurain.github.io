import { aboutParagraphs } from '../../data/profile'
import { SectionCard } from '../common/SectionCard'
import { T } from '../common/T'
import { useUiPrefs } from '../../contexts/UiPrefsContext'

export function About() {
  const { lang } = useUiPrefs()

  return (
    <SectionCard id="about" title={lang === 'kr' ? '소개' : 'About'}>
      <div className="text-body">
        {aboutParagraphs.map((p, i) => (
          <T key={`${lang}-${i}`} text={p} as="p" />
        ))}
      </div>
    </SectionCard>
  )
}
