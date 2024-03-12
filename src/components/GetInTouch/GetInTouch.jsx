import React from 'react'
import {Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import './getintouch.css';

export default function GetInTouch() {
  return (
    <div>
       <form className='form-d'>
                <div className='flex-form'>
                
                    <div className='formm' data-aos="fade-up">
                        <h2 data-aos="zoom-in">GET IN TOUCH WITH US</h2>

                        <div className="form-row form-e" >
                            <div className="form-group col-md-6">
                                <input type="text" className="form-control" id="inputEmail4" placeholder="Fast Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <input type="text" className="form-control" id="inputPassword4" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="form-group form-e">
                            <input type="email" className="form-control" id="inputAddress" placeholder="email" />
                        </div>
                        <div className="form-group form-e">
                            <input type="number" className="form-control" id="inputAddress2" placeholder="Mobile Number" />
                        </div>
                        <div className="form-group form-e">
                            <textarea className="form-control" id="inputAddress2" rows="4" cols="50" placeholder="message..." />
                        </div>
                        <button style={{ width: "100%" }} type="submit" className="btn btn-primary">SUBMIT FORM</button>
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
