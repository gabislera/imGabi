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
      className="w-full rounded-[20px] bg-purple-50 p-[1px] shadow-card"
    >
      <div className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-purple-500 px-12 py-5">
        <Image
          src={icon}
          alt={title}
          width={16}
          height={16}
          className="h-16 w-16 object-contain"
        />
        <h3 className="text-center text-[20px] font-bold text-white">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
)
