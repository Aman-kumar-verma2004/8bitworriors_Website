import React from "react"
import { motion } from "framer-motion"

const AboutSection = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Abstract tech pattern background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-green-500"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: "1px",
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold mb-4 text-center text-green-500"
        >
          Innovate, Build, and Disrupt
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-3xl mb-8 text-center"
        >
          A community of tech enthusiasts pushing the boundaries of innovation
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/2"
          >
            <p className="text-lg mb-4">
              Welcome to our tech club, where passion meets innovation. We are a diverse group of students united by our
              love for technology and our drive to make a difference in the digital world.
            </p>
            <p className="text-lg mb-4">Our club is a hub for:</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Exciting hackathons that challenge your problem-solving skills</li>
              <li>Coding competitions to sharpen your programming prowess</li>
              <li>Insightful tech talks from industry leaders</li>
              <li>Collaborative open-source projects that make a real impact</li>
            </ul>
            <p className="text-lg">
              Join us to grow your skills, collaborate with like-minded individuals, and explore cutting-edge
              technologies that are shaping our future.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="md:w-1/2"
          >
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Tech collaboration"
              className="rounded-lg shadow-lg hover:shadow-green-500/50 transition-shadow duration-300"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="#join-us"
            className="inline-block bg-green-500 text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-green-400 transition-colors duration-300 hover:shadow-lg hover:shadow-green-500/50"
          >
            Join Our Tech Revolution
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutSection

