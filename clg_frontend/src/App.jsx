import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Header2 from './components/Header2'
import Navbar from './components/Navbar'
import HeroCarousel from './components/Hero'
import NoticesVerticalCarousel from './components/Notice'
import EventsCarousel from './components/Event'
import NoticesEventsSection from './components/NoticesEvents'
import Footer from './components/Footer'
import DirectorMessage from './components/Directormessage'
import StatsSection from './components/StatsSection'
import ImageCarousel from './components/ImageCarousel'

function App() {
  

  return (
    <>
      <Header></Header>
      <Header2></Header2>
      <Navbar></Navbar>
      <HeroCarousel></HeroCarousel>
      {/* <div className='flex '>
      <NoticesVerticalCarousel></NoticesVerticalCarousel>
      <EventsCarousel></EventsCarousel>
      </div> */}
      <NoticesEventsSection></NoticesEventsSection>
      <DirectorMessage></DirectorMessage>
      <StatsSection></StatsSection>
      <ImageCarousel></ImageCarousel>
      <Footer></Footer>
      
    </>
  )
}

export default App
