import React from 'react'
import Carousel from './Carousel'
import About from './AboutUs'
import Services from './Services'
import Testimonials from './Testimonials'
import Video from './Video'
import Member from './Member'
import DownloadApp from './DownloadApp'
// import MiniNav from '../components/MiniNav'

const Home = () => {
  return (
    <>
    
      <Carousel />
      <About />
      <Services />
      <Video />
      <Testimonials />
      <Member/>
      <DownloadApp/>
    </>

  )
}

export default Home