interface ServiceType {
  id: number
  type: string
  title: string
  features?: string[]
  benefits?: string[]
  content: string
}

interface Props {
  services: ServiceType[]
}

const ServicesPage: React.FC<Props> = (props: Props) => {
  const { services } = props
  return (
    <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 mb-32 md:space-y-0 md:w-2/3 xl:mb-64">
      {services.map(service => (
        <div key={service.id} className="px-4 py-10 text-white">
          <h2 className="text-2xl font-bold">{service.title}</h2>

          {service.features && (
            <ul className="list-disc pl-5">
              {service.features.map((feature, index) => (
                <li key={index} className="py-2">
                  {feature}
                </li>
              ))}
            </ul>
          )}
          {service.benefits && (
            <ul className="list-disc pl-5">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="py-2">
                  {benefit}
                </li>
              ))}
            </ul>
          )}
          <p className="py-4">{service.content}</p>
        </div>
      ))}
    </div>
  )
}

export default ServicesPage
