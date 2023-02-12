import { Link } from 'react-router-dom'
import { useWindowSize } from '../../hooks/useWindowSize'

enum SCREEN_SIZE {
  SMALL = 640,
  MEDIUM = 768,
  LARGE = 1024,
  XLARGE = 1280,
}

interface testimonials {
  id: number
  name: string
  text: string
  image: string
}

interface Props {
  testimonials: testimonials[]
}

const TestimonialsSection: React.FC<Props> = (props: Props) => {
  const { testimonials } = props
  const windowSize = useWindowSize()

  return (
    <section id="testimonials">
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold text-center text-white">
          What Our Clients Are Saying
        </h2>

        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {windowSize.width < SCREEN_SIZE.MEDIUM ? (
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-greenAccents-100 md:w-1/3">
              <img
                src={testimonials[0].image}
                alt={`Image of ${testimonials[0].name}`}
                className="w-16 -mt-14"
              />
              <h5 className="text-leg text-bold">{testimonials[0].name}</h5>
              <p className="text-sm text-veryDarkBlue">
                {testimonials[0].text}
              </p>
            </div>
          ) : (
            testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-greenAccents-100 md:w-1/3"
              >
                <img
                  src={testimonial.image}
                  alt={`Image of ${testimonial.name}`}
                  className="w-16 -mt-14"
                />
                <h5 className="text-leg text-bold">{testimonial.name}</h5>
                <p className="text-sm text-veryDarkBlue">{testimonial.text}</p>
              </div>
            ))
          )}
        </div>

        <div className="my-16">
          <Link
            to="/contact"
            className="p-3 px-6 pt-2 text-white bg-primaryAccent rounded-full baseline hover:bg-brightPrimaryAccent"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
