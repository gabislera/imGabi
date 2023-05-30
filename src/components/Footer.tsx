'use client'
import { footerVariants } from '@/utils/motion'
import { motion } from 'framer-motion'
import {
  DiscordLogo,
  GithubLogo,
  InstagramLogo,
  TwitterLogo,
} from '@phosphor-icons/react'

export const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className="w-full px-6 py-8 sm:px-16"
  >
    {/* <div className="footer-gradient" /> */}
    <div className="mx-auto mb-16 flex flex-col gap-8 md:mb-0 2xl:max-w-[1280px]">
      <div className="flex flex-col">
        <div className="mb-5 h-[2px] bg-white opacity-10 md:mb-5" />

        <div className="flex flex-col flex-wrap items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-1 md:items-start">
            <h4 className="text-2xl font-extrabold text-white">Gabi Carniel</h4>
            <p className="-mt-2 text-xs font-normal text-white opacity-50 md:mt-0">
              Copyright © 2023. All rights reserved.
            </p>
          </div>

          <div className="flex gap-4">
            <TwitterLogo size={28} className="cursor-pointer" />
            <InstagramLogo size={28} className="cursor-pointer" />
            <GithubLogo size={28} className="cursor-pointer" />
            <DiscordLogo size={28} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
)