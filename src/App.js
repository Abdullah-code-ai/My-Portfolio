import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Portfolio from './Pages/Portfolio/Portfolio';
// import About from './Pages/About/About';
// import Hero from './Components/Hero/Hero';

function App() {
  return (
    <>
    
    <Navbar />
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Portfolio" element={<Portfolio />} />
    </Routes>
 {/* <Hero /> */}
 <Footer />
 {/* <About /> */}
    
    </>
  );
}

export default App;
