import Image from 'next/image'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
// import 'react-vertical-timeline-component/style.min.css'

export const ExperienceCard = ({ experience }: any) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#2c2c31 ',
        color: '#fff',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #2c2c31' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <Image
            src={experience.icon}
            alt={experience.company}
            width={40}
            height={40}
          />
        </div>
      }
    >
      <div>
        <h3 className="-mb-4 text-2xl font-bold text-white">
          {experience.title}
        </h3>
        <p className="text-base font-semibold text-secondary">
          {experience.company}
        </p>
      </div>

      <ul className="ml-5 mt-2 list-disc space-y-2">
        {experience.points.map((point: any, index: any) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 pl-1 text-[14px]"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}
