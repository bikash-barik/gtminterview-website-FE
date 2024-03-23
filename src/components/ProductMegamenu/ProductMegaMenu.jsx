import React from 'react';
import './productmegamenu.css';
import apnaapp from '../../assets/images/aa-1536x729.png';
import techmor3d from '../../assets/images/3dtechmor.png';
import aiwriter from '../../assets/images/ai-writing-generator.jpg';
import dwell from '../../assets/images/nfts-development-1.jpg';
import silentlearn from '../../assets/images/silentlearn.png';
import emailhub from '../../assets/images/Email-1536x1024.jpg';
import gippyservice from '../../assets/images/gippyservice.png';
import gmtimg from '../../assets/images/gtm-1536x692.png';
import { Link } from 'react-router-dom';

const data1 = [
    {
      productimage : apnaapp,
      productname : "AppnaApp",
      productid:"appnaapp"
    },
    {
      productimage : silentlearn,
      productname : "SilentLearn",
      productid:"silentlearn"
    },
    {
      productimage : techmor3d,
      productname : "3DTechMor",
      productid : "techmor3d"
    },
    {
      productimage : gmtimg,
      productname : "GMT",
      productid : "gmt"
    },
    {
      productimage : aiwriter,
      productname : "AiWritor",
      productid : "aiwriter"
    },
    {
      productimage : dwell,
      productname : "DWELL",
      productid : "dwell"
    },
    {
      productimage : emailhub,
      productname : "EMAIL-HUB",
      productid : "email-hub"
    },
    {
      productimage : gippyservice,
      productname : "GIPPY SERVICE",
      productid : "gippy-service"
    },
  
  ]

export default function ProductMegaMenu({isOpen}) {
  return (
    <div className={`productmegamenu ${isOpen ? 'open' : ''}`}>
        {
                data1.map((item,index)=>(
                  <Link key={index} to={`/our-products/${item.productid}`} className="serviceinnercolumninner" >
                        <div className="serviceimagecolumn">
                           <img className="servicecolumnimage" src={item.productimage} alt={item.productimage} />
                        </div>
                        <div className="serviceparacolumn">
                            <p style={{marginBottom:"0"}}>{item.productname}</p>
                        </div>
                  </Link>
                ))
        }
    </div>
  )
}
