import React,{useState} from 'react'
import firebase1 from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import recentprojectimage from '../../assets/images/recentprojectimage.png';

export default function UploadRecentProjects({ setLoadingState,setLoadingMessage }) {
 
  const [file, setFile] = useState(null);
  const [recentprojectCategory, setrecentprojectCategory] = useState('');
  const [recentprojectTitle, setrecentprojectTitle] = useState('');
  const [recentprojectLink, setrecentprojectLink] = useState("");

    const handleRecentProjectsData = async (e) => {
        e.preventDefault();
        try {
          if (!file) {
            alert("Please select an image.");
            return;
          }
    
          setLoadingState(true)
          setLoadingMessage("","Please wait until your data is submitted!...");
    
          const firestore = firebase1.firestore();
          const storage = firebase1.storage();
          
          const storageRef = storage.ref(`images/${file.name}`);
          const uploadTask = storageRef.put(file);
          
          const snapshot = await uploadTask;
          const downloadURL = await snapshot.ref.getDownloadURL();
    
          const timestamp = firebase1.firestore.FieldValue.serverTimestamp();
          const submissionData = {
            imgSrc: downloadURL,
            recentprojectCategory:recentprojectCategory,
            heading : recentprojectTitle,
            link:recentprojectLink,
            submittedAt: timestamp,
          };
          await firestore.collection("RecentProjectData").add(submissionData);
    
          setLoadingMessage("success","Data submitted successfully!");
          setTimeout(() => {
            setLoadingState(false)
          }, 5000);
    
         setFile(null);
         setrecentprojectCategory("");
         setrecentprojectTitle("")
         setrecentprojectLink("");

        } catch (error) {
            setLoadingMessage("error",'Failed to submit data. Please try again.');
             setTimeout(() => {
                setLoadingState(false);
                console.log(error);
            }, 5000);
        }
      };
    
      const handleFileChange = (e) => {
        if (e.target.files[0]) {
          setFile(e.target.files[0]);
        }
      };

  return (
    <div className="uploadimagerow">

    <div className="uploadimagecolumn">
      <div className="uploadimagecolumninnerdiv">
        <h3 className="mb-8 text-center font-bold text-2xl">Recent Projects</h3>

        <div className="uploaddatadiv">
            <div className="uploadimageinputdiv">
             <label htmlFor="">Recent Projects Image</label>
             <input type="file" onChange={handleFileChange} />
            </div>

             <div className="uploadimageinputdiv">
             <label htmlFor="">Recent Project Category</label>
             <select name="" id="" onChange={(e) => setrecentprojectCategory(e.target.value)}>
              <option value="">Select Project Category</option>
              <option value="AI">AI</option>
              <option value="Programming">Programming</option>
              <option value="BlockChain">BlockChain</option>
             </select>
            </div>
        </div>
        

      <div className="uploaddatadiv">
            <div className="uploadimageinputdiv">
             <label htmlFor="">Recent Project Title</label>
             <input type="text" required placeholder='Enter Recent Project Title....'  value={recentprojectTitle} onChange={(e) => setrecentprojectTitle(e.target.value)}/>
            </div>

            <div className="uploadimageinputdiv">
             <label htmlFor="">Recent Project Link</label>
             <input type="text" required placeholder='Enter Recent Project Link....'  value={recentprojectLink} onChange={(e) => setrecentprojectLink(e.target.value)}/>
            </div>
      </div>
      
        <button className="uploadimagebtn" onClick={handleRecentProjectsData} style={{ marginTop: "5px", borderRadius: "5px" }}>Upload</button>
      </div>
    </div>

    <div className="uploadimagecolumn">
      <img className="uploadimageimage" src={recentprojectimage} alt="recentprojectimage"></img>
    </div>

  </div>
  )
}
