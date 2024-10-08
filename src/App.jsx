import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import Features from './components/Features'
 
  import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'

const App = () => {
  return (
  <>
   <Navbar/>
  <div  className='mx-auto max-w-7xl pt-20 px-6'>
  <Hero/>
  <Features/>
  <Workflow/>
  <Pricing/>
  <Testimonial/>
  <Footer/>
  </div>
   </>
  )
}

export default App