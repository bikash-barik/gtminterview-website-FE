import React from "react";
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

const data = [
  {
    imgSrc: apnaapp,
    heading: 'AppnaApp',
    para: 'We have always been in the race to identify innovation before it reaches us from elsewhere. Our engagement with blockchain technology started years ago and today we have successfully helped our customers to implement mass scale blockchain-powered business ecosystems for their end consumers.',
    btnText: 'View Full Details',
  },
  {
    imgSrc: gmtimg,
    heading: 'GlowTechmor',
    para: 'We have always been in the race to identify innovation before it reaches us from elsewhere. Our engagement with blockchain technology started years ago and today we have successfully helped our customers to implement mass scale blockchain-powered business ecosystems for their end consumers.',
    btnText: 'View Full Details',
  },
  {
    imgSrc: techmor3d,
    heading: '3D Techmor',
    para: 'We have always been in the race to identify innovation before it reaches us from elsewhere. Our engagement with blockchain technology started years ago and today we have successfully helped our customers to implement mass scale blockchain-powered business ecosystems for their end consumers.',
    btnText: 'View Full Details',
  },
  {
    imgSrc: aiwriter,
    heading: 'AI Writor',
    para: 'We have always been in the race to identify innovation before it reaches us from elsewhere. Our engagement with blockchain technology started years ago and today we have successfully helped our customers to implement mass scale blockchain-powered business ecosystems for their end consumers.',
    btnText: 'View Full Details',
  },
  {
    imgSrc: dwell,
    heading: 'DWELL',
    para: 'We have always been in the race to identify innovation before it reaches us from elsewhere. Our engagement with blockchain technology started years ago and today we have successfully helped our customers to implement mass scale blockchain-powered business ecosystems for their end consumers.',
    btnText: 'View Full Details',
  },
  {
    imgSrc: silentlearn,
    heading: 'SilentLearn',
    para: 'We have always been in the race to identify innovation before it reaches us from elsewhere. Our engagement with blockchain technology started years ago and today we have successfully helped our customers to implement mass scale blockchain-powered business ecosystems for their end consumers.',
    btnText: 'View Full Details',
  },
  {
    imgSrc: emailhub,
    heading: 'EMAIL-HUB',
    para: 'We have always been in the race to identify innovation before it reaches us from elsewhere. Our engagement with blockchain technology started years ago and today we have successfully helped our customers to implement mass scale blockchain-powered business ecosystems for their end consumers.',
    btnText: 'View Full Details',
  },
  {
    imgSrc: gippyservice,
    heading: 'GIPPY SERVICE',
    para: 'We have always been in the race to identify innovation before it reaches us from elsewhere. Our engagement with blockchain technology started years ago and today we have successfully helped our customers to implement mass scale blockchain-powered business ecosystems for their end consumers.',
    btnText: 'View Full Details',
  },

];

export default function ourproduct() {
  return (
    <>
    <Top heading={"OUR PRODUCTS"}/>
    <div className="opdiv">
      {data.map((item, index) => (
        <div className="oprow" key={index} data-aos="fade-up">
          {(index % 2 === 0) ? (
            <>
            <div className="opcolumn2">
              <h2 className="opcolumnheading">{item.heading}</h2>
              <p className="opcolumnpara">{item.para}</p>
              <button className="opcolumnbtn">{item.btnText} <i className="fa-solid fa-angle-right"></i></button>
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
              <button className="opcolumnbtn">{item.btnText}</button>
            </div>
          </>
          )}
        </div>
      ))}
    </div>
    </>
    
  );
}
