'use-client'
// import { useEffect, useRef } from 'react'
import { GithubLogo } from '@phosphor-icons/react'

interface Tag {
  name: string
  color: string
}

interface ProjectCardProps {
  name: string
  description: string
  tags: Tag[]
  image: any
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
    <div className="w-full rounded-2xl border-[1px] border-gray-400 bg-gray-500 p-5 hover:border-2 hover:border-purple-700 hover:bg-transparent sm:w-[360px]">
      <div className="relative h-[230px] w-full">
        <img
          src={image}
          alt=""
          className="h-full w-full rounded-2xl object-cover"
        />
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between">
          <h3 className="text-[24px] font-bold text-white">{name}</h3>
          <a href={link} target="_blank" rel="noreferrer">
            <GithubLogo size={20} className="mr-2" />
          </a>
        </div>
        <p className="mt-2 text-[14px] text-gray-200">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  )
}
