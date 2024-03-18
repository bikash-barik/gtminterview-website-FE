import React from "react";
import "./servicemegamenu.css";
import servicemegamenuimg from "../../assets/images/servicemegamenuimg.png";
import weblink from '../../assets/images/web-link.png';
import dapp from '../../assets/images/dapp.svg';
import wordpress from '../../assets/images/wordpress.png';
import websitedevelopment from '../../assets/images/website-development.png';
import mobileapp from '../../assets/images/mobile-app.png';
import posterdesign from '../../assets/images/poster-design.png';
import digitalmarketing from '../../assets/images/digital-marketing.png';
import seo from '../../assets/images/seo.png';
import socialmediamarketing from '../../assets/images/social-media-marketing.png';
import facebookandgoogleads from '../../assets/images/social-media.png';
import devops from '../../assets/images/devops.png';
import contentwriting from '../../assets/images/content-writing.png';
import logodesign from '../../assets/images/logodesign.png';
import graphicdesign from '../../assets/images/graphic-design.png';
import videoandanimation from '../../assets/images/videoandanimation.png';
import testing from '../../assets/images/testing.png';


const data1 = [
  {
    serviceimage :weblink,
    servicename : "Web3 Web Application"
  },
  {
    serviceimage :dapp,
    servicename : "Dapp"
  },
  {
    serviceimage :wordpress,
    servicename : "Bulk WordPress"
  },
  {
    serviceimage :websitedevelopment,
    servicename : "Website Development"
  },
  {
    serviceimage :mobileapp,
    servicename : "Mobile App"
  },
  {
    serviceimage :posterdesign,
    servicename : "Poster Design"
  },

]

const data2 = [
  {
    serviceimage :digitalmarketing,
    servicename : "Digital Marketing"
  },
  {
    serviceimage :seo,
    servicename : "Seo"
  },
  {
    serviceimage :socialmediamarketing,
    servicename : "Social Media Marketing"
  },
  {
    serviceimage :facebookandgoogleads,
    servicename : "Facebook and Google Ads"
  },
  {
    serviceimage :devops,
    servicename : "DevOps"
  },

]

const data3 = [
  {
    serviceimage :contentwriting,
    servicename : "Content Writing"
  },
  {
    serviceimage :logodesign,
    servicename : "Logo Design"
  },
  {
    serviceimage :graphicdesign,
    servicename : "Graphic Design"
  },
  {
    serviceimage :videoandanimation,
    servicename : "Video and Animation"
  },
  {
    serviceimage :testing,
    servicename : "Testing (App, Games, Software)"
  },
]
export default function ServicesMegaMenu({ isOpen }) {
  return (
    <div className={`service-mega-menu ${isOpen ? 'open' : ''}`}>
      <div className="servicemegamenurow">

        <div className="servicemenu-column1">
          <img className="servicemegamenuimg" src={servicemegamenuimg} alt="" />
        </div>
        
        <div className="servicemenu-column2">
          <div className="sermenuinnercolumn1">
              {
                data1.map((item,index)=>(
                  <div key={index} className="serviceinnercolumninner">
                        <div className="serviceimagecolumn">
                           <img className="servicecolumnimage" src={item.serviceimage} alt={item.serviceimage} />
                        </div>
                        <div className="serviceparacolumn">
                            <p style={{marginBottom:"0"}}>{item.servicename}</p>
                        </div>
                  </div>
                ))
              }
          </div>

          <div className="sermenuinnercolumn1">
          {
                data2.map((item,index)=>(
                  <div key={index} className="serviceinnercolumninner">
                        <div className="serviceimagecolumn">
                           <img className="servicecolumnimage" src={item.serviceimage} alt={item.serviceimage} />
                        </div>
                        <div className="serviceparacolumn">
                            <p style={{marginBottom:"0"}}>{item.servicename}</p>
                        </div>
                  </div>
                ))
              }
          </div>

          <div className="sermenuinnercolumn1">
          {
                data3.map((item,index)=>(
                  <div key={index} className="serviceinnercolumninner">
                        <div className="serviceimagecolumn">
                           <img className="servicecolumnimage" src={item.serviceimage} alt={item.serviceimage} />
                        </div>
                        <div className="serviceparacolumn">
                            <p style={{marginBottom:"0"}}>{item.servicename}</p>
                        </div>
                  </div>
                ))
              }
          </div>
        </div>
      </div>
    </div>
  );
}
