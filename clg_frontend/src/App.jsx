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
  
  // Common layout elements that appear on all pages
  const Layout = ({ children }) => (
    <>
      <Header2 />
      <Navbar />
      {children}
      <Footer />
    </>
  );

  return (
    <UserContext.Provider value={{ isLoading, isVisible, setIsLoading, setIsVisible }}>
      <Router>
        <SocialSidebar />
        <MessageIcon />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Layout>
                  <Home />
                </Layout>
              </>
            }
          />

          {/* Academics Section */}
          <Route path="/academics">
            <Route path="faculty" element={<Layout><Faculty /></Layout>}/>
            {/* <Route path="departments" element={<Layout><Departments /></Layout>}/>
            <Route path="programs" element={<Layout><Programs /></Layout>} />  */}
          </Route>

          {/* Add more main sections as needed */}
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
