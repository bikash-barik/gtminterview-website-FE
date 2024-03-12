import React from 'react'
import {Typography } from '@mui/material'
import ecommerce from '../../assets/images/ecommerce.png'
import hotelfood from '../../assets/images/hotelfood.png';
import transport from '../../assets/images/transport.png';
import retail from '../../assets/images/retail.png'

import health from '../../assets/images/health.png';
import travel from '../../assets/images/travel.png';
import energy from '../../assets/images/energy.png';
import agri from '../../assets/images/agri.png';



import education from '../../assets/images/education.png';
import design from '../../assets/images/design.png';
import oil from '../../assets/images/oil.png';
import finance from '../../assets/images/finance.png';

import './serve.css';

const data = [
    {
        coreimage : ecommerce,
        coreheading : "E-commerce",
    },
    {
        coreimage : hotelfood,
        coreheading : "Hotel and Food",
    },
    {
        coreimage : transport,
        coreheading : "Transport & Logistics",
    },
    {
        coreimage : retail,
        coreheading : "Retail",
    },
    {
        coreimage : health,
        coreheading : "Health",
    },
    {
        coreimage : travel,
        coreheading : "Travel & Tourism"
    },
    {
        coreimage : energy,
        coreheading : "Energy & Utilities"
    },
    {
        coreimage : agri,
        coreheading : "Agriculture"
    },
    {
        coreimage : education,
        coreheading : "Education",
    },
    {
        coreimage : design,
        coreheading : "Design & Construction"
    },
    {
        coreimage : oil,
        coreheading : "Oil & Gas"
    },
    {
        coreimage : finance,
        coreheading : "Finance & Banking"
    },

]
export default function Serve() {
  return (
    <div className='servediv'>
    <div className='serve-top' data-aos="zoom-in">
        <h6>WHY CHOOSE US?</h6>
        <h2 style={{ fontWeight: "600" }}>Industries We Serve</h2>
    </div>
    
    <div className='servecard-container'>

        <div className='serveleftcardcontainer'>
        {
            data.slice(0,data.length/3).map((item,index)=>(
                <div className='serveleft-card' data-aos="fade-up">
                   <div className='serveleft-card-1'>
                      <img className='serveimage' src={item.coreimage} alt='logo7' />
                   </div>

                   <div className="serveleft-card-2">
                     <h5 style={{ marginTop: "8px" }}>{item.coreheading}</h5>
                      <Typography>{item.coredescription}</Typography>
                   </div>
                </div> 
            ))
        }
        
        </div>

       <div className='serveleftcardcontainer'>
       {
            data.slice(data.length/3,((data.length)*2)/3).map((item,index)=>(
                <div className='serveleft-card' data-aos="fade-up">
                   <div className='serveleft-card-1'>
                      <img className='serveimage'  src={item.coreimage} alt='logo7' />
                   </div>

                   <div className="serveleft-card-2">
                     <h5 style={{ marginTop: "8px" }}>{item.coreheading}</h5>
                      <Typography>{item.coredescription}</Typography>
                   </div>
                </div> 
            ))
        }
       </div>

       <div className='serveleftcardcontainer'>
       {
            data.slice(((data.length)*2)/3,data.length).map((item,index)=>(
                <div className='serveleft-card' data-aos="fade-up">
                <div className='serveleft-card-1'>
                   <img className='serveimage'  src={item.coreimage} alt='logo7' />
                </div>

                <div className="serveleft-card-2">
                  <h5 style={{ marginTop: "8px" }}>{item.coreheading}</h5>
                   <Typography>{item.coredescription}</Typography>
                </div>
             </div> 
            ))
        }
       </div>


       
    </div>
</div>
  )
}
