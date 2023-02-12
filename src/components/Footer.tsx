import React from 'react'
import { Link } from 'react-router-dom'

interface footerIcons {
  name: string
  icon: string
  link: string
}

interface footerNav {
  name: string
  link: string
}

interface Props {
  footerSocialIcons: footerIcons[]
  footerNavLinksLeft: footerNav[]
  footerNavLinksRight: footerNav[]
}

const Footer: React.FC<Props> = (props: Props) => {
  const { footerSocialIcons, footerNavLinksLeft, footerNavLinksRight } = props

  const handleGoToTopClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#1F2833]">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2023, Hart Solutions. All rights reserved.
          </div>
          <Link to={'/'}>
            <img
              src="/assets/hartsolutionslogo-white.svg"
              className="h-5"
              alt="white version of Hart Solutions company logo"
            />
          </Link>

          <div className="flex justify-center space-x-4">
            {footerSocialIcons.map(icon => (
              <Link to={icon.link} key={icon.name}>
                <img src={icon.icon} alt={`Logo for ${icon.name}`} />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex justify-around space-x-28 sm:space-x-16 sm:px-3">
          <div className="flex flex-col space-y-3 text-white">
            {footerNavLinksLeft.map(link => (
              <Link
                to={link.link}
                key={link.name}
                className="hover:text-brightRed"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col space-y-3 text-white">
            {footerNavLinksRight.map(link => (
              <Link
                to={link.link}
                key={link.name}
                className="hover:text-brightRed"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* goto top */}

        <div className="flex flex-col justify-between">
          <div className="flex justify-center md:justify-end">
            <button
              onClick={handleGoToTopClick}
              className="flex items-center justify-center w-10 h-10 text-white bg-brightRed rounded-full hover:bg-brightRedLight"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
          <div className="hidden text-white md:block">
            Copyright &copy; 2023, Hart Solutions. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
