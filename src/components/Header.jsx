import React from 'react'
import { motion } from "framer-motion"
import { useState } from 'react'
import Navigation from './Navigation';

const spacexCharacters = ["S", "P", "A", "C", "E", "X"];

const Header = () => {

  const [charactersAnimation, setCharactersAnimation] = useState(
    spacexCharacters.map(() => ({
      opacity: 1,
      y: Math.random() * 10 - 5,
    }))
  );

  return (
    <div class="flex justify-between px-10">
      <div>
        {spacexCharacters.map((char, index) => (
          <motion.span
            key={index}
            className="text-3xl font-bold font-spacex"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={charactersAnimation[index]}
            transition={{ duration: 0.75, delay: Math.random() * 0.5 , once : true  }}
          >
            {char}
          </motion.span>
        ))}
      </div>

      <Navigation />

    </div>
  )
}

export default Header