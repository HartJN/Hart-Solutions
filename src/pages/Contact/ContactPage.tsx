import React from 'react'

type Props = {}

const ContactPage: React.FC<Props> = () => {
  return (
    <div className="container mx-auto px-6">
      <h1 className="text-3xl font-bold text-white">Get in Touch</h1>
      <p className="text-white mb-6">
        Let's work together to create the perfect solution for your business
        needs. Fill out the form below and we'll be in touch.
      </p>
      <form className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 h-32"
            id="message"
            name="message"
            required
          />
        </div>
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactPage
