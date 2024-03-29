import React,{useState} from 'react'
import {Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import './getintouch.css';
import axios from 'axios';

export default function GetInTouch() {
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
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://glowtechmor-backend.onrender.com/ContactUsForm", {
                email: formData.email,
                firstName: formData.firstName,
                lastName:formData.lastName,
                phoneNumber: formData.phoneNumber,
                message:formData.message
                }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response.status === 200) {
                alert("Form submitted successfully!");
                setFormData({
                    email: "",
                    firstName: "",
                    lastName:"",
                    phoneNumber: "",
                    message:" "
                });
                
            } else {
                throw new Error("Form submission failed!");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Form submission failed!");
        }
    };
  return (
    <div>
       <form className='form-d'>
                <div className='flex-form'>
                
                    <div className='formm' data-aos="fade-up">
                        <h2 data-aos="zoom-in">GET IN TOUCH WITH US</h2>

                        <div className="form-row form-e" >
                            <div className="form-group col-md-6">
                                <input type="text" className="form-control" value={formData.firstName} onChange={handleInputChange} id="inputEmail4" placeholder="Fast Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <input type="text" className="form-control" value={formData.lastName} onChange={handleInputChange} id="inputPassword4" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="form-group form-e">
                            <input type="email" className="form-control" id="inputAddress" value={formData.email} onChange={handleInputChange} placeholder="email" />
                        </div>
                        <div className="form-group form-e">
                            <input type="number" className="form-control" id="inputAddress2" value={formData.phoneNumber} onChange={handleInputChange} placeholder="Mobile Number" />
                        </div>
                        <div className="form-group form-e">
                            <textarea className="form-control" id="inputAddress2" value={formData.message} onChange={handleInputChange}  rows="4" cols="50" placeholder="message..." />
                        </div>
                        <button style={{ width: "100%" }} type="submit" onClick={handleSubmit} className="btn btn-primary">SUBMIT FORM</button>
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
