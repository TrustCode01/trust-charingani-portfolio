"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaCommentDots } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'

const StickyCTA = ({ onOpen }) => {
  if (typeof window === 'undefined') return null

  const content = (
    <div className="fixed right-4 top-24 z-60 pointer-events-auto flex flex-col items-end gap-3">
      <motion.a
        href="tel:+1234567890"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.05 }}
        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        aria-label="Call us"
      >
        <FaPhone className="w-4 h-4" aria-hidden="true" />
        <span className="hidden sm:inline"></span>
      </motion.a>

      <motion.a
        href="https://wa.me/+263719118494"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.12 }}
        className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
        aria-label="WhatsApp us"
      >
        <FaWhatsapp className="w-4 h-4" aria-hidden="true" />
        <span className="hidden sm:inline"></span>
      </motion.a>

      <motion.button
        onClick={onOpen}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.18 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Request a quote"
      >
        <FaCommentDots className="w-4 h-4" aria-hidden="true" />
        <span></span>
      </motion.button>
    </div>
  )

  return createPortal(content, document.body)
}

StickyCTA.propTypes = {
  onOpen: PropTypes.func,
}

StickyCTA.defaultProps = {
  onOpen: () => {},
}

export default StickyCTA
