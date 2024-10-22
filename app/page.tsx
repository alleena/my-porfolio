import { Metadata } from 'next'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Header from '@/components/header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Alina Maharjan - QA/QC Professional',
  description: 'Portfolio of Alina Maharjan, a QA/QC professional specializing in software testing, JIRA/Confluence, API testing, documentation, and MySQL.',
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
    <Footer />
    </div>
  )
}