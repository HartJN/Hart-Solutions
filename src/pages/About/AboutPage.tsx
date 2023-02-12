import React from 'react'

interface AboutSection {
  id: number
  title: string
  description: string
  items?: {
    title: string
    description: string
  }[]
}

interface Props {
  aboutSections: AboutSection[]
}

const AboutPage: React.FC<Props> = (props: Props) => {
  const { aboutSections } = props
  return (
    <div className="px-4 py-10 text-white">
      {aboutSections.map(section => (
        <div key={section.id} className="px-4 py-10">
          <h2 className="text-2xl font-bold">{section.title}</h2>
          <p className="py-4">{section.description}</p>
          {section.items && (
            <ul className="list-disc pl-5">
              {section.items.map((item, index) => (
                <li key={index} className="py-2">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="py-2">{item.description}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}

export default AboutPage
