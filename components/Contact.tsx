'use client'
import { motion } from 'framer-motion'
import SectionTitle from "./SectionTitle"
import { HiOutlineMapPin, HiOutlinePhone, HiOutlineClock } from 'react-icons/hi2'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <motion.section 

    id="contact"
    className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] mx-auto px-4 sm:px-8 md:px-12 py-8 sm:py-12 md:py-16 flex flex-col gap-8 sm:gap-12 mt-20" >
      <SectionTitle titleNo="04" title="Get In Touch" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        
        {/* Contact Information */}
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-sm sm:text-base text-textDark mb-4 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            {/* Location */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 flex items-start pt-1">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-textGreen text-bodyColor">
                  <HiOutlineMapPin className="w-6 h-6" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-base font-semibold text-textLight mb-1">Location</h3>
                <p className="text-sm text-textDark">Harare, Zimbabwe</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 flex items-start pt-1">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-textGreen text-bodyColor">
                  <HiOutlinePhone className="w-6 h-6" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-base font-semibold text-textLight mb-1">Contact</h3>
                <p className="text-sm text-textDark">
                  <a href="mailto:trustcharingani@gmail.com" className="hover:text-textGreen transition duration-300">
                    trustcharingani@gmail.com
                  </a>
                </p>
                <p className="text-sm text-textDark mt-1">
                  <a href="tel:+263" className="hover:text-textGreen transition duration-300">
                    +263776118494
                  </a>
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 flex items-start pt-1">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-textGreen text-bodyColor">
                  <HiOutlineClock className="w-6 h-6" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-base font-semibold text-textLight mb-1">Availability</h3>
                <p className="text-sm text-textDark">Monday - Friday: 08:00 - 17:00</p>
                <p className="text-sm text-textDark mt-1">Saturday & Sunday: 10:00 - 14:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#112240] rounded-lg p-6 sm:p-8 border border-textGreen border-opacity-30">
          <h2 className="text-xl sm:text-2xl font-bold text-textLight mb-6">Send me a message</h2>
          
          {submitted ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <div className="mb-4 text-textGreen text-4xl">✓</div>
                <p className="text-textGreen font-semibold">Message sent successfully!</p>
                <p className="text-textDark text-sm mt-2">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-textDark mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="your name/Company name"
                  autoComplete="given-name"
                  required
                  className="w-full px-4 py-2 sm:py-3 rounded-md border border-gray-600 bg-bodyColor text-textLight placeholder-gray-500 focus:outline-none focus:border-textGreen focus:ring-1 focus:ring-textGreen transition duration-200"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-textDark mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className="w-full px-4 py-2 sm:py-3 rounded-md border border-gray-600 bg-bodyColor text-textLight placeholder-gray-500 focus:outline-none focus:border-textGreen focus:ring-1 focus:ring-textGreen transition duration-200"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-textDark mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={5}
                  required
                  className="w-full px-4 py-2 sm:py-3 rounded-md border border-gray-600 bg-bodyColor text-textLight placeholder-gray-500 focus:outline-none focus:border-textGreen focus:ring-1 focus:ring-textGreen transition duration-200 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-textGreen hover:bg-opacity-90 text-bodyColor font-semibold py-2 sm:py-3 px-6 rounded-md transition duration-300 transform hover:scale-105 mt-6 sm:mt-8"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </motion.section>
  )
}

export default Contact