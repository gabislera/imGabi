'use client'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer, textVariant } from '../utils/motion'
import { projects } from '@/constants/data'
import { ProjectCard } from './ProjectCard'

import { Pagination, Navigation, Grid } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/autoplay'
import 'swiper/css'
import 'swiper/css/pagination'
// import 'swiper/css/grid'

import { useEffect, useState } from 'react'

export const Projects = () => {
  let initialSize
  if (typeof window !== 'undefined') {
    initialSize = window.matchMedia('(max-width: 768px)').matches ? 1 : 3
  }

  const [isMobile, setIsMobile] = useState(initialSize)

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(max-width: 768px)').matches) {
        setIsMobile(1)
      } else {
        setIsMobile(3)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <motion.section
        id="projects"
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`mx-auto max-w-7xl px-6 py-10 sm:px-16 sm:py-16`}
      >
        <motion.div variants={textVariant()}>
          <p className="text-center text-sm text-gray-100">My recent Work</p>
          <h2 className="text-center text-4xl text-white">Projects</h2>
        </motion.div>

        <motion.div variants={fadeIn('', '', 0.1, 1)}>
          <div className="mt-20 flex flex-wrap gap-7">
            <Swiper
              slidesPerView={isMobile}
              grid={{ rows: 1 }}
              spaceBetween={30}
              pagination={{ dynamicBullets: true }}
              loop={true}
              // navigation={true}
              modules={[Navigation, Pagination, Grid]}
              // autoplay={{ delay: 2500 }}
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <ProjectCard {...project} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </motion.section>
    </>
  )
}
