import React from 'react';
import {Typography } from '@mui/material'
import logo8 from '../../assets/images/gtm8.png'
import logo10 from '../../assets/images/gtm10.png';
import logo12 from '../../assets/images/gtm12.png';

import logo9 from '../../assets/images/gtm9.png'
import logo11 from '../../assets/images/gtm11.png';
import logo13 from '../../assets/images/gtm13.png';

import './corevalues.css';

const data = [
    {
        coreimage : logo8,
        coreheading : "Business Goal",
        coredescription : "Dynamic content brand voice council tweens sticky content responsive ROI."
    },
    {
        coreimage : logo10,
        coreheading : "Web Analytics",
        coredescription : "Dynamic content brand voice council tweens sticky content responsive ROI."
    },
    {
        coreimage : logo12,
        coreheading : "Integrated Marketing",
        coredescription : "Dynamic content brand voice council tweens sticky content responsive ROI."
    },
    {
        coreimage : logo9,
        coreheading : "Landing Made Easy",
        coredescription : "Dynamic content brand voice council tweens sticky content responsive ROI."
    },
    {
        coreimage : logo11,
        coreheading : "Goal Driven",
        coredescription : "Dynamic content brand voice council tweens sticky content responsive ROI."
    },
    {
        coreimage : logo13,
        coreheading : "Supply Chain Management",
        coredescription : "Dynamic content brand voice council tweens sticky content responsive ROI."
    }

]

export default function CoreValues() {
  return (
    <div className='container-4'>
    <div className='c-top' data-aos="zoom-in">
        <h6>DATA DRIVEN</h6>
        <h2 style={{ fontWeight: "600" }}>OUR CORE VALUES</h2>
    </div>
    
    <div className='card-container'>

        <div className='leftcardcontainer'>
        {
            data.slice(0,data.length/2).map((item,index)=>(
                <div className='left-card' >
                   <div className='left-card-1'>
                      <img style={{ width: "100px" }} src={item.coreimage} alt='logo7' />
                   </div>
                   <div className='left-card-2'>
                      <h5 style={{ marginTop: "8px" }}>{item.coreheading}</h5>
                      <Typography>{item.coredescription}</Typography>
                   </div>
                </div> 
            ))
        }
        
        </div>

       <div className='leftcardcontainer'>
       {
            data.slice(data.length/2,data.length).map((item,index)=>(
                <div className='left-card' >
                   <div className='left-card-1'>
                      <img style={{ width: "100px" }} src={item.coreimage} alt='logo7' />
                   </div>
                   <div className='left-card-2'>
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


