import React from 'react'
import HomeHero from '../components/HomeHero'
import Features from '../components/feature/Features'
import Faqs from '../components/Faqs/Faqs'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div className="relative">
      <HomeHero />
      <Features />
      <Faqs />
      <Footer />

    </div>
  )
}

export default Home