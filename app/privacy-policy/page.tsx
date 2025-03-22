"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="container mx-auto px-4 py-4 sm:py-6">
        <div className="flex justify-start">
          <Link href="/" className="inline-flex items-center text-white hover:text-gray-300">
            <Image src="/images/model.logo.svg" alt="Model Management" width={150} height={40} className="invert" />
          </Link>
        </div>
      </div>
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
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
          
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 border-b border-white/20 pb-4">Privacy Policy</h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="prose prose-invert max-w-none"
        >
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="mb-4">
              At Model Management, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our platform.
            </p>
            <p className="mb-4">
              We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of this Privacy Policy.
            </p>
            <p className="mb-4">
              <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="mb-4">
              We may collect information about you in various ways. The information we may collect via the platform includes:
            </p>
            <h3 className="text-xl font-semibold mb-2">Personal Data</h3>
            <p className="mb-4">
              Personally identifiable information, such as your name, email address, telephone number, and demographic information that you voluntarily give to us when you register with the platform or when you choose to participate in various activities related to the platform.
            </p>
            <h3 className="text-xl font-semibold mb-2">Derivative Data</h3>
            <p className="mb-4">
              Information our servers automatically collect when you access the platform, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the platform.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="mb-4">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the platform to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Create and manage your account.</li>
              <li className="mb-2">Fulfill and manage bookings, payments, and other transactions related to the platform.</li>
              <li className="mb-2">Send you a newsletter with relevant industry information.</li>
              <li className="mb-2">Email you regarding your account or booking activity.</li>
              <li className="mb-2">Compile anonymous statistical data and analysis for use internally or with third parties.</li>
              <li className="mb-2">Increase the efficiency and operation of the platform.</li>
              <li className="mb-2">Monitor and analyze usage and trends to improve your experience with the platform.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Disclosure of Your Information</h2>
            <p className="mb-4">
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
            </p>
            <h3 className="text-xl font-semibold mb-2">By Law or to Protect Rights</h3>
            <p className="mb-4">
              If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
            </p>
            <h3 className="text-xl font-semibold mb-2">Third-Party Service Providers</h3>
            <p className="mb-4">
              We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Security of Your Information</h2>
            <p className="mb-4">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <p className="mb-4">
              <strong>Email:</strong> privacy@modelmanagement.com<br />
              <strong>Phone:</strong> +1 (555) 123-4567<br />
              <strong>Address:</strong> 123 Model Street, Fashion City, FC 12345
            </p>
          </section>
        </motion.div>
      </main>
      
      <footer className="container mx-auto px-4 py-4 sm:py-6 text-center text-xs sm:text-sm text-white">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-3 md:mb-0">
            &copy; {new Date().getFullYear()} Model Management. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-3 md:gap-6 justify-center">
            <Link href="/privacy-policy" className="text-white hover:text-gray-300 transition-colors font-medium">Privacy Policy</Link>
            <Link href="/terms-of-use" className="text-white hover:text-gray-300 transition-colors">Terms of Use</Link>
            <Link href="/contact-us" className="text-white hover:text-gray-300 transition-colors">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
} 