
import { useState } from 'react';
import './App.css'

import { motion, AnimatePresence } from 'framer-motion';

import PageOne from './components/Page1/PageOne';
import PageTwo from './components/Page2/PageTwo';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <PageOne />,
  },
  {
    path: "galleries",
    element: <PageTwo />,
  },
]);




function App() {


  return (
    
      
    <div className='box-border overflow-hidden'>
      <div className="w-screen h-screen px-4 py-4 bg-gradient-to-b bg-black text-stone-300">
        
          <RouterProvider router={router} />

      </div>
    </div>


  )
}

export default App
