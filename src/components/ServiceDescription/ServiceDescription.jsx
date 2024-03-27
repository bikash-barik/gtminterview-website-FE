import React from "react";
import './servicedescription.css';
import CallBackForm from "../CallBackForm/CallBackForm";

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
