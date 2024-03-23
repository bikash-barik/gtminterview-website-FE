import { Box} from '@mui/material'
import React,{useState} from 'react'
import HeadsetIcon from '@mui/icons-material/Headset';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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

  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [isCareerMenuOpen, setIsCareerMenuOpen] = useState(false);

  const toggleServiceMenu = () => {
      setIsServiceMenuOpen(!isServiceMenuOpen);
  }

  const toggleProductMenu = ()=>{
    setIsProductMenuOpen(!isProductMenuOpen);
  }

  const toggleCareerMenu = ()=>{
    setIsCareerMenuOpen(!isCareerMenuOpen);
  }


  return (
    <Box>
      <div className='header'>
        <div className="marquee-container">
              <h5 className="newheaderheading marquee-content">Bring both tangible and Intangible business metrics to the table to beat the odds.</h5>
        </div>
        <div className="headersecond">
        <div className='typho-1' ><HeadsetIcon /><a className='headerancher' href="tel:7978332292"> +91 7978332292</a></div>
        <div className='typho-1'><EmailIcon />info@glowtechmor.com</div>
        <div className='typho-1'><Link to="https://crm.glowtechmor.com/"><AccountCircleIcon /></Link></div>
        </div>
       
      </div>

      <nav className="navbar navbar-expand-lg navbar-light ">
        <img className='logo' src={logo} alt='logo' />
        <div onClick={() => setOpne(!open)} className="hamburger">
          {open ? <IoIosClose /> : <IoMdMenu />}
        </div>
        <div className={`${open ? "navbardiv1" : "navbardiv"}`} >
          {/* <div className='navbarul'> */}
          <ul className="navbar-nav">
            <li className="nav-item active" >
            <Link to='/' className="nav-link link" onClick={() => setOpne(false)} > HOME</Link>
            </li>
            <li className="nav-item">
            <Link to='/about' className="nav-link link" onClick={() => setOpne(false)} > ABOUT US</Link>
            </li>
            <li className="nav-item servicenavitem" onClick={toggleServiceMenu}>
              <Link className="nav-link link">SERVICES<KeyboardArrowDownIcon/></Link>
              <ServicesMegaMenu isOpen={isServiceMenuOpen}/>
            </li>
            <li className="nav-item productnavitem"  onClick={toggleProductMenu}>
              <Link to="/our-products/products" className="nav-link link">OUR PRODUCTS<KeyboardArrowDownIcon/></Link>
              <ProductMegaMenu  isOpen={isProductMenuOpen}/>
            </li>
            <li className="nav-item">
              <Link to='/contact' className="nav-link link " onClick={() => setOpne(false)} >CONTACT US</Link>
            </li>
            <li className="nav-item careernavitem"  onClick={toggleCareerMenu}>
              <Link  to='/career/jobs' className="nav-link link">CAREER<KeyboardArrowDownIcon/></Link>
              <CareerMegaMenu  isOpen={isCareerMenuOpen}/>
            </li>
          </ul>
          {/* </div> */}
          
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
