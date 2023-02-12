import { useState } from 'react'
import { Link } from 'react-router-dom'

interface NavLink {
  name: string
  href: string
}

interface Props {
  navLinks: NavLink[]
  mobileNavLinks: NavLink[]
}

const NavBar: React.FC<Props> = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const { navLinks, mobileNavLinks } = props

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex container justify-between">
        <Link to="/" className="pt-1">
          <img
            src="assets/hartsolutionslogo.svg"
            alt="Hart Solutions company logo"
            className="md:w-40 lg:w-56 mr-1"
            draggable="false"
          />
        </Link>

        <div
          className={`hidden space-x-6 md:flex text-white ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          {navLinks.map(link => (
            <Link
              to={link.href}
              key={link.name}
              className="hover:text-darkGrayishBlue"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden p-3 px-6 pt-2 text-white bg-primaryAccent rounded-full baseline hover:bg-brightPrimaryAccent md:block"
        >
          Contact Us
        </Link>

        <button
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none"
          onClick={handleClick}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      <div
        className="md:hidden ${
            isOpen ? 'flex' : 'hidden'
          }"
      >
        <div
          id="menu"
          className={`absolute flex-col items-center ${
            isOpen ? 'flex' : 'hidden'
          } self-end py-8 mt-10 space-y-6 font-bold bg-darkBlue text-white left-6 right-6 drop-shadow-md sm:w-auto sm:self-center `}
        >
          {mobileNavLinks.map((link, index) => (
            <Link to={link.href} key={link.name}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
