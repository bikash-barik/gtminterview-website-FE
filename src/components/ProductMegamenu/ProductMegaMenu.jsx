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
      productname : "AppnaApp"
    },
    {
      productimage : silentlearn,
      productname : "SilentLearn"
    },
    {
      productimage : techmor3d,
      productname : "3DTechMor"
    },
    {
      productimage : gmtimg,
      productname : "GMT"
    },
    {
      productimage : aiwriter,
      productname : "AiWritor"
    },
    {
      productimage : dwell,
      productname : "DWELL"
    },
    {
      productimage : emailhub,
      productname : "EMAIL-HUB"
    },
    {
      productimage : gippyservice,
      productname : "GIPPY SERVICE"
    },
  
  ]

export default function ProductMegaMenu({isOpen}) {
  return (
    <div className={`productmegamenu ${isOpen ? 'open' : ''}`}>
        {
                data1.map((item,index)=>(
                  <Link key={index} to="/our-products" className="serviceinnercolumninner" >
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
