'use client'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-bodyColor text-textLight pt-8 sm:pt-12 pb-8 border-t border-gray-700 px-4 sm:px-8 md:px-12">
      <div className="max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-textGreen flex items-center justify-center">
                <span className="text-bodyColor font-bold text-sm">TC</span>
              </div>
              <span className="text-lg font-bold text-textLight">Trust Charingani</span>
            </div>
            <p className="text-sm text-textDark">Building innovative digital solutions for impact-driven communities.</p>
            <div className="flex gap-4">
              <a href="#" className="text-textDark hover:text-textGreen transition duration-300" aria-label="GitHub">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.547 2.91 1.186.092-.923.35-1.547.636-1.903-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-textDark hover:text-textGreen transition duration-300" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554V9h3.416s.051-1.641 1.563-1.641c1.788 0 3.134 1.348 3.134 4.25v7.843zM5.337 7.433c-1.144 0-2.063-.931-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.134-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a href="#" className="text-textDark hover:text-textGreen transition duration-300" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-textLight">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-sm text-textDark hover:text-textGreen transition duration-300">Home</a></li>
              <li><a href="#about" className="text-sm text-textDark hover:text-textGreen transition duration-300">About</a></li>
              <li><a href="#projects" className="text-sm text-textDark hover:text-textGreen transition duration-300">Projects</a></li>
              <li><a href="#experience" className="text-sm text-textDark hover:text-textGreen transition duration-300">Experience</a></li>
              <li><a href="#contact" className="text-sm text-textDark hover:text-textGreen transition duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-textLight">Tech Stack</h3>
            <ul className="space-y-2">
              <li><span className="text-sm text-textDark">React & Next.js</span></li>
              <li><span className="text-sm text-textDark">TypeScript</span></li>
              <li><span className="text-sm text-textDark">Tailwind CSS</span></li>
              <li><span className="text-sm text-textDark">Framer Motion</span></li>
              <li><span className="text-sm text-textDark">Web Accessibility</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-textLight">Get in Touch</h3>
            <address className="not-italic text-sm text-textDark space-y-2">
              <p>Harare, Zimbabwe</p>
              <p>Email: <a href="mailto:trust@example.com" className="text-textGreen hover:underline">trustcharingani@gmail.com</a></p>
              <p>Phone: <a href="tel:+263776118494" className="text-textGreen hover:underline">+263776118494</a></p>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-textDark">© 2025 Trust Charingani. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
            <a href="#" className="text-xs sm:text-sm text-textDark hover:text-textGreen transition duration-300">Privacy Policy</a>
            <a href="#" className="text-xs sm:text-sm text-textDark hover:text-textGreen transition duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer