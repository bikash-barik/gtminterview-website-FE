import React, { useState} from 'react';
import './applicationform.css';
import axios from 'axios';
import firebase1 from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import Loader from "../../components/Loader/Loader";

export default function ApplicationForm({openModel}) {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const [formData, setFormData] = useState({
        email: "",
        Name: "",
        phoneNumber: "",
        address: "",
        experience: "",
        lastcompany: "",
        resume: null // File input
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, resume: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setMessage({text:"Please wait until your data is submitted!..."});


          const firestore = firebase1.firestore();
          const storage = firebase1.storage();
          
          const storageRef = storage.ref(`images/${formData.resume.name}`);
          const uploadTask = storageRef.put(formData.resume);
          
          const snapshot = await uploadTask;
          const downloadURL = await snapshot.ref.getDownloadURL();

        console.log(formData)
        try {
            const response = await axios.post("https://glowtechmor-backend.onrender.com/ApplicationForm", {
                email: formData.email,
                Name: formData.Name,
                phoneNumber: formData.phoneNumber,
                address:formData.address,
                experience:formData.experience,
                lastcompany:formData.lastcompany,
                resume:downloadURL
                }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response.status === 200) {
                // alert("Form submitted successfully!");
                openModel();
                setFormData({
                    email: "",
                    Name: "",
                    phoneNumber: "",
                    address: "",
                    experience: "",
                    lastcompany: "",
                    resume: null
                });

                setMessage({ type: 'success', text: 'Data submitted successfully!' });
                setTimeout(() => {
                  setLoading(false);
                }, 5000);
                
            } else {
                throw new Error("Form submission failed!");
            }
        } catch (error) {
            setMessage({ type: 'error', text: error});
            setTimeout(() => {
             setLoading(false);
           }, 5000);
        }
    };


  return (
    <>
    {
        loading ?
        <section className="loadingimagediv">
        <div className="loadingimageinnerdiv">
        <div className="loadingimageimagediv">
         <Loader/>
        </div>
        <div className="loadingimagemessage">
          <h2 className="text-4xl" style={{ color: message.type === 'success' ? 'green' : message.type === 'error' ? 'red' :'yellow'}}>{message.text}</h2>
          </div>
        </div>
        </section>
      :

    <div className='applicationformdiv'>
      <input type="email" name="email" placeholder='Email' value={formData.email} onChange={handleInputChange} required />
      <input type="text" name="Name" placeholder='Name' value={formData.Name} onChange={handleInputChange} required />
      <input type="text" name="phoneNumber" placeholder='Phone Number' value={formData.phoneNumber} onChange={handleInputChange} required />
      <input type="text" name="address" placeholder='Address' value={formData.address} onChange={handleInputChange} required />
      <input type="number" name="experience" placeholder='Years of Experience' value={formData.experience} onChange={handleInputChange} required />
      <input type="text" name="lastcompany" placeholder='Last Company' value={formData.lastcompany} onChange={handleInputChange} required />
    <div className="uploadimageinputdiv">
        <label htmlFor="resume">Resume/CV</label>
        <input type="file" onChange={handleFileChange} required />
    </div>
      <input onClick={handleSubmit} type="submit" value="SUBMIT" style={{backgroundColor:"#002244",color:"white",border:"none"}} />
    </div>

    }
  </>
  );
}