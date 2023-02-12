type Feature = {
  id: number
  title: string
  description: string
}

type Props = {
  features: Feature[]
}

const FeaturesSection: React.FC<Props> = (props: Props) => {
  const { features } = props

  return (
    <section id="features">
      <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        <div className="flex flex-col space-y-12 md:w-1/2 ">
          <h2 className="max-w-md text-4xl font-bold text-white text-center md:text-left">
            What's Different About Hart Solutions?
          </h2>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            At Hart Solutions, we believe that technology should be used to
            solve business problems and drive growth. That's why we focus on
            delivering custom software solutions that are tailored to the unique
            needs of each of our clients. With a team of experienced developers
            and business consultants, we're able to understand the challenges
            faced by businesses and design solutions that deliver real results.
          </p>
        </div>

        <div className="flex flex-col space-y-8 md:w-1/2">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
            >
              <div className="rounded-l-full bg-greenAccents-600 md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    {index + 1 < 10 ? '0' + (index + 1) : index + 1}
                  </div>
                  <h3 className="text-base font-bold text-white md:mb-4 md:hidden">
                    {feature.title}
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold text-white md:block">
                  {feature.title}
                </h3>
                <p className="text-darkGrayishBlue">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
