"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="container mx-auto px-4 py-4 sm:py-6">
        <div className="flex justify-start">
          <Link href="/" className="inline-flex items-center text-white hover:text-gray-300">
            <Image src="/images/model.logo.svg" alt="Model Management" width={150} height={40} className="invert" />
          </Link>
        </div>
      </div>
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <FaArrowLeft className="mr-2" />
            <span>Back to Home</span>
          </Link>
          
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 border-b border-white/20 pb-4">Contact Us</h1>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <p className="mb-8 text-white/90">
              Have questions about our model management platform? We're here to help! Fill out the form, and we'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                  <FaPhoneAlt className="text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Phone</h3>
                  <p className="text-white/80">+1 (555) 123-4567</p>
                  <p className="text-white/80">Monday-Friday, 9AM-6PM EST</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Email</h3>                  
                  <p className="text-white/80">info@modelmanagement.mu</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Address</h3>
                  <p className="text-white/80">123 Model Street</p>
                  <p className="text-white/80">Fashion City, FC 12345</p>
                  <p className="text-white/80">United States</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="font-medium text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors" aria-label="Instagram">
                  <FaInstagram className="text-white" />
                </a>
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors" aria-label="Facebook">
                  <FaFacebook className="text-white" />
                </a>
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors" aria-label="Twitter">
                  <FaTwitter className="text-white" />
                </a>
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors" aria-label="LinkedIn">
                  <FaLinkedin className="text-white" />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="bg-black/40 backdrop-blur-md p-6 sm:p-8 rounded-xl border border-white/30 shadow-xl"
          >
            <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-white">Full Name</label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-3 py-2 bg-black/40 border border-white/30 rounded-lg focus:outline-none focus:border-white text-white"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-white">Email</label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-3 py-2 bg-black/40 border border-white/30 rounded-lg focus:outline-none focus:border-white text-white"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1 text-white">Subject</label>
                <input
                  id="subject"
                  type="text"
                  className="w-full px-3 py-2 bg-black/40 border border-white/30 rounded-lg focus:outline-none focus:border-white text-white"
                  placeholder="Enter message subject"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-white">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-3 py-2 bg-black/40 border border-white/30 rounded-lg focus:outline-none focus:border-white text-white"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              
              <div className="flex items-center">
                <input
                  id="consent"
                  type="checkbox"
                  className="h-4 w-4 bg-black/40 border-white/50 focus:ring-white text-white"
                  required
                />
                <label htmlFor="consent" className="ml-2 block text-sm text-white/80">
                  I consent to having this website store my submitted information so they can respond to my inquiry
                </label>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-white text-black rounded-lg font-medium hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 flex justify-center items-center transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </main>
      
      <footer className="container mx-auto px-4 py-4 sm:py-6 text-center text-xs sm:text-sm text-white">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-3 md:mb-0">
            &copy; {new Date().getFullYear()} Model Management. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-3 md:gap-6 justify-center">
            <Link href="/privacy-policy" className="text-white hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-use" className="text-white hover:text-gray-300 transition-colors">Terms of Use</Link>
            <Link href="/contact-us" className="text-white hover:text-gray-300 transition-colors font-medium">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
} 