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

// import React from 'react'
// import './applicationform.css';
// import reCAPTCHA from "react-google-recaptcha"

// export default function ApplicationForm() {
//   return (
//     <div className='applicationformdiv'>
//       <input type="email" placeholder='Email'/>
//       <input type="text" placeholder='Name' />
//       <input type="text" placeholder='Phone Number' />
//       <input type="text" placeholder='Address' />

//       <input type="number" placeholder='Years of Experience' />

//       <input type="text" placeholder='Last Company' />

//       {/* <label htmlFor="">Branch</label>

//       <select name="" id="">
//         <option value="CSE">CSE</option>
//         <option value="CITS">CITS</option>
//         <option value="AWS">AWS</option>
//         <option value="IBM">IBM</option>
//         <option value="EEE">EEE</option>
//         <option value="Civil">Civil</option>
//         <option value="ECE">ECE</option>
//         <option value="MBA">MBA</option>
//         <option value="BBA">BBA</option>
//         <option value="BCA">BCA</option>
//         <option value="other">other</option>
//       </select>

//       <label htmlFor="">What year are you in?</label>
//       <select name="" id="">
//         <option value="1st Year">1st Year</option>
//         <option value="2nd Year">2nd Year</option>
//         <option value="3rd Year">3rd Year</option>
//         <option value="4th Year">4th Year</option>
//         <option value="other">other</option>
//       </select>

//       <label htmlFor="">Your Interest Domain </label>
//       <select name="" id="">
//         <option value="Web Development(HTML, CSS, Java SCript, React js, Node js">Web Development(HTML, CSS, Java Script, React js, Node js)</option>
//         <option value="Android Development">Android Development</option>
//         <option value="Blockchain">Blockchain</option>
//         <option value="React Native">React Native</option>
//         <option value="Develop">Develop</option>
//         <option value="Marketing & Sales">Marketing & Sales</option>
//         <option value="Digital Marketing">Digital Marketing</option>
//         <option value="Video Editing">Video Editing</option>
//         <option value="Poster Designing">Poster Designing</option>
//         <option value="UI and UX Designing">UI and UX Designing</option>
//         <option value="Gaming">Gaming</option>
//         <option value="3d Model">3d Model</option>
//         <option value="Metaverse">Metaverse</option>
//         <option value="Other">Other</option>
//       </select>

//       <label htmlFor="">Program Interested in</label>
//       <select name="" id="">
//         <option value="Training and Internship Program">Training and Internship Program</option>
//         <option value="Placement Assurance Program(Final Year and Pass Out Batch Students Only)">Placement Assurance Program(Final Year and Pass Out Batch Students Only)</option>
//       </select>

//       <label htmlFor="">Got to Know from ?</label>
//       <select name="" id="">
//         <option value="AIESEC">AIESEC</option>
//         <option value="Company Employee">Company Employee</option>
//         <option value="College">College</option>
//         <option value="Whats app group">Whats app group</option>
//         <option value="Linkedin">Linkedin</option>
//         <option value="Other">Other</option>
//       </select> */}

//       <div className="uploadimageinputdiv">
//              <label htmlFor="">if Resume/ CV</label>
//              <input type="file" />
//       </div>

//       <reCAPTCHA
//       sitekey="Your client site key"
//       />

//       <input type="submit" placeholder='SUBMIT' style={{backgroundColor:"#002244",color:"white",border:"none"}}/>
//     </div>
//   )
// }
