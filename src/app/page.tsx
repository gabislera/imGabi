import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Experience } from '@/components/Experience'
import { Projects } from '@/components/Projects'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import StarCanvas from '../components/Stars'

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <StarCanvas />
    </div>
  )
}
