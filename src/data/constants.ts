////////////////////////////////////
/// NavBar

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About Us', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
]

export const mobileNavLinks = [
  ...navLinks,
  { name: 'Contact Us', href: '/contact' },
]

////////////////////////////////////
/// Footer

export const footerSocialIcons = [
  {
    name: 'Facebook',
    icon: 'src/assets/icon-facebook.svg',
    link: 'https://www.facebook.com/',
  },
  {
    name: 'Instagram',
    icon: 'src/assets/icon-instagram.svg',
    link: 'https://www.instagram.com/',
  },
  {
    name: 'Twitter',
    icon: 'src/assets/icon-twitter.svg',
    link: 'https://twitter.com/',
  },
  {
    name: 'Pinterest',
    icon: 'src/assets/icon-pinterest.svg',
    link: 'https://www.pinterest.com/',
  },
]

export const footerNavLinksLeft = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Services',
    link: '/services',
  },
  {
    name: 'About Us',
    link: '/about',
  },
  {
    name: 'Portfolio',
    link: '/portfolio',
  },
]

export const footerNavLinksRight = [
  {
    name: 'Contact Us',
    link: '/contact',
  },
  {
    name: 'Privacy Policy',
    link: '/',
  },
]

////////////////////////////////////
// Landing Page

///Features

export const features = [
  {
    id: 1,
    title: 'Customized Solutions',
    description:
      "We don't believe in one-size-fits-all solutions. Instead, we work closely with our clients to understand their unique needs and design custom software solutions that meet those needs. Our goal is to help businesses achieve their goals and grow.",
  },
  {
    id: 2,
    title: 'Experienced Team',
    description:
      "Our team of developers and business consultants have years of experience delivering high-quality software solutions. We're experts in a wide range of technologies and always up-to-date with the latest trends and best practices.",
  },
  {
    id: 3,
    title: 'Results-Driven Approach',
    description:
      "We believe that technology should drive real business results. That's why we focus on delivering solutions that are designed to help our clients achieve their goals and grow. Our success is measured by the success of our clients.",
  },
]

// Testimonials

export const testimonials = [
  {
    id: 1,
    name: 'Anisha Li',
    text: "Hart Solutions was instrumental in helping us launch our new e-commerce platform. Their team was knowledgeable, efficient, and always a pleasure to work with. We appreciate their attention to detail and their commitment to delivering a quality product. We've already seen a significant increase in sales since launching the new platform and we couldn't be happier with the results.",
    image: 'src/assets/avatar-anisha.png',
  },
  {
    id: 2,
    name: 'Ali Bravo',
    text: "We had been struggling to find a software solution that could help us streamline our business processes, but after working with Hart Solutions, we finally have a system that works for us. Their team was able to understand our needs and design a custom solution that has made a big impact on our bottom line. We're grateful for their help and would highly recommend them to any business looking for software solutions.",
    image: 'src/assets/avatar-ali.png',
  },
  {
    id: 3,
    name: 'Richard Watts',
    text: 'Working with Hart Solutions was an excellent experience. Their team was professional, responsive, and always went above and beyond to make sure we were satisfied with the final product. They took the time to understand our needs and delivered a custom software solution that exceeded our expectations. We highly recommend them to anyone looking for a partner to help with their software needs.',
    image: 'src/assets/avatar-richard.png',
  },
]

//////////////////////////
// ServicesPage

export const services = [
  {
    id: 1,
    type: 'section',
    title: 'Services Overview',
    content: `Hart Solutions is a leading provider of custom software solutions for businesses of all sizes. Our team of experienced developers and business consultants work closely with clients to understand their unique needs and provide tailored solutions that drive results.`,
  },
  {
    id: 2,
    type: 'service',
    title: 'Custom Software Development',
    features: [
      'User-friendly interfaces',
      'Scalable and secure architecture',
      'Integration with existing systems',
      'Customizable to meet specific business needs',
    ],
    benefits: [
      'Increased efficiency and productivity',
      'Better data management and decision-making',
      'Improved customer satisfaction',
      'Competitive advantage in your market',
    ],
    content: `Our custom software development services are designed to help businesses streamline their operations and optimize their processes. Our developers use the latest technologies and methodologies to create software that is both powerful and easy to use.`,
  },
  {
    id: 3,
    type: 'service',
    title: 'Business Consulting',
    features: [
      'Comprehensive assessments of business processes and systems',
      'Tailored recommendations for improvement',
      'Implementation support',
      'Ongoing support and consultation',
    ],
    benefits: [
      'Increased efficiency and profitability',
      'Better alignment between strategy and operations',
      'Improved customer satisfaction',
      'Enhanced competitiveness in your market',
    ],
    content: `Our business consulting services are designed to help businesses maximize their potential and achieve their goals. Our consultants have years of experience in a variety of industries and use their expertise to provide strategic guidance and recommendations.`,
  },
  {
    id: 4,
    type: 'service',
    title: 'Mobile App Development',
    features: [
      'User-friendly interfaces',
      'Cross-platform compatibility',
      'Integration with existing systems',
      'Customizable to meet specific business needs',
    ],
    benefits: [
      'Increased customer engagement',
      'Better access to business information and services',
      'Improved customer satisfaction',
      'Competitive advantage in your market',
    ],
    content: `Our mobile app development services are designed to help businesses reach and engage their customers in new and innovative ways. Our developers create mobile apps that are both functional and visually appealing, and can be customized to meet the specific needs of each client.`,
  },
]

//////////////////////////
// AboutPage

export const aboutSections = [
  {
    id: 1,
    title: "What's Different About Hart Solutions?",
    description:
      'We are a company dedicated to providing top-notch business solutions to other businesses. We stand out from the crowd by providing custom software and services tailored to the specific needs of each client. Our focus on delivering the best results for our clients is what sets us apart.',
    items: [
      {
        title: 'Experience and Expertise',
        description:
          'Our team is made up of experienced and knowledgeable professionals who are passionate about delivering the best solutions. We have a wealth of experience in delivering business solutions and are always up-to-date with the latest technologies and trends.',
      },
      {
        title: 'Customized Solutions',
        description:
          'We understand that no two businesses are alike, which is why we take a personalized approach to each project. We work closely with each client to understand their specific needs and tailor our solutions to meet those needs.',
      },
      {
        title: 'Committed to Quality',
        description:
          'At Hart Solutions, we are committed to delivering the highest quality solutions and services. We believe in putting in the extra effort to ensure that our clients are completely satisfied with the results.',
      },
    ],
  },
]

//////////////////////////
// PortfolioPage

export const portfolioItems = [
  {
    title: 'Project 1',
    description:
      'A custom software solution for a retail company to streamline their inventory management and sales processes.',
    image: 'src/assets/elfco-secret-santa.png',
  },
  {
    title: 'Project 2',
    description:
      'A web-based platform for a local restaurant to manage their online ordering and delivery services.',
    image: 'src/assets/forkify.png',
  },
  {
    title: 'Project 3',
    description:
      'A mobile app for a fitness center to manage member registration, class scheduling, and payments.',
    image: 'src/assets/tech-tok.png',
  },
]
