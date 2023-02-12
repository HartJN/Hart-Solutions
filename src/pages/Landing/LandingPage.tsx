import CtaSection from './CtaSection'
import FeaturesSection from './FeaturesSection'
import HeroSection from './HeroSection'
import TestimonialsSection from './TestimonialsSection'

import { features, testimonials } from '../../data/index'

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection features={features} />
      <TestimonialsSection testimonials={testimonials} />
      <CtaSection />
    </>
  )
}

export default LandingPage
