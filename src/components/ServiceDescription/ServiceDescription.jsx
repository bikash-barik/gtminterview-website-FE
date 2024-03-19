import React from "react";
import './servicedescription.css';
// import serviceimg from '../../assets/images/serviceimg.png';
import webdevimg from '../../assets/images/webdevimg.jpg';
import CallBackForm from "../CallBackForm/CallBackForm";
import ServicesName from "../ServicesName/ServicesName";

const data = {
    description1 : " We Create Your Business, We Manage Your Business, and Maintain your Business 24/7 ** 365 days. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    description2: "We Create Your Business, We Manage Your Business, and Maintain your Business 24/7 ** 365 days. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    image : webdevimg

}
export default function ServiceDescription({item}) {
  console.log("data in service description",item.techUsed);
  return (
    <section className="servicedescriptionsection">

      <div className="servicedescriptionrow">
        <div className="servicedescriptioncolumn1">
          <p className="servicedescriptionpara"  data-aos="fade-up">{item.description1}</p>
          {/* <img className="servicedescriptionimg" src={serviceimg} alt="" /> */}
          {/* <ServicesName item={item}/> */}
          {/* <section className='servicesnamesection'>
        <div className="servicesnamerow"> 
            {
                item.techUsed.map((item,index)=>(
                    <div className="servicesnamecolumn" key={index}>
                    <div className="servicesnameimgcolumn">
                        <img className='servicenameimg' src={item.imageUrl} alt="" />
                    </div>
    
                    <div className="servicesnameheadingcolumn">
                        <p className='servicenameheading'>{item.textInput}</p>
                    </div>
                </div>
                ))
            }
        </div>
    </section> */}
          <p className="servicedescriptionpara" data-aos="fade-up">{item.description2}</p>
          <img className="servicedescriptionimg" src={item.serviceimage} alt="developmentimage" data-aos="fade-up"/>
        </div>

        <div className="servicedescriptioncolumn2">
            <CallBackForm/>
        </div>
        
      </div>
    </section>
  );
}
