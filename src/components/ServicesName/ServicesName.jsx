import React from 'react';
import './servicesname.css';
import googleplus from '../../assets/images/googleplus.png';
import facebook from '../../assets/images/Facebook-logo-2048x1280.png';
import linkedin from '../../assets/images/linkedin.png';

const data =[
    {
        serviceimage : googleplus,
        servicename : "Google Plus"
    },
    {
        serviceimage : facebook,
        servicename : "Facebook"
    },
    {
        serviceimage : linkedin,
        servicename : "LinkedIn"
    },
    {
        serviceimage : googleplus,
        servicename : "Google Plus"
    },
    {
        serviceimage : facebook,
        servicename : "Facebook"
    },
    {
        serviceimage : linkedin,
        servicename : "LinkedIn"
    },

]

export default function ServicesName() {
  return (
    <section className='servicesnamesection'>
        <div className="servicesnamerow"> 
            {
                data.map((item,index)=>(
                    <div className="servicesnamecolumn">
                    <div className="servicesnameimgcolumn">
                        <img className='servicenameimg' src={item.serviceimage} alt="" />
                    </div>
    
                    <div className="servicesnameheadingcolumn">
                        <p className='servicenameheading'>{item.servicename}</p>
                    </div>
                </div>
                ))
            }
        </div>
    </section>
  )
}