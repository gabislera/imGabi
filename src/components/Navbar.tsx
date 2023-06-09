/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useState, useEffect, useRef, MutableRefObject } from 'react'
import { House, User, Book, Cube, ChatCircleDots } from '@phosphor-icons/react'

interface NavItem {
  id: string
  icon: React.JSX.Element
  ref: MutableRefObject<any>
}

export const Navbar = () => {
  const [activeNav, setActiveNav] = useState<string>('#home')

  const navItems: NavItem[] = [
    { id: '#home', icon: <House weight="light" />, ref: useRef() },
    { id: '#about', icon: <User weight="light" />, ref: useRef() },
    { id: '#experience', icon: <Book weight="light" />, ref: useRef() },
    { id: '#projects', icon: <Cube weight="light" />, ref: useRef() },
    {
      id: '#contact',
      icon: <ChatCircleDots weight="light" />,
      ref: useRef(),
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      const activeNavItem = navItems.find((item) => {
        const targetElement = item.id === '#' ? window : item.ref.current
        return (
          targetElement.offsetTop - 100 <= scrollPosition &&
          targetElement.offsetTop + targetElement.offsetHeight - 100 >
            scrollPosition
        )
      })

      if (activeNavItem) {
        setActiveNav(activeNavItem.id)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleNavClick = (navId: string) => {
    const targetElement =
      navId === '#'
        ? window
        : navItems.find((item) => item.id === navId).ref.current
    targetElement.scrollIntoView({ behavior: 'smooth' })
    setActiveNav(navId)
  }

  return (
    <nav className="fixed bottom-4 left-[50%] z-[99] flex w-max -translate-x-[50%] gap-[0.8rem] rounded-full bg-nav px-[1.7rem] py-[0.7rem]">
      {navItems.map((item) => (
        <a
          key={item.id}
          className={
            activeNav === item.id
              ? 'flex rounded-full bg-purple-500 p-[0.8rem] text-[1.1rem] text-white'
              : 'flex rounded-full bg-transparent p-[0.8rem] text-[1.1rem] text-white hover:bg-nav'
          }
          onClick={() => handleNavClick(item.id)}
          href={item.id}
          ref={item.ref}
        >
          {item.icon}
        </a>
      ))}
    </nav>
  )
}
