import React from 'react'
import './serviceherosection.css';

const data = {
    heading : "SEO",
}
export default function ServiceHerosection() {
  return (
    <section className='serviceherosection'>
        <div className="serviceherosectionrow">
            <div className="serviceherosectionheadingdiv">
                <h2>{data.heading}</h2>
            </div>
        </div>
    </section>
  )
}
