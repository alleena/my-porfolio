import { Metadata } from 'next'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Alina Maharjan - QA/QC Professional',
  description: 'Portfolio of Alina Maharjan, a QA/QC professional specializing in software testing, JIRA/Confluence, API testing, documentation, and MySQL.',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}