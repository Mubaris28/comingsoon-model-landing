"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';

export default function TermsOfUse() {
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
          
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 border-b border-white/20 pb-4">Terms of Use</h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="prose prose-invert max-w-none"
        >
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p className="mb-4">
              These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Model Management ("we," "us" or "our"), concerning your access to and use of the modelmanagement.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
            </p>
            <p className="mb-4">
              You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Use. If you do not agree with all of these Terms of Use, then you are expressly prohibited from using the Site and you must discontinue use immediately.
            </p>
            <p className="mb-4">
              <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">User Representations</h2>
            <p className="mb-4">
              By using the Site, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">All registration information you submit will be true, accurate, current, and complete;</li>
              <li className="mb-2">You will maintain the accuracy of such information and promptly update such registration information as necessary;</li>
              <li className="mb-2">You have the legal capacity and you agree to comply with these Terms of Use;</li>
              <li className="mb-2">You are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Site;</li>
              <li className="mb-2">You will not access the Site through automated or non-human means, whether through a bot, script or otherwise;</li>
              <li className="mb-2">You will not use the Site for any illegal or unauthorized purpose;</li>
              <li className="mb-2">Your use of the Site will not violate any applicable law or regulation.</li>
            </ul>
            <p className="mb-4">
              If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Site (or any portion thereof).
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">User Registration</h2>
            <p className="mb-4">
              You may be required to register with the Site. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Prohibited Activities</h2>
            <p className="mb-4">
              You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
            </p>
            <p className="mb-4">
              As a user of the Site, you agree not to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
              <li className="mb-2">Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
              <li className="mb-2">Circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein.</li>
              <li className="mb-2">Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.</li>
              <li className="mb-2">Use any information obtained from the Site in order to harass, abuse, or harm another person.</li>
              <li className="mb-2">Make improper use of our support services or submit false reports of abuse or misconduct.</li>
              <li className="mb-2">Use the Site in a manner inconsistent with any applicable laws or regulations.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">User-Generated Contributions</h2>
            <p className="mb-4">
              The Site may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Site, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions").
            </p>
            <p className="mb-4">
              Contributions may be viewable by other users of the Site and through third-party websites. As such, any Contributions you transmit may be treated as non-confidential and non-proprietary. When you create or make available any Contributions, you thereby represent and warrant that:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.</li>
              <li className="mb-2">You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Site, and other users of the Site to use your Contributions in any manner contemplated by the Site and these Terms of Use.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="mb-4">
              These Terms shall be governed by and defined following the laws of [YOUR COUNTRY]. Model Management and yourself irrevocably consent that the courts of [YOUR COUNTRY] shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
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
            <Link href="/privacy-policy" className="text-white hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-use" className="text-white hover:text-gray-300 transition-colors font-medium">Terms of Use</Link>
            <Link href="/contact-us" className="text-white hover:text-gray-300 transition-colors">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
} 