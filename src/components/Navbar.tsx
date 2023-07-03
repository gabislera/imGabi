'use client'
import React, {
  useState,
  useEffect,
  useRef,
  MutableRefObject,
  useMemo,
} from 'react'
import { House, User, Book, Cube, ChatCircleDots } from '@phosphor-icons/react'

interface NavItem {
  id: string
  icon: React.JSX.Element
  ref: MutableRefObject<any>
}

export const Navbar = () => {
  const [activeNav, setActiveNav] = useState<string>('#home')
  const ref = useRef()

  const navItems: NavItem[] = useMemo(() => {
    return [
      { id: '#home', icon: <House weight="light" />, ref },
      { id: '#about', icon: <User weight="light" />, ref },
      { id: '#experience', icon: <Book weight="light" />, ref },
      { id: '#projects', icon: <Cube weight="light" />, ref },
      {
        id: '#contact',
        icon: <ChatCircleDots weight="light" />,
        ref,
      },
    ]
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY // Obtém a posição atual de rolagem vertical da janela

      const activeNavItem = navItems.find((item) => {
        const targetElement = item.id === '#' ? window : item.ref.current // Obtém o elemento alvo com base no ID do item de navegação. Se o ID for '#', o elemento alvo é a janela (window).

        return (
          targetElement.offsetTop - 100 <= scrollPosition &&
          targetElement.offsetTop + targetElement.offsetHeight - 100 >
            scrollPosition
        ) // Verifica se a posição de rolagem está dentro do intervalo do elemento alvo. Subtrai 100 para ajustar a margem superior.
      })

      if (activeNavItem) {
        setActiveNav(activeNavItem.id)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [navItems])

  const handleNavClick = (navId: string) => {
    const targetElement =
      navId === '#'
        ? window
        : navItems.find((item) => item.id === navId)?.ref.current
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
