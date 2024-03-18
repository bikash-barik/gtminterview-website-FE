import React from 'react'
import './careermegamenu.css';
import job from '../../assets/images/job-search.svg';
import intern from '../../assets/images/intern.png';
import verify from '../../assets/images/verify.svg';
import hiring from '../../assets/images/hiring.png';

const data1 = [
    {
      careerimage : job,
      careername : "Jobs",
      careerpage :"/career"
    },
    {
      careerimage:intern,
      careername : "Internship",
      careerpage : "/career"
    },
    {
      careerimage : verify,
      careername : "Verify Your Certificate",
      careerpage : "/verify-certificate"
    },
    {
      careerimage:hiring,
      careername : "Our Hiring Process",
      careerpage : "/hiring-process"
    }
  
  ]

export default function CareerMegaMenu({isOpen}) {
  return (
    <div className={`careermegamenu ${isOpen ? 'open' : ''}`}>
    {
            data1.map((item,index)=>(
              <div key={index} className="serviceinnercolumninner">
                   <div className="serviceimagecolumn">
                           <img className="servicecolumnimage" src={item.careerimage} alt={item.careerimage} />
                        </div>
                    <div className="serviceparacolumn">
                        <a href={item.careerpage} style={{color:"black",textDecoration:"none"}}><p style={{marginBottom:"0"}}>{item.careername}</p></a>
                    </div>
              </div>
            ))
          }
</div>
  )
}
