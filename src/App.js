import React,{useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useNavigate } from 'react-router-dom';

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
import Login from './pages/Login/Login.jsx';
import SignUp from './pages/Signup/Signup.jsx';
import UploadData from './pages/UploadData/UploadData.jsx';
// import ParticleComponent from './components/ParticleComponent/ParticleComponent';

const isAuthenticated = () => {
  const currentUser = firebase.auth().currentUser;
  return currentUser !== null;
};

const ProtectedRoute = ({ path, element }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login");
    }
  }, [navigate]);

  return isAuthenticated() ? element : null;
};

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
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/upload' element={<ProtectedRoute element={<UploadData/>} />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
