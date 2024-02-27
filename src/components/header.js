import { Box, Typography } from '@mui/material'
import React from 'react'
import HeadsetIcon from '@mui/icons-material/Headset';
import EmailIcon from '@mui/icons-material/Email';
import logo from "../assets/images/gtm-1.png"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  return (
    <Box>
      <div className='header'>
        <Typography className='typho-1'><HeadsetIcon />+91 7978332292</Typography>
        <Typography className='typho-1'><EmailIcon />info@glowtechmor.com</Typography>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light  " style={{padding:"0 8vw"}}>
        <img className='logo' src={logo} alt='logo' />
        <div className="navbardiv" >
          <div className='navbarul'>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <Link to='/' className="nav-link link"> HOME</Link>
            </li>
            <li className="nav-item">
            <Link to='/about' className="nav-link link"> ABOUT US</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link link">SERVICES<KeyboardArrowDownIcon/></a>
            </li>
            <li className="nav-item">
              <a className="nav-link link">OUR PRODUCTS<KeyboardArrowDownIcon/></a>
            </li>
            <li className="nav-item">
              <a className="nav-link link ">CONTACT US</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link">CAREER<KeyboardArrowDownIcon/></a>
            </li>
          </ul>
          </div>
          
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </Box>
  )
}

export default Header
