import { Box, Typography } from '@mui/material'
import React,{useState} from 'react'
import HeadsetIcon from '@mui/icons-material/Headset';
import EmailIcon from '@mui/icons-material/Email';
import logo from "../../assets/images/gtm-1.png"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { IoMdMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import './header.css';
import ServicesMegaMenu from '../ServicesMegaMenu/ServicesMegaMenu';
import ProductMegaMenu from '../ProductMegamenu/ProductMegaMenu';
import CareerMegaMenu from '../CareerMegaMenu/CareerMegaMenu';
const Header = () => {
  const [open, setOpne] = useState(false);
  
  const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
      setMegaMenuOpen(false);
  };

  return (
    <Box>
      <div className='header'>
        <div className='typho-1' ><HeadsetIcon /><a className='headerancher' href="tel:7978332292"> +91 7978332292</a></div>
        <div className='typho-1'><EmailIcon />info@glowtechmor.com</div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <img className='logo' src={logo} alt='logo' />
        <div onClick={() => setOpne(!open)} className="hamburger">
          {open ? <IoIosClose /> : <IoMdMenu />}
        </div>
        <div className={`${open ? "navbardiv1" : "navbardiv"}`} >
          <div className='navbarul'>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active" >
            <Link to='/' className="nav-link link"> HOME</Link>
            </li>
            <li className="nav-item">
            <Link to='/about' className="nav-link link"> ABOUT US</Link>
            </li>
            <li className="nav-item servicenavitem">
              <a href='/services' className="nav-link link">SERVICES<KeyboardArrowDownIcon/></a>
              <ServicesMegaMenu/>
            </li>
            <li className="nav-item productnavitem">
              <Link to="/our-products" className="nav-link link">OUR PRODUCTS<KeyboardArrowDownIcon/></Link>
              <ProductMegaMenu/>
            </li>
            <li className="nav-item">
              <a href='/contact' className="nav-link link ">CONTACT US</a>
            </li>
            <li className="nav-item careernavitem">
              <a  href='/career' className="nav-link link">CAREER<KeyboardArrowDownIcon/></a>
              <CareerMegaMenu/>
            </li>
          </ul>
          </div>
          
          <form className="searchform form-inline my-2 my-lg-0 display-none">
            <input className="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </Box>
  )
}

export default Header
