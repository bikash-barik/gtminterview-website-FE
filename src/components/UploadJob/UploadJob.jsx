import React,{useState} from 'react'
import firebase1 from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import openingpositionimage from '../../assets/images/openingpositionimage.png';

export default function Uploadopeningposition({ setLoadingState,setLoadingMessage }) {
 
  const [file, setFile] = useState(null);
  const [openingpositionType, setopeningpositionType] = useState('');
  const [openingpositionTitle, setopeningpositionTitle] = useState('');
  const [openingpositionDescription, setopeningpositionDescription] = useState('');
  const [textInputs, setTextInputs] = useState(Array(10).fill(''));

  const [openingpositionLink, setopeningpositionLink] = useState("");

  const handleTextChange = (index, value) => {
    const updatedTextInputs = [...textInputs];
    updatedTextInputs[index] = value;
    setTextInputs(updatedTextInputs);
  };

    const handleUploadopeningpositions = async (e) => {
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
            openingpositionimage: downloadURL,
            openingpositionType:openingpositionType,
            openingpositionTitle : openingpositionTitle,
            openingpositionDescription: openingpositionDescription, 
            descriptionPoints: textInputs.map((textInput, index) => ({ index, textInput })),
            openingpositionLink:openingpositionLink,
            submittedAt: timestamp,
          };
          await firestore.collection("openingpositionsData").add(submissionData);
    
          setLoadingMessage("success","Data submitted successfully!");
          setTimeout(() => {
            setLoadingState(false)
          }, 5000);
    
         setFile(null);
         setopeningpositionTitle("");
         setopeningpositionDescription("");
         setopeningpositionLink("");
         setTextInputs("");

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
        <h3 className="mb-8 text-center font-bold text-2xl">Opening position</h3>

        <div className="uploaddatadiv">
            <div className="uploadimageinputdiv">
             <label htmlFor="">openingposition Image</label>
             <input type="file" onChange={handleFileChange} />
            </div>

             <div className="uploadimageinputdiv">
             <label htmlFor="">Opening position Type</label>
             <select name="" id="" onChange={(e) => setopeningpositionType(e.target.value)}>
              <option value="">Select Opening Type</option>
              <option value="Job">Job</option>
              <option value="Internship">Internship</option>
             </select>
            </div>
        </div>
        

      <div className="uploaddatadiv">
            <div className="uploadimageinputdiv">
             <label htmlFor="">openingposition Title</label>
             <input type="text" required placeholder='Please Enter openingposition Title....'  value={openingpositionTitle} onChange={(e) => setopeningpositionTitle(e.target.value)}/>
            </div>

            <div className="uploadimageinputdiv">
             <label htmlFor="">openingposition Description</label>
             <textarea type="text" required placeholder='Please Enter openingposition Description....'  value={openingpositionDescription} onChange={(e) => setopeningpositionDescription(e.target.value)}/>
            </div>
      </div>
        
      <div className="uploaddatadiv">
        <div className="uploadimageinputdiv">
        {Array.from({ length: 5 }, (_, index) => (
        <div key={index}>
          <input type="text" required value={textInputs[index]} onChange={(e) => handleTextChange(index, e.target.value)} placeholder="Enter openingposition Description Points"/>
        </div>
      ))}
        </div>
      
        <div className="uploadimageinputdiv">
        {Array.from({ length: 5 }, (_, index) => (
        <div key={index}>
          <input type="text" required value={textInputs[index]} onChange={(e) => handleTextChange(index, e.target.value)} placeholder="Enter openingposition Description Points"/>
        </div>
      ))}
        </div>
      </div>
      
        <button className="uploadimagebtn" onClick={handleUploadopeningpositions} style={{ marginTop: "5px", borderRadius: "5px" }}>Upload</button>
      </div>
    </div>

    <div className="uploadimagecolumn">
      <img className="uploadimageimage" src={openingpositionimage} alt="openingpositionimage"></img>
    </div>

  </div>
  )
}
