import './App.css';
import React, { useEffect, useState, useRef } from 'react';
import {AnimatePresence, motion, AnimateSharedLayout} from 'framer-motion';

import Loader from './components/Loader/Loader';
import Start from './Start';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <AnimateSharedLayout type='crossfade'>
      <AnimatePresence exitBeforeEnter>
      
        {loading ? (
          <motion.div key='loader'>
            <Loader setLoading={setLoading}/>
          </motion.div>
        ):(
          <motion.div 
          onAnimationComplete={{opacity: 1}}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          >
            <Start/>
          </motion.div>
        )}
        
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default App;
