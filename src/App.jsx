import React, { useState, useEffect, useRef } from 'react';
import './App.css'
import PageOne from './components/Page1/PageOne';
import PageTwo from './components/Page2/PageTwo';

//import locomotiveScroll from 'locomotive-scroll';

import { motion } from 'framer-motion';


function App() {


  const scrollContainerRef = useRef(null);
  const pagetwo = useRef(null);
  

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    let currentSectionIndex = 0;

    const handleScroll = (event) => {
      const direction = event.deltaY > 0 ? 1 : -1;

      if (direction === 1 && currentSectionIndex < sections.length - 1) {
        currentSectionIndex++;
      } else if (direction === -1 && currentSectionIndex > 0) {
        currentSectionIndex--;
      }

      sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);


  useEffect(() => {
    // const scroll = new locomotiveScroll({
    //   el: scrollContainerRef.current,
    //   smooth: true, 
    // });

    // return () => {
    //   scroll.destroy();
    // };
  }, []);


  
  return (
    <div 
    ref={scrollContainerRef} 
    data-scroll-container
    className='box-border overflow-hidden'>
      <div 
      data-scroll-section
      className="section w-screen h-screen px-4 py-4 bg-gradient-to-b bg-black text-stone-300">
        <div 
        data-scroll data-scroll-speed="1">
          <PageOne id="pageone" />
        </div>
      </div>
      <div 
      ref={pagetwo}
      data-scroll-section
      className="section w-screen h-screen px-4 py-4 bg-gradient-to-b bg-black text-stone-300">
        <div 
        data-scroll data-scroll-speed="2">
          <PageTwo id="pagetwo" />
        </div>
      </div>
    </div>
  )
}

export default App
