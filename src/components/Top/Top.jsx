import React from 'react'
import './top.css'
export default function Top(props) {
  return (
    <section className='topsection'>
        <div className="toprow1">
            <div className="topheadingdiv">
                <h2 className='topheading'>{props.heading}</h2>
            </div>
        </div>
    </section>
  )
}
