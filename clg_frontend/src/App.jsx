import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Faculty from "./Pages/Faculty";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import { createContext, useState } from "react";
import Footer from "./components/Footer";
import SocialSidebar from "./components/ScoialSidebar";
import MessageIcon from "./components/MessageIcon";

export const UserContext = createContext(null);
function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [isVisible, setIsVisible] = useState(true);
  return (
    <UserContext.Provider value={{ isLoading, isVisible, setIsLoading, setIsVisible }}>
    <Router>
      <SocialSidebar />
      <MessageIcon />
        <Routes>
          
          <Route
            path="/"
            element={
              <>
                <Header />
                <Header2 />
                <Navbar />
                <Home />
                
              </>
            }
          />

          <Route path="/faculty" element={
            <>
            <Header2 />
            <Navbar />
            <Faculty />
            <Footer />

          </>} />
        </Routes>
      </Router>
  </UserContext.Provider>
  );
}
export default App;
