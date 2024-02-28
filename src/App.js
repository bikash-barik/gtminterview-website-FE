import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './component/pages/home';
import Aboutus from './component/pages/aboutus';
import OurProducts from './component/pages/ourproduct';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<Aboutus/>} />
          <Route path='/our-products' element={<OurProducts/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
