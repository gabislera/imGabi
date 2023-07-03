'use client'
import { useState, useEffect } from 'react'
import { House, User, Book, Cube, ChatCircleDots } from '@phosphor-icons/react'

export const NavbarTest = () => {
  const [activeNav, setActiveNav] = useState('#')

  useEffect(() => {
    const handleScroll = () => {
      const about = document.querySelector('#about') as HTMLElement
      const experience = document.querySelector('#experience') as HTMLElement
      const projects = document.querySelector('#projects') as HTMLElement
      const contact = document.querySelector('#contact') as HTMLElement
      const scrollPosition = window.scrollY

      if (scrollPosition < about.offsetTop - 100) {
        setActiveNav('#')
      } else if (scrollPosition < experience.offsetTop - 80) {
        setActiveNav('#about')
      } else if (scrollPosition < projects.offsetTop - 80) {
        setActiveNav('#experience')
      } else if (scrollPosition < contact.offsetTop - 100) {
        setActiveNav('#projects')
      } else {
        setActiveNav('#contact')
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className="fixed bottom-4 left-[50%] z-[99] flex w-max -translate-x-[50%] gap-[0.8rem] rounded-full bg-nav px-[1.7rem] py-[0.7rem]">
      <a
        className={
          activeNav === '#'
            ? 'flex rounded-full bg-purple-500 p-[0.8rem] text-[1.1rem] text-white'
            : 'flex rounded-full bg-transparent p-[0.8rem] text-[1.1rem] text-white hover:bg-nav'
        }
        href="#"
      >
        <House weight="light" />
      </a>
      <a
        className={
          activeNav === '#about'
            ? 'flex rounded-full bg-purple-500 p-[0.8rem] text-[1.1rem] text-white'
            : 'flex rounded-full bg-transparent p-[0.8rem] text-[1.1rem] text-white hover:bg-nav'
        }
        href="#about"
      >
        <User weight="light" />
      </a>
      <a
        className={
          activeNav === '#experience'
            ? 'flex rounded-full bg-purple-500 p-[0.8rem] text-[1.1rem] text-white'
            : 'flex rounded-full bg-transparent p-[0.8rem] text-[1.1rem] text-white hover:bg-nav'
        }
        href="#experience"
      >
        <Book weight="light" />
      </a>
      <a
        className={
          activeNav === '#projects'
            ? 'flex rounded-full bg-purple-500 p-[0.8rem] text-[1.1rem] text-white'
            : 'flex rounded-full bg-transparent p-[0.8rem] text-[1.1rem] text-white hover:bg-nav'
        }
        href="#projects"
      >
        <Cube weight="light" />
      </a>
      <a
        className={
          activeNav === '#contact'
            ? 'flex rounded-full bg-purple-500 p-[0.8rem] text-[1.1rem] text-white'
            : 'flex rounded-full bg-transparent p-[0.8rem] text-[1.1rem] text-white hover:bg-nav'
        }
        href="#contact"
      >
        <ChatCircleDots weight="light" />
      </a>
    </nav>
  )
}
