import React,{useState} from "react";
import { Typography } from '@mui/material'
import logoo from '../../assets/images/gtm3.png'
import logooo from '../../assets/images/gtm4.png'
import logoooo from '../../assets/images/gtm5.png'
import './ondemandservices.css';

let card = [
    {
        id: 1,
        image: logoo,
        title: "Artificial Intelligence",
        content: "We build B2B and B2C market palce to help business scale ,intigrate 400+ and-ons to make the most of adobe commerce.",
        content2: "We build B2B and B2C market palce to help business scale ,intigrate 400+ and-ons to make the most of adobe commerce."
    },
    {
        id: 2,
        image: logooo,
        title: "BlockChain",
        content: "Our experties in blockchain technologies include solution such as smart business contracts and real Estate contract mangement systems and much more.",
        content2: "With reputation for delevering organic access,we develop strategix SEO compaigns that place our clients' websites in the covered top-three SERP positions."
    },
    {
        id: 3,
        image: logoooo,
        title: "Programming And Tech",
        content: "Digital is here to stay and grow exponentially increased visibility,marketing oppertunity at efficient budgets and customer engagement ",
        content2: "We help business people in to the digital service economy with our inovative solutions and advisory services."
    }
]
export default function OnDemandService() {
    const [hov, setHov] = useState(null)
  return (
    <>
      <div>
        <Typography className="on">On-Demand Services</Typography>
      </div>
      <div className="servicediv">
      <div className="box" data-aos="zoom-in-up">
        {card.map((e) => (
          <div
            key={e.id}
            onMouseEnter={() => setHov(e)}
            onMouseLeave={() => setHov(null)}
            className={`box-content ${hov === e && "active_hover"}`}
          >
            <div className="card-inner">
              <div className="card-front">
                <img src={e.image} alt="logo" />
                <h4>{e.title}</h4>
                <p>{e.content}</p>
              </div>
              <div className="card-back">
                <p>{e.content2}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
