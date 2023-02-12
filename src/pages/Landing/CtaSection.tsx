import { Link } from 'react-router-dom'

type Props = {}

const CtaSection = (props: Props) => {
  return (
    <section id="cta" className="bg-primaryAccent ">
      <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0 xl:mb-52">
        <h2 className="text-5xl font-bolt leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
          Transform your business with custom software solutions.
        </h2>

        <div>
          <Link
            to="/contact"
            className="p-3 px-6 pt-2 text-primaryAccent bg-white rounded-full baseline shadow-2xl hover:bg-gray-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
