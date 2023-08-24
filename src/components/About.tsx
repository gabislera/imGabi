'use client'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer, textVariant } from '../utils/motion'
import { ServiceCard } from './ServiceCard'
import { services } from '@/constants/data'

export const About = () => {
  return (
    <motion.section
      id="about"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`relative z-0 mx-auto max-w-7xl px-6 py-10 sm:px-16 sm:py-16`}
    >
      <motion.div variants={textVariant()}>
        <span className="text-[0.875rem]  tracking-wider text-gray-100 sm:text-sm">
          Get to know
        </span>
        <h2 className="xs:text-[2.5rem] text-[1.875rem] font-black text-white sm:text-[3.125rem] md:text-[3.75rem]">
          About Me
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 flex max-w-4xl flex-col gap-2 text-base leading-7 text-white"
      >
        <p>
          Além de Dev, sou estudante de Análise e Desenvolvimento de Sistemas,
          apaixonada por inovação, jogos e tecnologia.
        </p>
        <p>
          Atualmente desenvolvo principalmente aplicações React com ferramentas
          modernas como NextJs e Tailwind.
        </p>
        <p>
          Sou uma pessoa que não tem medo de novos desafios e está sempre aberta
          para eles, interessada em projetos que possam aprimorar o meu
          conhecimento e contribuir para o meu desenvolvimento pessoal e
          profissional. Eu me adapto fácil à novas ferramentas e estou em
          constante aprendizado, tentando sempre acompanhar as demandas em
          constante evolução da área.
        </p>
      </motion.div>

      <div className="mt-20 flex flex-wrap justify-center gap-5 sm:gap-10 md:justify-normal">
        {services.map((service) => (
          <ServiceCard key={service.title} index={service.id} {...service} />
        ))}
      </div>
    </motion.section>
  )
}
