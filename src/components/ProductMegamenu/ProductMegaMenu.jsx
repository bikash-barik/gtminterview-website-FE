import React from 'react';
import './productmegamenu.css';

const data1 = [
    {
      productname : "AppnaApp"
    },
    {
      productname : "SilentLearn"
    },
    {
      productname : "3DTechMor"
    },
    {
      productname : "GMT"
    },
    {
      productname : "AiWritor"
    },
    {
      productname : "DWELL"
    },
  
  ]

export default function ProductMegaMenu() {
  return (
    <div className='productmegamenu'>
        {
                data1.map((item,index)=>(
                  <div key={index} className="serviceinnercolumninner">
                        <div className="serviceparacolumn">
                            <p style={{marginBottom:"0"}}>{item.productname}</p>
                        </div>
                  </div>
                ))
              }
    </div>
  )
}
