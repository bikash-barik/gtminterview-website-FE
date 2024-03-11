import React, { useState } from "react";
// import { getStorage, ref, uploadBytes } from "firebase/storage";
// import firebase from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import firebase1 from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "./uploaddata.css";
// import loadingImage from '../assets/hotelbookingreloader.gif';
// import prasadamgalleryimage from '../assets/prasadamgalleryimage.png';


const UploadData = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const handleUploadServices = async (e) => {
    e.preventDefault();
    try {
      if (!file) {
        alert("Please select an image.");
        return;
      }

      setLoading(true);
      setMessage({text:"Please wait until your data is submitted!..."});

      const firestore = firebase1.firestore();
      const storage = firebase1.storage();
      
      const storageRef = storage.ref(`images/${file.name}`);
      const uploadTask = storageRef.put(file);

      const snapshot = await uploadTask;
      const downloadURL = await snapshot.ref.getDownloadURL();

      const timestamp = firebase1.firestore.FieldValue.serverTimestamp();
      const submissionData = {
        imageUrl: downloadURL,
        submittedAt: timestamp,
      };
      await firestore.collection("ServicesData").add(submissionData);

      setMessage({ type: 'success', text: 'Data submitted successfully!' });
      setTimeout(() => {
        setLoading(false);
      }, 5000);

     setFile(null);
    } catch (error) {
         setMessage({ type: 'error', text: 'Failed to submit data. Please try again.' });
         setTimeout(() => {
          setLoading(false);
        }, 5000);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <>
    {
      loading ?
      <section className="loadingimagediv">
        <div className="loadingimageinnerdiv">
        <div className="loadingimageimagediv">
        <img className="loadingimage" src="/" alt="Loading"/>
        </div>
        <div className="loadingimagemessage">
          <h2 className="text-4xl" style={{ color: message.type === 'success' ? 'green' : message.type === 'error' ? 'red' :'yellow'}}>{message.text}</h2>
          </div>
        </div>
      </section>
      :
      <div className="uploadimagediv pt-28">
        <div className="logoutbtndiv">
          <div className="logoutbtninnerdiv">
            <button className="logoutbtn" onClick={handleLogout} style={{ marginTop: "5px", borderRadius: "5px" }}>
              Logout
            </button>
          </div>
        </div>

        
        <div className="uploadimagerow">

          <div className="uploadimagecolumn">
            <div className="uploadimagecolumninnerdiv">
              <h3 className="mb-8 text-center font-bold text-2xl">Services </h3>
              <input type="file" className="mb-4" onChange={handleFileChange} />

              <button className="uploadimagebtn" onClick={handleUploadServices} style={{ marginTop: "5px", borderRadius: "5px" }}>Upload</button>
            </div>
          </div>

          <div className="uploadimagecolumn">
            <img className="uploadimageimage" src="/" alt="prasadamgalleryimage"></img>
          </div>

        </div>

        </div>
    }
    </>
  );
};

export default UploadData;
