import React,{useState} from 'react'
import {Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import './getintouch.css';
import ContactForm from '../../Utils/ContactForm'

export default function GetInTouch() {
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
    <div>
       <form className='form-d'>
            <div className='flex-form'>
                
                    <div className='formm' data-aos="fade-up">
                        <h2 data-aos="zoom-in">GET IN TOUCH WITH US</h2>

                        <div className="form-row form-e" >
                            <div className="form-group col-md-6">
                                <input type="text" className="form-control" name='firstName' value={formData.firstName} onChange={handleInputChange} id="inputEmail4" placeholder="Fast Name" />
                                {errors.firstName && (<span className="contactspan">{errors.firstName}</span>)}
                            </div>
                            <div className="form-group col-md-6">
                                <input type="text" className="form-control" name='lastName' value={formData.lastName} onChange={handleInputChange} id="inputPassword4" placeholder="Last Name" />
                                {errors.lastName && (<span className="contactspan">{errors.lastName}</span>)}
                            </div>
                        </div>
                        <div className="form-group form-e">
                            <input type="email" className="form-control" name='email' id="inputAddress" value={formData.email} onChange={handleInputChange} placeholder="email" />
                            {errors.email && (<span className="contactspan">{errors.email}</span>)}
                        </div>
                        <div className="form-group form-e">
                            <input type="number" className="form-control" name='phoneNumber' id="inputAddress2" value={formData.phoneNumber} onChange={handleInputChange} placeholder="Mobile Number" />
                            {errors.phoneNumber && (<span className="contactspan">{errors.phoneNumber}</span>)}
                        </div>
                        <div className="form-group form-e">
                            <textarea className="form-control" id="inputAddress2" name='message' value={formData.message} onChange={handleInputChange}  rows="4" cols="50" placeholder="message..." />
                            {errors.message && (<span className="contactspan">{errors.message}</span>)}
                        </div>
                        {
                        loading ? 
                        <p className='messagepara' style={{ color: loadingMessage.type === 'success' ? 'green' : loadingMessage.type === 'error' ? 'red' : 'Tangaroa'}}>{loadingMessage.text}</p>
                        :
                        <button style={{ width: "100%" }} type="submit" onClick={submitContactUsForm} className="btn btn-primary">SUBMIT FORM</button>
                        }
                        
                    </div>
                    
                    <div className='boxes'>
                        <div className='fast-box' data-aos="fade-up">
                            <Typography className='add'>< LocationOnIcon style={{ color: "#0b9eda" }} />Address</Typography>
                            <p style={{ color: "#ccc" }}>WeWork Prestige Cube Koramangala, Site No. 26, Laskar Hosur Road, Adugodi, Bangalore, KA 560029</p>
                        </div>
                        <div className='second-box'data-aos="fade-up">
                            <Typography className='add'><EmailIcon style={{ color: "yellowgreen" }} />Email</Typography>
                            <p style={{ color: "#ccc" }}>info@glowtechmor.com</p>
                        </div>
                        <div className='second-box' data-aos="fade-up">
                            <Typography className='add'><PhoneIcon style={{ color: "red" }} />Phone</Typography>
                            <p style={{ color: "#ccc" }}>+91 9064370711</p>
                        </div>
                    </div>

                </div>
            </form>
    </div>
  )
}
