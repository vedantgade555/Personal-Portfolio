import React from "react";
import { motion } from "framer-motion";
import { FaDribbble, FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In <span className="text-purple">Touch</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Let's talk!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div>
            <form action="" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea className="w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none" />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer"
              >
                Sent
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div>
                <FaMapMarkerAlt className="text-purple"></FaMapMarkerAlt>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-400">PCMC Pune</p>
              </div>
            </div>

            <div className="flex items-start">
              <div>
                <FaEnvelope className="text-purple" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-400">vedantgade5555@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div>
                <FaPhone className="text-purple" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-400">+91 9028345904</p>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/vedantgade555" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300">
                  <FaGithub />
                </a>
                 <a href="https://www.linkedin.com/in/vedant-gade-a95037353?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition duration-300">
                  <FaLinkedin />
                </a>
                 <a href="#" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition duration-300">
                  <FaTwitter />
                </a>
                 <a href="#" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink hover:bg-pink hover:text-white transition duration-300">
                  <FaDribbble />
                </a>
                <a href="https://www.instagram.com/vedant.gade_5500?utm_source=qr&igsh=MXQ4dm0zOW1wYm5xbw%3D%3D" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink hover:bg-pink hover:text-white transition duration-300">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
