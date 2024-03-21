import React, { useState } from "react";
// import { getStorage, ref, uploadBytes } from "firebase/storage";
// import firebase from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import "./uploaddata.css";
import UploadServices from "../../components/UploadServices/UploadServices";
import UploadJob from "../../components/UploadJob/UploadJob";
// import loadingImage from '../assets/hotelbookingreloader.gif';
// import prasadamgalleryimage from '../assets/prasadamgalleryimage.png';


const UploadData = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const setLoadingState = (loadingValue) => {
    setLoading(loadingValue);
  };

  const setLoadingMessage = (messageType, messageText) =>{
    setMessage({
        type: messageType,
        text: messageText,
      });
  }
  
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

        <UploadServices setLoadingState={setLoadingState} setLoadingMessage={setLoadingMessage} />

        <UploadJob setLoadingState={setLoadingState} setLoadingMessage={setLoadingMessage} />

        </div>
    }
    </>
  );
};

export default UploadData;
