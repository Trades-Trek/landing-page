import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Homepage from "../pages/Homepage"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Faq from "../pages/FAQ"
import TermsConditions from "../pages/Terms"
import PrivacyPolicy from "../pages/Privacy"
import { useEffect, useLayoutEffect } from "react"
import JoinWaitList from "../pages/JoinWaitList/JoinWaitList"

const PageRoutes = () => {
  const pathname = useLocation().pathname;

  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname])
  return (
    <div>
      <div className="w-full" >
        <Navbar />
      </div>
      <div className="min-h-screen "  >
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/join-community" element={<JoinWaitList />} />
          <Route path="/terms" element={<Dummy />} />
          
        </Routes>
      </div>
      <div className="w-full" >
        <Footer />
      </div>
    </div>
  )
}

export default PageRoutes

const Dummy =()=>{
  const navigate = useNavigate()

  useLayoutEffect(()=>{
    navigate('/terms-conditions')
  },[])

  return(
   <TermsConditions />
  )
}