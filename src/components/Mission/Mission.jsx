import React from 'react'
import './mission.css';
import tick from '../../assets/images/tick.webp';
import mission from '../../assets/images/mission.jpg';
import vision from '../../assets/images/vision.jpg';

const data = [
    {
        missionheading : "Warranty Management IT",
        missionpara : "Our service offerings enhance customer experience throughout secure & highly functional end-to-end warranty"
    },
    {
        missionheading : "Quality Control System",
        missionpara : "It's more than a responsibility but a guarantee from us to gain customer trust with highly reliable quality control system."
    },
    {
        missionheading : "Highly Professional Staffs",
        missionpara : "Having obtained the official & formal training in IT technology and technical fields, our staffs know more than what they show."
    },
    {
        missionheading : "Product Engineering & Services",
        missionpara : "Our service offerings enhance customer experience throughout secure & highly functional end-to-end warranty"
    },
    {
        missionheading : "Infrastructure Integration Technology",
        missionpara : "Our service offerings enhance customer experience throughout secure & highly functional end-to-end warranty"
    },
    {
        missionheading : "Information Security Management",
        missionpara : "Our service offerings enhance customer experience throughout secure & highly functional end-to-end warranty"
    },

]
export default function Mission() {
  return (
    <section className='missionsection'> 
        <div className="missionrow1">
            <h2>We excel in delivering</h2>
            <h2>optimal solutions.</h2>
        </div>

        <div className="missionrow2">
            <div className="misssioncolumn1">
                    {
                        data.slice(0,data.length/2).map((item,index)=>(
                            <div key={index} className="missioninnerrow">
                            <div className="missioninnercolumn1">
                                <img className='missionimage' src={tick} alt="tick" />
                            </div>
                            <div className="missioninnercolumn2">
                                <h5 className='missionheading'>{item.missionheading}</h5>
                                <p className='missionpara'>{item.missionpara}</p>
                            </div>
                        </div>
                        ))
                    }
            </div>

            <div className="missioncolumn1">
                    {
                        data.slice(data.length/2,data.length).map((item,index)=>(
                            <div key={index} className="missioninnerrow">
                            <div className="missioninnercolumn1">
                                <img className='missionimage' src={tick} alt="tick" />
                            </div>
                            <div className="missioninnercolumn2">
                                <h5 className='missionheading'>{item.missionheading}</h5>
                                <p className='missionpara'>{item.missionpara}</p>
                            </div>
                        </div>
                        ))
                    }
            </div>
        </div>

        <div className="missionrow3">
            <div className="missionrow3column1">
                <div className="missionrow3innercolumn">
                    <h2>Our Mission</h2>
                    <p>It is an obvious fact that professional digital marketing services are not always expensive and expensive services are not always good.</p>
                </div>
                <div className="missionrow2innercolumn">
                    <img src={mission} alt="mission" />
                </div>
            </div>

            <div className="missionrow3column2">
                <div className="missionrow3innercolumn">
                    <h2>Our Vision</h2>
                    <p>It is an obvious fact that professional digital marketing services are not always expensive and expensive services are not always good.</p>
                </div>
                <div className="missionrow2innercolumn">
                    <img src={vision} alt="vision" />
                </div>
            </div>
        </div>
    </section>
  )
}
