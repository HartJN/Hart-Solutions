interface PortfolioItem {
  title: string
  description: string
  image: string
}

interface Props {
  portfolioItems: PortfolioItem[]
}

const Portfolio: React.FC<Props> = (props: Props) => {
  const { portfolioItems } = props
  return (
    <div className="container mx-auto px-6 my-32 w-fit xl:mb-64 ">
      <h1 className="text-3xl font-bold  mb-6 text-white">Our Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item, index) => (
          <div key={index} className="bg-darkBlue p-6 rounded-lg shadow-lg">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover rounded-t-lg mb-6"
            />
            <h2 className="text-lg font-bold text-white mb-3">{item.title}</h2>
            <p className="text-white mb-3">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
