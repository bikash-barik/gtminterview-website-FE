import React from 'react';
import './counter.css';

const data = [
    {
        countNumber : "1,790",
        countpara : "HAPPY CLIENTS"
    },
    {
        countNumber : "491",
        countpara : "FINISHED PROJECTS"
    },
    {
        countNumber : "245",
        countpara : "SKILLED EXPERTS"
    },
    {
        countNumber : "1090",
        countpara : "MEDIA POSTS"
    },

]
export default function Counter() {
  return (
    <section className='countersection'>
        <div className="counterrow">
            
            {
                data.map((item,index)=>(
                    <div key={index} className="countercolumn">
                           <h1 className='countercolumnheading'>{item.countNumber}</h1> 
                           <p className='countercolumnpara'>{item.countpara}</p>
                    </div>
                ))
            }

        </div>
    </section>
  )
}
