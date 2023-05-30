import { fadeIn } from '@/utils/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt'

interface SeviceCardProps {
  index: number
  title: string
  icon: string
}

export const ServiceCard = ({ index, title, icon }: SeviceCardProps) => (
  <Tilt className=" w-[250px] ">
    <motion.div variants={fadeIn('right', 'spring', index * 0.5, 0.75)}>
      <div className="flex flex-col items-center justify-center gap-2 rounded-[20px] border-[1px] border-purple-50 bg-purple-500 px-5 py-5 shadow-card hover:bg-transparent sm:gap-5 sm:px-5 sm:py-16">
        <Image
          src={icon}
          alt={title}
          width={60}
          height={60}
          className=" object-contain"
        />
        <h3 className="text-center text-base font-thin text-white">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
)
