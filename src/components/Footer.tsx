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
  return (
    <footer className="bg-[#1F2833]">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2023, Hart Solutions. All rights reserved.
          </div>
          <div>
            <img
              src="src/assets/hartsolutionslogo-white.svg"
              className="h-5"
              alt="white version of Hart Solutions company logo"
            />
          </div>

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

        <div className="flex flex-col justify-between">
          {/* <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updates in your inbox"
              />
              <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                Go
              </button>
            </div>
          </form> */}
          <div className="hidden text-white md:block">
            Copyright &copy; 2023, Hart Solutions. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
