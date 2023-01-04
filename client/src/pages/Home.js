import React from 'react'
import Banner from '../components/Banner'
import Catagories from '../components/Catagories'
import Community from '../components/Community'
import Favourite from '../components/Favourite'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Catagories/>
    <Banner/>
    <Favourite/>
    <Community/>
    <Footer/>
    </>
  )
}

export default Home 