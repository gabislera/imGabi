'use client'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '@/utils/motion'

export const Hero = () => {
  return (
    <motion.div
      id="home"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mx-auto flex flex-col overflow-hidden sm:flex-row 2xl:max-w-[1280px]"
    >
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        // className="relative mt-[68px] flex h-[550px] w-full"
      >
        <div className="ml-6 mt-[90px] w-full md:ml-0 md:mt-[200px]">
          <div className="flex sm:px-16">
            <div className="mt-5 flex flex-col items-center justify-center">
              <div className="h-5 w-5 rounded-full bg-purple-500" />
              <div className="h-40 w-1 bg-gradient-to-b from-[#8257e5] to-transparent sm:h-80" />
            </div>

            <div>
              <h1 className=" mt-2 text-[2.5rem] font-black text-white md:text-[5rem] md:leading-[6rem]">
                Hi, Im <span className="text-purple-400">Gabi</span>
              </h1>
              <p className=" mt-2 text-[1rem] font-medium text-gray-300 md:text-[1.875rem] md:leading-[2.5rem]">
                Frontend Developer
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div variants={fadeIn('up', 'tween', 0.3, 1)}>
        <div className="-mt-[50px] mb-[80px] ml-[100px] md:mt-[300px]">
          <motion.img
            src="/header-img.svg"
            alt=""
            className="w-[500px]"
            animate={{ y: [20, 50, 20] }} // Propriedade 'x' se move em um loop de 0px para 100px e volta para 0px
            transition={{ repeat: Infinity, duration: 5 }} // Repete a animação indefinidamente a cada 2 segundos
          />
        </div>
      </motion.div>
    </motion.div>
  )
}
