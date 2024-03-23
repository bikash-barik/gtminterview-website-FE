import React,{useEffect} from "react";
import './ourproduct.css';
import gmtimg from '../../assets/images/gtm-1536x692.png';
import apnaapp from '../../assets/images/aa-1536x729.png';
import techmor3d from '../../assets/images/3dtechmor.png';
import aiwriter from '../../assets/images/ai-writing-generator.jpg';
import dwell from '../../assets/images/nfts-development-1.jpg';
import silentlearn from '../../assets/images/silentlearn.png';
import emailhub from '../../assets/images/Email-1536x1024.jpg';
import gippyservice from '../../assets/images/gippyservice.png';
import Top from '../../components/Top/Top';
// import { Button } from '@mui/material'
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
const data = [
  {
    imgSrc: apnaapp,
    heading: 'AppnaApp',
    para: 'We have always been in the race to identify innovation before it reaches us from elsewhere. Our engagement with blockchain technology started years ago and today we have successfully helped our customers to implement mass scale blockchain-powered business ecosystems for their end consumers.',
    btnText: 'View Full Details',
    productid :"appnaapp",
    productlink :"http://appnaapp.com/"
  },
  {
    imgSrc: gmtimg,
    heading: 'GlowTechmor',
    para: 'We have always been in the race to identify innovation before it reaches us from elsewhere. Our engagement with blockchain technology started years ago and today we have successfully helped our customers to implement mass scale blockchain-powered business ecosystems for their end consumers.',
    btnText: 'View Full Details',
    productid : "gmt",
    productlink : "https://glowtechmor.com/"
  },
  {
    imgSrc: techmor3d,
    heading: '3D Techmor',
    para: 'We have always been in the race to identify innovation before it reaches us from elsewhere. Our engagement with blockchain technology started years ago and today we have successfully helped our customers to implement mass scale blockchain-powered business ecosystems for their end consumers.',
    btnText: 'View Full Details',
    productid : "techmor3d",
    productlink : 'https://gaming-35085.web.app/'
  },
  {
    imgSrc: aiwriter,
    heading: 'AI Writor',
    para: 'We have always been in the race to identify innovation before it reaches us from elsewhere. Our engagement with blockchain technology started years ago and today we have successfully helped our customers to implement mass scale blockchain-powered business ecosystems for their end consumers.',
    btnText: 'View Full Details',
    productid : 'aiwriter',
    productlink : "https://writeup.ai/"
  },
  {
    imgSrc: dwell,
    heading: 'DWELL',
    para: 'We have always been in the race to identify innovation before it reaches us from elsewhere. Our engagement with blockchain technology started years ago and today we have successfully helped our customers to implement mass scale blockchain-powered business ecosystems for their end consumers.',
    btnText: 'View Full Details',
    productid : 'dwell',
    productlink : "https://opensea.io/"
  },
  {
    imgSrc: silentlearn,
    heading: 'SilentLearn',
    para: 'We have always been in the race to identify innovation before it reaches us from elsewhere. Our engagement with blockchain technology started years ago and today we have successfully helped our customers to implement mass scale blockchain-powered business ecosystems for their end consumers.',
    btnText: 'View Full Details',
    productid : 'silentlearn',
    productlink : "https://courses.techmentorcore.com/"
  },
  {
    imgSrc: emailhub,
    heading: 'EMAIL-HUB',
    para: 'We have always been in the race to identify innovation before it reaches us from elsewhere. Our engagement with blockchain technology started years ago and today we have successfully helped our customers to implement mass scale blockchain-powered business ecosystems for their end consumers.',
    btnText: 'View Full Details',
    productid  : "email-hub",
    productlink : "https://email-sand-1-2-front-end.vercel.app/"
  },
  {
    imgSrc: gippyservice,
    heading: 'GIPPY SERVICE',
    para: 'We have always been in the race to identify innovation before it reaches us from elsewhere. Our engagement with blockchain technology started years ago and today we have successfully helped our customers to implement mass scale blockchain-powered business ecosystems for their end consumers.',
    btnText: 'View Full Details',
    productid : 'gippy-service',
    productlink : "https://gippyservice.com/"
  },

];

export default function OurProducts() {
  const { section } = useParams();

  useEffect(() => {
    // Scroll to the corresponding section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [section]);

  return (
    <>
    <Top heading={"OUR PRODUCTS"}/>
    <div className="opdiv">
      {data.map((item, index) => (
        <div className="oprow" key={index} data-aos="fade-up" id={item.productid}>
          {(index % 2 === 0) ? (
            <>
            <div className="opcolumn2">
              <h2 className="opcolumnheading">{item.heading}</h2>
              <p className="opcolumnpara">{item.para}</p>
              <Link to={item.productlink} className="opcolumnbtn">{item.btnText} <i className="fa-solid fa-angle-right"></i></Link>
            </div>
            <div className="opcolumn1">
              <img className="opcolumnimg" src={item.imgSrc} alt="" />
            </div>
          </>
           
          ) : (
            <>
            <div className="opcolumn1">
              <img className="opcolumnimg" src={item.imgSrc} alt="" />
            </div>
            <div className="opcolumn2">
              <h2 className="opcolumnheading">{item.heading}</h2>
              <p className="opcolumnpara">{item.para}</p>
              <Link to={item.productlink} className="opcolumnbtn">{item.btnText}</Link>
            </div>
          </>
          )}
        </div>
      ))}
    </div>
    </>
    
  );
}
