import { useState, useEffect, useContext } from 'react'
import Header from '../components/Header'
import Header2 from '../components/Header2'
import Navbar from '../components/Navbar'
import HeroCarousel from '../components/Hero'
import NoticesEventsSection from '../components/NoticesEvents'
import Footer from '../components/Footer'
import DirectorMessage from '../components/Directormessage'
import StatsSection from '../components/StatsSection'
import ImageCarousel from '../components/ImageCarousel'
import ResearchCarousel from '../components/Research'
import ResearchTabs from '../components/Tabs'
import LoadingScreen from '../components/LoadingScreen'
import { UserContext } from '../App'
import EventsSection from '../components/EventsNew'
import Programs from '../components/ResearchV3'
import ResearchV3 from '../components/ResearchV3'

function Home() {
    const { isLoading, isVisible, setIsLoading, setIsVisible } = useContext(UserContext);
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
        <HeroCarousel></HeroCarousel>
        <EventsSection/>
        {/* <NoticesEventsSection></NoticesEventsSection> */}
        <DirectorMessage></DirectorMessage>
        <ResearchTabs></ResearchTabs>
        <StatsSection></StatsSection>
        <ResearchV3></ResearchV3>
        <ImageCarousel></ImageCarousel>
        <Footer></Footer>
      </div>
    </>
  )
}
export default Home
