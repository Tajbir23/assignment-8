

const Contact = () => {
  return (
    <section className="bg-gray-100 h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Send us a message</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea id="message" name="message" rows="4" className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Send Message</button>
            </form>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Contact Information</h3>
            <div className="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a8 8 0 00-8 8c0 4.418 3.582 8 8 8s8-3.582 8-8a8 8 0 00-8-8zm0 14a6 6 0 110-12 6 6 0 010 12z" clipRule="evenodd" />
                <path d="M10 8a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              <span className="text-gray-700">123 Main Street, Cityville, ABC 12345</span>
            </div>
            <div className="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a8 8 0 00-8 8c0 4.418 3.582 8 8 8s8-3.582 8-8a8 8 0 00-8-8zm0 14a6 6 0 110-12 6 6 0 010 12z" clipRule="evenodd" />
                <path d="M10 8a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              <span className="text-gray-700">+123 456 7890</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a8 8 0 00-8 8c0 4.418 3.582 8 8 8s8-3.582 8-8a8 8 0 00-8-8zm0 14a6 6 0 110-12 6 6 0 010 12z" clipRule="evenodd" />
                <path d="M10 8a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              <span className="text-gray-700">info@example.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
