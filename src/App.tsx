import React from 'react'
import Header from './components/Header';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import Consulting from "./pages/ConsultingPage"
import Assistance from "./pages/Assistance"
import Engineering from "./pages/EngineeringPage"
import Conceptions from "./pages/Conceptions"
import ServicesXaas from "./pages/ServicesXaas"
import CertificationFormation from "./pages/CertificationFormation"



const App: React.FC = ()=> {
  return (
    <>
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
              <Route path="/" element={ <Home /> }/>
              <Route path="/services" element={ <Services /> }/>
              <Route path="/contact" element={ <Contact /> }/>
              <Route path="/about" element={ <About /> }/>
              <Route path="/consulting" element={ <Consulting /> }/>
              <Route path="/assistance" element={ <Assistance /> }/>
              <Route path="/engineering" element={ <Engineering /> }/>
              <Route path="/conceptions" element={ <Conceptions /> }/>
              <Route path="/servicesXaas" element={ <ServicesXaas /> }/>
              <Route path="/certificationFormation" element={ <CertificationFormation /> }/>              
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </>
  )
}

export default App
