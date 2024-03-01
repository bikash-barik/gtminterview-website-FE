import React from 'react';
import './contact.css';
import Top from '../../components/Top/Top';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
const Contact = () => {

  return (
    <>
    <Top heading={"CONTACT US"}/>

    <section className='contactussection pt-32'>
      <div className="contactusrow">
        <div className="contactuscolumn1">

          <h2 className='contactuscolumnheading'>GET IN TOUCH</h2>

          <div className="contactuscolumninnerdiv ">
                <input type="text" className='contactusinput mr-3' placeholder='First Name'/>
                <input type="text" className='contactusinput' placeholder='Last Name'/>
          </div>

          <div className="contactuscolumninnerdiv1">
                <input type="email" className='contactusinput mr-3' placeholder='Email'/>
          </div>

          <div className="contactuscolumninnerdiv1">
                <input type="text" className='contactusinput' placeholder='Contact Number'/>
          </div>

          <div className="contactuscolumninnerdiv1">
                <textarea name="" className='contactusinput' id="" cols="50" rows="10" placeholder='Message'>
                 
                </textarea>
          </div>

          <div className="contactuscolumninnerdiv1">
               <input type="submit" className='contactusinputbtn' placeholder='SEND MESSAGE'/>
          </div>

        </div>

        <div className="contactuscolumn2">
          
          <h2 className='contactcolumnheading'>Our Contacts</h2>

          <div className="contactaddressdiv">
            <div className="contactaddresslogo">
               <i class="fa fa-map-marker"></i>
            </div>

            <div className="contactaddresspara">
                <h4 className='addressheading'>Address</h4>
                <p className='addresspara'>WeWork Prestige Cube Koramangala, Site No. 26, Laskar Hosur Road, Adugodi, Bangalore, KA 560029</p>
            </div>
          </div>

          <div className="contactdetailsdiv">
            <div className="contactdetailsheading">
                <p className='contactdetailspara'>CALL US</p>
            </div>

            <div className="contactdetailsheading">
                <p className='contactdetailspara'>+91 9064370711</p>
            </div>
          </div>

          <div className="contactdetailsdiv">
            <div className="contactdetailsheading">
                <p className='contactdetailspara'>E-MAIL US </p>
            </div>

            <div className="contactdetailsheading">
                <p className='contactdetailspara'>info@glowtechmor</p>
            </div>
          </div>

          <div className="contactdetailsdiv">
            <div className="contactdetailsheading">
                <p className='contactdetailspara'>FAX </p>
            </div>

            <div className="contactdetailsheading">
                <p className='contactdetailspara'>+91 9078585566</p>
            </div>
          </div>

          <div className="contactdetailsdiv">
            <div className="contactdetailsheading">
                <p className='contactdetailspara'>Skype ID</p>
            </div>

            <div className="contactdetailsheading">
                <p className='contactdetailspara'>qwe.ui11q03d345</p>
            </div>
          </div>

            <div className="socialicons">
                <ul className='socialiconsul'>
                    <li className='socialiconsli'><FaFacebook/></li>
                    <li className='socialiconsli'><FaTwitter/></li>
                    <li className='socialiconsli'><FaSkype/></li>
                    <li className='socialiconsli'><IoMdMail/></li>
                    <li className='socialiconsli'><FaLinkedin/></li>
                </ul>
            
            </div>

        </div>
      </div>
    </section>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5544322883056!2d77.6084230751526!3d12.936334215650353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae153a4579f8e5%3A0xe03c80840fd742d7!2sWeWork%20Prestige%20Cube!5e0!3m2!1sen!2sin!4v1709284752423!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </>
  );
};

export default Contact;
