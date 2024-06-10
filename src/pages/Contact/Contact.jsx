import React,{useState} from 'react';
import './contact.css';
import Top from '../../components/Top/Top';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import ContactForm from '../../Utils/ContactForm';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(null);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName:"",
    phoneNumber: "",
    message: ""
});

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const validation = () => {
  const newErrors = {};
  const emailPattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  const phonePattern = /^[\d+\-\s()]*$/;


  if (!formData.firstName) {
    newErrors.firstName = 'First Name is required';
  }

  if (!formData.lastName) {
    newErrors.lastName = 'Last Name is required';
  }

  if (!formData.phoneNumber) {
    newErrors.phoneNumber = 'Mobile Number is required';
  } else if (!phonePattern.test(formData.phoneNumber)) {
    newErrors.phoneNumber = 'Please enter correct Mobile Number';
  }

  if (!formData.email) {
    newErrors.email = 'Email is required';
  } else if (!emailPattern.test(formData.email)) {
    newErrors.email = 'Please enter correct Email ID';
  }

  if (!formData.message) {
    newErrors.message = 'Message is required';
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

const submitContactUsForm = async (e) =>{
  e.preventDefault();

  if(validation()){
      setLoading(true);
      setLoadingMessage({ type: 'wait', text:"Wait Until Your Data is Submitted!..."});

      const {type,text,loading} = await ContactForm(formData);

      setLoadingMessage({ type: type, text: text });
      setTimeout(() => {
        setLoading(loading);
      }, 5000);

      setFormData({
        email: "",
        firstName: "",
        lastName:"",
        phoneNumber: "",
        message: ""
    });
  }
  else{
    window.location.reload()
  }
}


  return (
    <>
    <Top heading={"CONTACT US"}/>

    <section className='contactussection pt-32'>
      <div className="contactusrow">
        <div className="contactuscolumn1">

          <h2 className='contactuscolumnheading'>GET IN TOUCH</h2>

          <div className="contactuscolumninnerdiv ">
                <input type="text" className='contactusinput mr-3' name='firstName' value={formData.firstName} onChange={handleInputChange} placeholder='First Name'/>
                <input type="text" className='contactusinput' name='lastName' value={formData.lastName} onChange={handleInputChange} placeholder='Last Name'/>
          </div>

          <div className="contactuscolumninnerdiv1">
                <input type="email" className='contactusinput mr-3' name='email' value={formData.email} onChange={handleInputChange} placeholder='Email'/>
          </div>

          <div className="contactuscolumninnerdiv1">
                <input type="text" className='contactusinput' name='phoneNumber' value={formData.phoneNumber} onChange={handleInputChange} placeholder='Contact Number'/>
          </div>

          <div className="contactuscolumninnerdiv1">
                <textarea className='contactusinput' name="message" value={formData.message} onChange={handleInputChange} cols="50" rows="10" placeholder='Message'>
                </textarea>
          </div>

          <div className="contactuscolumninnerdiv1">
                {
                  loading ? 
                  <p style={{ color: loadingMessage.type === 'success' ? 'green' : loadingMessage.type === 'error' ? 'red' : 'Tangaroa'}}>{loadingMessage.text}</p>
                  :
                  <input type="submit" className='contactusinputbtn' onClick={submitContactUsForm} placeholder='SEND MESSAGE'/>
                }
               
          </div>



        </div>

        <div className="contactuscolumn2">
          
          <h2 className='contactcolumnheading'>Our Contacts</h2>

          <div className="contactaddressdiv">
            <div className="contactaddresslogo">
               <i class="fa fa-map-marker"></i>
            </div>

            <div className="contactaddresspara" data-aos="fade-up">
                <h4 className='addressheading'>Address</h4>
                <p className='addresspara'>WeWork Prestige Cube Koramangala, Site No. 26, Laskar Hosur Road, Adugodi, Bangalore, KA 560029</p>
            </div>
          </div>

          <div className="contactdetailsdiv">
            <div className="contactdetailsheading">
                <p className='contactdetailspara'>CALL US</p>
            </div>

            <div className="contactdetailsheading">
                <p className='contactdetailspara'>+91 6371083736</p>
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
    <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5544322883056!2d77.6084230751526!3d12.936334215650353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae153a4579f8e5%3A0xe03c80840fd742d7!2sWeWork%20Prestige%20Cube!5e0!3m2!1sen!2sin!4v1709284752423!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </>
  );
};

export default Contact;
