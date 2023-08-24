'use-client'
// import { useEffect, useRef } from 'react'
import { GithubLogo } from '@phosphor-icons/react'
import Link from 'next/link'

interface Tag {
  name: string
  color: string
}

interface ProjectCardProps {
  name: string
  description: string
  tags: Tag[]
  image: any // FIX: change to correct type
  link: string
}

export const ProjectCard = ({
  name,
  description,
  tags,
  image,
  link,
}: ProjectCardProps) => {
  return (
    <div className="hover:border-1 w-full rounded-2xl border-[1px] border-gray-400 bg-gray-500 p-5 hover:border-purple-700 hover:bg-transparent sm:w-[22.5rem]">
      <div className="relative h-[14.375rem] w-full">
        <img
          src={image}
          alt=""
          className="h-full w-full rounded-2xl object-cover"
        />
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between">
          <h2 className="text-[1.5rem] font-bold text-white">{name}</h2>
          <Link
            href={link}
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-500"
          >
            <GithubLogo size={20} className="mr-2" />
          </Link>
        </div>
        <p className="mt-2 text-[0.875rem] text-gray-200">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[0.875rem] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  )
}
