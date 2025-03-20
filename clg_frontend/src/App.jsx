import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Header2 from './components/Header2'
import Navbar from './components/Navbar'
import HeroCarousel from './components/Hero'
import NoticesEventsSection from './components/NoticesEvents'
import Footer from './components/Footer'
import DirectorMessage from './components/Directormessage'
import StatsSection from './components/StatsSection'
import ImageCarousel from './components/ImageCarousel'
import ResearchCarousel from './components/Research'
import ResearchTabs from './components/Tabs'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIsLoading(false);
      }, 700);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen isVisible={isVisible} />}
      <div className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-800`}>
        <Header></Header>
        <Header2></Header2>
        <Navbar></Navbar>
        <HeroCarousel></HeroCarousel>
        <NoticesEventsSection></NoticesEventsSection>
        <DirectorMessage></DirectorMessage>
        <ResearchTabs></ResearchTabs>
        <StatsSection></StatsSection>
        <ResearchCarousel></ResearchCarousel>
        <ImageCarousel></ImageCarousel>
        <Footer></Footer>
      </div>
    </>
  )
}
export default App
