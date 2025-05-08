"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaGooglePlay } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation Variants
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="home-page"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        exit="exit"
        variants={pageVariants}
        className="min-h-screen flex flex-col relative overflow-hidden"
      >
        {/* Background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-black"
          style={{
            background:
              "linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url('/images/teenagers-with-skate-radio.jpg') center/cover no-repeat",
          }}
        />

        {/* Header - Navigation */}
        <header className="z-10 relative">
          <nav className="flex items-center justify-between px-6 py-4 bg-transparent text-white">
            <Link href="/" className="flex items-center">
              <Image src="/images/logo/model-LOGO.png" alt="Logo" width={120} height={40} />
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/castings" className="hover:underline">Casting</Link>
              <Link href="/models" className="hover:underline">Models</Link>
              <Link href="/directory" className="hover:underline">Pro Directory</Link>
              <Link href="/marketplace" className="hover:underline">Marketplace</Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/login" className="text-sm font-medium">Log In</Link>
              <Link href="/signup" className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium">Sign Up</Link>
            </div>
            <button className="md:hidden flex flex-col gap-1">
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
            </button>
          </nav>
        </header>

        {/* Main - Hero Section */}
        <main className="relative z-10 text-white px-6 py-20 md:py-32">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Perfect Match in Modeling</h1>
              <p className="mb-6 text-lg leading-relaxed">
                Connect with top agencies and brands worldwide. Whether you're a model looking for opportunities
                or a professional seeking talent, we've got you covered.
              </p>
              <div className="flex space-x-4">
                <Link href="/models-talents" className="bg-white text-black px-6 py-2 rounded-full font-semibold">For Models & Talents</Link>
                <Link href="/professionals" className="border border-white px-6 py-2 rounded-full font-semibold">For Professionals</Link>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="rounded-lg overflow-hidden">
              <Image
                src="/images/models/hero-1.jpeg"
                alt="Professional Model"
                width={600}
                height={400}
                className="rounded-xl object-cover"
              />
            </motion.div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-black text-white mt-auto pt-10 pb-6 px-6 z-10 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#">About us</Link></li>
                <li><Link href="#">Careers</Link></li>
                <li><Link href="#">Press</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Help</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#">FAQ</Link></li>
                <li><Link href="#">Support</Link></li>
                <li><Link href="#">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#">Privacy Policy</Link></li>
                <li><Link href="#">Terms of Service</Link></li>
                <li><Link href="#">Cookie Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Download Our App</h3>
              <div className="space-y-2">
                <Link href="#" className="flex items-center space-x-2 text-sm">
                  <FaGooglePlay /> <span>Google Play</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
            <div className="flex justify-center space-x-4 mb-2">
              <FaInstagram />
              <FaFacebook />
              <FaLinkedin />
              <FaTwitter />
            </div>
            <p>&copy; 2024 Model Management. All rights reserved.</p>
          </div>
        </footer>
      </motion.div>
    </AnimatePresence>
  );
}
