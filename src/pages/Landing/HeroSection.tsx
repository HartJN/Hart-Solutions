import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row md:items-start">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl text-white font-bold text-center md:text-5xl md:text-left">
            Unlock Your Business's Potential
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            We design and build custom software solutions to help businesses
            achieve their goals and grow.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to="/contact"
              className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
            >
              Discover How
            </Link>
          </div>
        </div>

        <div className="md:w-1/2">
          <img
            src="src/assets/HeartSVG.svg"
            alt="illustrations of charts and percentages"
            className="h-96"
            draggable="false"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
