
import React , { useRef , useEffect } from 'react'
import { motion , useInView , useAnimationControls } from 'framer-motion'

const StaggerTemplate = () => {

  const ref = useRef(null);
  const inView = useInView(ref , { once : true });

  const controls = useAnimationControls();

  useEffect( () => {
    if(inView) {
      controls.start("show");
    }
  }, [inView]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 3,
        duration : 2,
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1 ,
      transition : {
        duration : 2,
      }
    }
  }


  return (
    <motion.div 
    ref={ref}
    variants={container}
    initial="hidden"
    animate={controls}
    className='flex space-x-4'>
      <motion.div variants={item} className='w-4 h-4 bg-slate-200'></motion.div>
      <motion.div variants={item} className='w-4 h-4 bg-slate-200'></motion.div>
    </motion.div>
  )
}

export default StaggerTemplate