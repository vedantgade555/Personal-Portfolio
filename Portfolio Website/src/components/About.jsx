import React from "react";
import { motion } from "framer-motion";
import { assets, aboutInfo } from "../assets/assets";

const About = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        id="about"
        className="py-20 bg-dark-200"
      >
        <div className="container mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-center mb-4">
            About
            <span className="text-purple">Me</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Get to know more about my background and passion
          </p>

          {/* Img+ my journey */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image */}
            <div className="md:w-1/2 rounded-2xl overflow-hidden">
              <motion.img
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="w-full h-full object-cover"
                src={assets.profileImg}
                alt="Profile Img"
              />
            </div>
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <div className="rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
                <p className="text-gray-300 mb-6">
                  I'm a passionate Java Developer with a strong interest in building efficient, scalable, and reliable software applications. My journey started with learning programming fundamentals and has grown into developing backend solutions using Java, Spring Boot, SQL, and object-oriented programming principles. I enjoy solving complex problems, designing clean code, and creating applications that deliver real value to users.
                </p>
                <p className="text-gray-300 mb-12">
                  When I'm not coding, I spend my time exploring new technologies, improving my data structures and algorithms skills, and working on personal projects to strengthen my development expertise. I believe in continuous learning and staying updated with industry trends to become a better developer and contribute to innovative software solutions.
                </p>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {aboutInfo.map((data, index) => (
                    <div
                      key={index}
                      className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                    >
                      <div className="text-purple text-4xl mb-4">
                        <data.icon />
                      </div>
                      <h3 className="text-xl font-semibold">{data.title}</h3>
                      <p className="text-gray-400">{data.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;