import React from 'react'
import { RiAdminFill } from "react-icons/ri";
import { GrUserWorker } from "react-icons/gr";
import './loginpopup.css';
import { Link } from 'react-router-dom';

export default function LoginPopup({handleClose}) {
   
  return (
        <div className='popupdiv'>
          {/* <button className='closeButton' onClick={()=>{handleClose()}}>
            &times;
          </button> */}
        <div className="loginpopupdiv">
            <Link to="/login" onClick={()=>{handleClose()}}><p><RiAdminFill/> Admin Login </p></Link>
            <Link to="https://crm.glowtechmor.com/login" onClick={()=>{handleClose()}}><p><GrUserWorker/> Employee Login</p></Link>
            
        </div>
         
        </div>
  )
}
