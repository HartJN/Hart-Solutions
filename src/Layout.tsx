import Footer from './components/Footer'
import NavBar from './components/NavBar'
import {
  footerNavLinksLeft,
  footerNavLinksRight,
  footerSocialIcons,
  mobileNavLinks,
  navLinks,
} from './data'
import PropTypes from 'prop-types'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="layout">
      <header>
        {<NavBar navLinks={navLinks} mobileNavLinks={mobileNavLinks} />}
      </header>
      <main>{children}</main>
      <footer>
        {
          <Footer
            footerSocialIcons={footerSocialIcons}
            footerNavLinksLeft={footerNavLinksLeft}
            footerNavLinksRight={footerNavLinksRight}
          />
        }
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
