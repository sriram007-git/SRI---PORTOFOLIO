import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'
import BackToTopButton from '@/components/ui/BackToTopButton'
import CustomCursor from '@/components/ui/CustomCursor'
import GlobalBackground from '@/components/ui/GlobalBackground'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Certifications from '@/components/sections/Certifications'
import Resume from '@/components/sections/Resume'
import Contact from '@/components/sections/Contact'

export default function App() {
  return (
    <>
      <GlobalBackground />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Resume />
        <Contact />
      </main>

      <Footer />
      <BackToTopButton />
    </>
  )
}