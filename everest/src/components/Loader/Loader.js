import React from "react";
import { motion } from "framer-motion";
import './loader.css'

// Import images

const item = {
    hidden: {
        opacity: 0,
    },

    show: {
        opacity: 1,

        transition: {
            duration: 1.6,
        }
    },

    exit: {
        opacity: 0,
    }
}

const Loader = ({ setLoading }) => {
  return (
    <motion.div className="loader">
        <motion.div
            variants={item}
            onAnimationComplete={() => setLoading(false)}
            initial="hidden"
            animate="show"
            exit="exit"
            className="loader-inner"
        >
            <h1>riddle</h1>

        </motion.div>
    </motion.div>
  );
};

export default Loader;