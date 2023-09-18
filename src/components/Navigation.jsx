import React from 'react'
import { motion } from "framer-motion";

const navLinks = ["HOME", "GALLERIES", "HISTORY", "STARSHIP", "MISSION", "ABOUT"];

const Navigation = () => {
  return (
    <nav class="pt-1">
      <ul class="flex justify-center space-x-6">
        <li>
          <a
            href="#"
            class="text-white hover:text-gray-400 transition duration-300 ease-in-out"
          >
            HOME
          </a>
        </li>
        <li>
          <a
            href="#"
            class="text-white hover:text-gray-400 transition duration-300 ease-in-out"
          >
            GALLERIES
          </a>
        </li>
        <li>
          <a
            href="#"
            class="text-white hover:text-gray-400 transition duration-300 ease-in-out"
          >
            HISTORY
          </a>
        </li>
        <li>
          <a
            href="#"
            class="text-white hover:text-gray-400 transition duration-300 ease-in-out"
          >
            STARSHIP
          </a>
        </li>
        <li>
          <a
            href="#"
            class="text-white hover:text-gray-400 transition duration-300 ease-in-out"
          >
            MISSION
          </a>
        </li>
        <li>
          <a
            href="#"
            class="text-white hover:text-gray-400 transition duration-300 ease-in-out"
          >
            ABOUT
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation