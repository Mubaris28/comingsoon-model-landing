"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Set loaded state after component mounts to trigger animations
    setIsLoaded(true);
  }, []);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setMessage({ text: 'Please enter a valid email address', type: 'error' });
      return;
    }
    
    setIsSubmitting(true);
    setMessage(null);
    
    try {
      // Simulate API call since we've removed the actual subscription service
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setEmail("");
      setMessage({ 
        text: 'Thank you! We will notify you when we launch.', 
        type: 'success' 
      });
      
    } catch (error) {
      console.error('Subscription error:', error);
      setMessage({ 
        text: 'Failed to subscribe. Please try again.', 
        type: 'error' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Page transition variants
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6, 
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 } 
    }
  };
  
  // Child element variants for staggered animations
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
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
        {/* Background with monochrome filter for model management */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-black" 
          style={{ 
            background: `
              linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)),
              url('/images/teenagers-with-skate-radio.jpg') center/cover no-repeat
            `,
            // filter: 'grayscale(100%)'
          }}
        />
        
        {/* Header */}
        <header className="container mx-auto px-4 py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-center gap-3 z-10">
          <motion.div
            variants={itemVariants}
            className="w-full sm:w-auto flex justify-center sm:justify-start"
          >
            <Image src="/images/model.logo.svg" alt="Model Management" width={150} height={50} priority className="invert" />
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex gap-3 w-full sm:w-auto justify-center sm:justify-end mt-3 sm:mt-0"
          >
            <Link href="/login" className="btn-secondary text-sm px-4 py-2 transition-all duration-300 hover:scale-105">Log in</Link>
            <Link href="/signup" className="btn-primary text-sm px-4 py-2 transition-all duration-300 hover:scale-105">Sign up</Link>
          </motion.div>
        </header>

        {/* Main Content */}
        <main className="flex-grow flex flex-col justify-center items-center px-4 text-center z-10 py-6 sm:py-8 md:py-12">
          <motion.div
            variants={itemVariants}
            className="max-w-4xl px-2 sm:px-4"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white drop-shadow-lg"
            >
              Coming Soon
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-md sm:text-lg md:text-xl mb-6 sm:mb-8 text-white max-w-2xl mx-auto px-2 drop-shadow-md"
            >
              We're building a platform to connect models and agencies more efficiently, transparently, and fairly. Get ready for a new era of model management.
            </motion.p>
            
            {/* Value Proposition Cards */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12"
            >
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                className="backdrop-blur-md p-4 sm:p-6 rounded-xl border border-white/30 hover:border-white transition-all duration-300 shadow-xl"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.5 14.5C15.5 15.8807 14.3807 17 13 17C11.6193 17 10.5 15.8807 10.5 14.5C10.5 13.1193 11.6193 12 13 12C14.3807 12 15.5 13.1193 15.5 14.5Z" fill="white"/>
                      <path d="M19.5 14.5C19.5 18.0899 16.5899 21 13 21C9.41015 21 6.5 18.0899 6.5 14.5C6.5 10.9101 9.41015 8 13 8C16.5899 8 19.5 10.9101 19.5 14.5Z" stroke="white" strokeWidth="2"/>
                      <path d="M16.5 7.5L18 6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white drop-shadow-sm text-center">Discover Talent</h3>
                <p className="text-white text-opacity-90 text-sm sm:text-base text-center">Find the perfect models for your projects with our advanced search and filtering system.</p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                className="backdrop-blur-md p-4 sm:p-6 rounded-xl border border-white/30 hover:border-white transition-all duration-300 shadow-xl"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 11.5C9 12.8807 7.88071 14 6.5 14C5.11929 14 4 12.8807 4 11.5C4 10.1193 5.11929 9 6.5 9C7.88071 9 9 10.1193 9 11.5Z" fill="white"/>
                      <path d="M20 11.5C20 12.8807 18.8807 14 17.5 14C16.1193 14 15 12.8807 15 11.5C15 10.1193 16.1193 9 17.5 9C18.8807 9 20 10.1193 20 11.5Z" fill="white"/>
                      <path d="M14 19.5C11.8783 19.5 9.84344 18.6571 8.34315 17.1569C6.84285 15.6566 6 13.6217 6 11.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M10 19.5C12.1217 19.5 14.1566 18.6571 15.6569 17.1569C17.1571 15.6566 18 13.6217 18 11.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white drop-shadow-sm text-center">Connect Directly</h3>
                <p className="text-white text-opacity-90 text-sm sm:text-base text-center">Communicate and collaborate with models and agencies without intermediaries.</p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                className="backdrop-blur-md p-4 sm:p-6 rounded-xl border border-white/30 hover:border-white transition-all duration-300 shadow-xl sm:col-span-2 md:col-span-1"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="4" y="4" width="16" height="16" rx="2" stroke="white" strokeWidth="2"/>
                      <path d="M9 10.5V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12 7.5V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M15 13.5V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white drop-shadow-sm text-center">Manage Bookings</h3>
                <p className="text-white text-opacity-90 text-sm sm:text-base text-center">Streamline your booking process with our comprehensive management tools.</p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="max-w-md mx-auto px-3 mb-8 sm:mb-12"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white drop-shadow-md">Be the First to Know</h3>
              <p className="text-white mb-4 sm:mb-6 drop-shadow-sm text-sm sm:text-base">Join our waitlist to get early access and exclusive updates about our launch.</p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="flex-grow px-4 py-3 rounded-full border border-white/50 focus:outline-none focus:border-white bg-black/40 backdrop-blur-md text-white placeholder:text-white/70 disabled:opacity-70 transition-all duration-300"
                />
                <motion.button 
                  type="submit" 
                  className="btn-primary whitespace-nowrap disabled:opacity-70 py-2 sm:py-3 px-4 sm:px-5 transition-all duration-300"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? 'Sending...' : 'Get Early Access'}
                </motion.button>
              </form>
              
              <AnimatePresence mode="wait">
                {message && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`text-sm mt-2 mb-6 ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}
                  >
                    {message.text}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex justify-center space-x-4 sm:space-x-6 mt-6 sm:mt-8"
            >
              <motion.a 
                href="#" 
                className="text-white hover:text-gray-300 transition-colors" 
                aria-label="Instagram"
                whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
              >
                <FaInstagram size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-white hover:text-gray-300 transition-colors" 
                aria-label="Facebook"
                whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
              >
                <FaFacebook size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-white hover:text-gray-300 transition-colors" 
                aria-label="Twitter"
                whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
              >
                <FaTwitter size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-white hover:text-gray-300 transition-colors" 
                aria-label="LinkedIn"
                whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
              >
                <FaLinkedin size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-white hover:text-gray-300 transition-colors" 
                aria-label="Email"
                whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
              >
                <MdEmail size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
            </motion.div>
          </motion.div>
        </main>

        {/* Footer */}
        <motion.footer 
          variants={itemVariants}
          className="container mx-auto px-4 py-4 sm:py-6 text-center text-xs sm:text-sm text-white z-10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-3 md:mb-0">
              &copy; {new Date().getFullYear()} Model Management. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-3 md:gap-6 justify-center">
              <Link href="/privacy-policy" className="text-white hover:text-gray-300 transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-use" className="text-white hover:text-gray-300 transition-colors">Terms of Use</Link>
              <Link href="/contact-us" className="text-white hover:text-gray-300 transition-colors">Contact Us</Link>
            </div>
          </div>
        </motion.footer>
      </motion.div>
    </AnimatePresence>
  );
}
