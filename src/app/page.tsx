import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Experience } from '@/components/Experience'
import { Projects } from '@/components/Projects'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import StarCanvas from '../components/Stars'
// import { ThreeTimelineTest } from '@/components/ThreeTimelineTest'

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      {/* <ThreeTimelineTest /> */}
      <Projects />
      <Contact />
      <Footer />
      <StarCanvas />
    </div>
  )
}
