import { useRef , useEffect } from 'react'
import { motion , useInView , useAnimationControls } from "framer-motion";

import {
  Link,
} from "react-router-dom";

const navLinks = [ 
  { title : "HOME", path : "/"} , 
  { title : "GALLERIES", path : "galleries"} , 
  { title : "HISTORY", path : "history"} , 
  { title : "STARSHIP", path : "starship"} , 
  { title : "MISSION", path : "mission"} , 
  { title : "ABOUT", path : "about"} , 
];



const Navigation = () => {

  const ref = useRef(null);
  const inView = useInView(ref , { once : true });

  const controls = useAnimationControls();


  useEffect( () => {
    if(inView) {
      controls.start("visible");
    }
  }, [inView]);



  return (
    <nav className="pt-1">
      <ul className="flex justify-center space-x-6">
        {navLinks.map((link, index) => (
          <motion.li
            ref={ref}
            key={index}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: [0, 1, 0 , 1 , 0 , 1 ], 
                y: 0, 
              },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 1 + index * 0.4 }}
            
          >
            <Link 
              to={link.path}
              className="text-white hover:text-gray-400 transition duration-300 ease-in-out"
            >
              {link.title}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation