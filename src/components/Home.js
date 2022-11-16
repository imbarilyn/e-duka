import React from 'react'
import Slide from './Slide'
import Announcement from './Announcement'
import Navbar from './Navbar'


const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slide />
    </div>
  )
}

export default Home