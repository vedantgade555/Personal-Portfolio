import React from "react";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      if="experience"
      className="py20 bg-dark-200"
    >
        <div className="container">
            
        </div>
    </motion.div>
  );
};

export default Work;
