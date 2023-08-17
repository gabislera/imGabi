import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Experience } from '@/components/Experience'
import { Projects } from '@/components/Projects'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
// import StarCanvas from '../components/Stars'
import { NavbarTest } from '@/components/NavBarTest'

export default function Home() {
  return (
    <div className="relative">
      <NavbarTest />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      {/* <StarCanvas /> */}
    </div>
  )
}
