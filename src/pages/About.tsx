export default function About() {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-gray-100 mb-4">About Wave App</h1>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're building the future of modern web applications with cutting-edge technology and user-centered design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-8 text-white">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
            <p className="text-blue-100">
              To create intuitive, powerful, and accessible web applications that empower users to achieve their goals efficiently.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-slate-200 dark:border-gray-700 p-8">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-3">Our Vision</h2>
            <p className="text-slate-600 dark:text-gray-300">
              To be the leading platform that bridges the gap between complex technology and simple, beautiful user experiences.
            </p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-slate-200 dark:border-gray-700 p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6 text-center">What We Believe In</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-gray-100 mb-2">Quality First</h3>
              <p className="text-slate-600 dark:text-gray-300">Every line of code is crafted with attention to detail and excellence.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-gray-100 mb-2">User Centered</h3>
              <p className="text-slate-600 dark:text-gray-300">Our users' needs and feedback drive every decision we make.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-gray-100 mb-2">Innovation</h3>
              <p className="text-slate-600 dark:text-gray-300">We constantly explore new technologies to stay ahead of the curve.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-50 dark:bg-gray-700 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-4">Get In Touch</h2>
          <p className="text-slate-600 dark:text-gray-300 mb-6">
            Have questions or want to learn more? We'd love to hear from you.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Contact Us
            </button>
            <button className="border border-slate-300 dark:border-gray-600 text-slate-700 dark:text-gray-300 font-medium px-6 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-gray-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}