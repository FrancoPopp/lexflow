"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="cursor-pointer">
              <Image
                src="/logo.png"
                alt="Lexflow Logo"
                width={150}
                height={150}
                className="inline-block mr-2"
              />
            </div>
          </motion.div>
          <div className="hidden md:flex items-center space-x-8">
            <motion.a
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 cursor-pointer"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              onClick={() => scrollToSection("features")}
            >
              Features
            </motion.a>
            <motion.a
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 cursor-pointer"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              onClick={() => scrollToSection("how-it-works")}
            >
              How it works
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
        >
          Read Your Way to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Fluency
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Learn a new language by reading your favorite books. Upload your own
          or explore our library. Get instant translations, save vocabulary, and
          let AI help you understand what you&apos;re reading.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("cta-section")}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
        >
          Join the waitlist
        </motion.button>
      </div>
    </section>
  );
}

const features = [
  {
    icon: "📚",
    title: "Read any book",
    description: "Upload your own or pick from our public domain library",
  },
  {
    icon: "🔍",
    title: "Instant translation",
    description: "Tap a word or sentence to translate instantly",
  },
  {
    icon: "💾",
    title: "Save vocabulary",
    description: "Build flashcards from words you discover while reading",
  },
  {
    icon: "🤖",
    title: "Ask AI anything",
    description: "Get grammar tips, paragraph summaries, or translations",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
  },
  hover: {
    y: -8,
  },
};

export function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything you need to learn
          </h2>
          <p className="text-xl text-gray-600">
            Powerful features designed to make language learning effortless
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover="hover"
              className="group p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300"
            >
              <motion.div
                className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const steps = [
  "Upload or choose a book",
  "Read and tap to translate",
  "Review flashcards to reinforce learning",
];

const stepVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
  },
  hover: {
    x: 8,
  },
};

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Get started in just three simple steps
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step}
              variants={stepVariants}
              whileHover="hover"
              className="flex items-center space-x-6"
            >
              <motion.div
                className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {index + 1}
              </motion.div>
              <div className="flex-1">
                <p className="text-xl text-gray-900 font-medium">{step}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function CTA() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      console.log("Email submitted:", email);
    }
  };

  return (
    <section id="cta-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Be the first to try it out
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of language learners who are already on the waitlist
          </p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <motion.input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-300"
              required
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitted}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitted ? "Thank you!" : "Join Now"}
            </motion.button>
          </motion.form>

          {isSubmitted && (
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-green-600 mt-4"
            >
              Thanks for joining! We&apos;ll notify you when we launch.
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export function Survey() {
  return (
    <section className="relative py-16 px-4 sm:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Help Shape This App
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-8">
          We’re building a tool for language lovers. Take 30 seconds to tell us
          what you&apos;d love to see!
        </p>
        <motion.a
          href="https://tally.so/r/wMpp2M"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          Take the Survey
        </motion.a>
      </motion.div>
    </section>
  );
}

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="text-2xl font-bold text-white mb-4 md:mb-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            LangReader
          </motion.div>
          <div className="flex space-x-6">
            <motion.a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Privacy
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Terms
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Contact
            </motion.a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 LangReader. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
}
