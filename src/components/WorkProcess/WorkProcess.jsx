import React from 'react';
import logo6 from '../../assets/images/gtm7.png';
import './workprocess.css';

export default function WorkProcess() {
  return (
    <>
    <div className='container-3'>
        <h5>HOW WE WORK!</h5>
        <h2>OUR WORKING PROCESS</h2>
    </div>
    <div className='img-section'>
        <img className='workprocessimg' src={logo6} alt='logo6'  data-aos="flip-left"/>
    </div>
    </>
  
  )
}
