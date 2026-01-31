import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </main>
  )
}
