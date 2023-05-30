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
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full rounded-[20px] p-[1px] shadow-card"
    >
      <div className="flex min-h-[280px] flex-col items-center justify-center gap-5 rounded-[20px] border-[1px] border-purple-50 bg-purple-500 px-12 py-5 hover:bg-transparent">
        <Image
          src={icon}
          alt={title}
          width={25}
          height={25}
          className="h-16 w-16 object-contain"
        />
        <h3 className="text-center text-base font-thin text-white">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
)
