import React from "react";
import './callbackform.css';

export default function CallBackForm() {
  return (
    <section className="callbackform"  data-aos="fade-up">
      <h5>CALL BACK REQUEST</h5>

      <div className="callbackinnerdiv">
        <div className="callbackforminputdiv">
          <label htmlFor="">Name</label>
          <input type="text" />
        </div>

        <div className="callbackforminputdiv">
          <label htmlFor="">Phone</label>
          <input type="text" />
        </div>

        <div className="callbackforminputdiv">
          <label htmlFor="">Email</label>
          <input type="email" />
        </div>

        <button className="callbackformbtn">Send</button>
      </div>
    </section>
  );
}
