import React from 'react'
import './careermegamenu.css';
import job from '../../assets/images/job-search.svg';
import intern from '../../assets/images/intern.png';
import verify from '../../assets/images/verify.svg';
import hiring from '../../assets/images/hiring.png';

const data1 = [
    {
      careerimage : job,
      careername : "Jobs"
    },
    {
      careerimage:intern,
      careername : "Internship"
    },
    {
      careerimage : verify,
      careername : "Verify Your Certificate"
    },
    {
      careerimage:hiring,
      careername : "Our Hiring Process"
    }
  
  ]

export default function CareerMegaMenu() {
  return (
    <div className='careermegamenu'>
    {
            data1.map((item,index)=>(
              <div key={index} className="serviceinnercolumninner">
                   <div className="serviceimagecolumn">
                           <img className="servicecolumnimage" src={item.careerimage} alt={item.careerimage} />
                        </div>
                    <div className="serviceparacolumn">
                        <p style={{marginBottom:"0"}}>{item.careername}</p>
                    </div>
              </div>
            ))
          }
</div>
  )
}
