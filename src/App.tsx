import { UiPrefsProvider } from './contexts/UiPrefsContext'
import { TopBar } from './components/layout/TopBar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/hero/Hero'
import { About } from './components/about/About'
import { ExperienceSection } from './components/experience/ExperienceSection'
import { ProjectsSection } from './components/projects/ProjectsSection'
import { SkillsSection } from './components/skills/SkillsSection'

export default function App() {
  return (
    <UiPrefsProvider>
      <TopBar />
      <main className="page">
        <Hero />
        <About />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <Footer />
      </main>
    </UiPrefsProvider>
  )
}
