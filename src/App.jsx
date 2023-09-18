import { useState } from 'react'
import './App.css'
import { motion } from "framer-motion"

function App() {
  return (
    <div class="h-screen bg-gradient-to-b bg-black text-stone-300">
      <motion.h1
        className="text-3xl font-bold px-4 py-4 font-spacex"
        variants={{
          hidden : { opacity : 0 , y : 10 },
          visible : { opacity : 1 , y : 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration : 0.75 }}
      >
        SPACEX
      </motion.h1>
    </div>
  )
}

export default App
