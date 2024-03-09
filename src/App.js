import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import OurProducts from './pages/Product/OurProducts.jsx'
import AboutUs from './pages/About/AboutUs.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Service from './pages/Service/Service.jsx';
import Career from './pages/Career/Career.jsx';
import HiringProcess from './pages/HiringProcess/HiringProcess.jsx';
import VerifyCertificate from './pages/VerifyCertificate/VerifyCertificate.jsx';

function App() {
  return (
    <div>
      <BrowserRouter >
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<AboutUs/>} />
          <Route path='/services' element={<Service/>}/>
          <Route path='/our-products' element={<OurProducts/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/career' element={<Career/>}/>
          <Route path='/hiring-process' element={<HiringProcess/>}/>
          <Route path='/verify-certificate' element={<VerifyCertificate/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
