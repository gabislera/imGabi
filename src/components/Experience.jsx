'use client'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { staggerContainer, textVariant } from '../utils/motion'
import { ExperienceCard } from './ExperienceCard'
import { experiences } from '@/constants/constants'

export const Experience = () => {
  return (
    <>
      <motion.section
        id="experience"
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`relative z-0 mx-auto max-w-7xl px-6 py-10 sm:px-16 sm:py-16`}
      >
        <motion.div variants={textVariant()}>
          <p className="text-center text-sm text-gray-100">What I offer</p>
          <h2 className="text-center text-4xl text-white">Services</h2>
        </motion.div>

        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
      </motion.section>
    </>
  )
}
