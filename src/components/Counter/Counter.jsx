import React,{useState} from 'react';
import './counter.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
const data = [
    {
        countNumber : "+1790",
        countpara : "HAPPY CLIENTS"
    },
    {
        countNumber : "+491",
        countpara : "FINISHED PROJECTS"
    },
    {
        countNumber : "+245",
        countpara : "SKILLED EXPERTS"
    },
    {
        countNumber : "+1090",
        countpara : "MEDIA POSTS"
    },

]
export default function Counter() {
    const [CounterOn,setCounterOn]=useState(false);
  return (
    <ScrollTrigger onEnter={()=>{setCounterOn(true)}} onExit={()=>{setCounterOn(false)}}>
        <section className='countersection'>
        <div className="counterrow">
            
            {
                data.map((item,index)=>(
                    <div key={index} className="countercolumn">
                           <h1 className='countercolumnheading'>{CounterOn && <CountUp start={0} end={item.countNumber} duration={2} delay={0} />}</h1> 
                           <p className='countercolumnpara'>{item.countpara}</p>
                    </div>
                ))
            }

        </div>
    </section>
    </ScrollTrigger>
    
  )
}
