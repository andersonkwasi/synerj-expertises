import React from 'react'
import Header from './components/Header';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Partners from './pages/partenaires';
import Contact from './pages/Contact';
import About from './pages/About';

const App: React.FC = ()=> {


  return (
    <>
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
              <Route path="/" element={ <Home /> }/>
              <Route path="/Services" element={ <Services /> }/>
              <Route path="/Partners" element={ <Partners /> }/>
              <Route path="/Contact" element={ <Contact /> }/>
              <Route path="/About" element={ <About /> }/>


          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </>
  )
}

export default App
