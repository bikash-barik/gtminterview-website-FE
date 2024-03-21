import React,{useState} from 'react'
import firebase1 from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

export default function UploadServices({ setLoadingState,setLoadingMessage }) {
 
  const [file, setFile] = useState(null);
  const [file1, setFile1] = useState(null);

  const [serviceName, setServiceName] = useState('');
  const [description1, setDescription1] = useState('');
  const [description2, setDescription2] = useState('');


  const [images, setImages] = useState([]);
  const [textInputs, setTextInputs] = useState([]);

  const handleServicesFileChange = (e) => {
    const files = e.target.files;
    const updatedImages = [...images];
    const updatedTextInputs = [...textInputs];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onloadend = () => {
        updatedImages.push(reader.result);
        updatedTextInputs.push("");
        setImages([...updatedImages]);
        setTextInputs([...updatedTextInputs]);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleTextChange = (index, value) => {
    const updatedTextInputs = [...textInputs];
    updatedTextInputs[index] = value;
    setTextInputs(updatedTextInputs);
  };

    const handleUploadServices = async (e) => {
        e.preventDefault();
        try {
          if (!file || !file1) {
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

          const storageRef1 = storage.ref(`images/${file1.name}`);
          const uploadTask1 = storageRef1.put(file1);
      
          const snapshot1 = await uploadTask1;
          const downloadURL1 = await snapshot1.ref.getDownloadURL();
    
          const timestamp = firebase1.firestore.FieldValue.serverTimestamp();
          const submissionData = {
            servicemegamenuimage: downloadURL,
            serviceimage:downloadURL1,
            servicename : serviceName,
            description1: description1, 
            description2: description2,
            techUsed: images.map((image, index) => ({
                imageUrl: image,
                textInput: textInputs[index],
            })),
            submittedAt: timestamp,
          };
          await firestore.collection("ServicesData").add(submissionData);
    
          setLoadingMessage("success","Data submitted successfully!");
          setTimeout(() => {
            setLoadingState(false)
          }, 5000);
    
         setFile(null);
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

      const handleFileChange1 = (e) => {
        if (e.target.files[0]) {
          setFile1(e.target.files[0]);
        }
      };

  return (
    <div className="uploadimagerow">

    <div className="uploadimagecolumn">
      <div className="uploadimagecolumninnerdiv">
        <h3 className="mb-8 text-center font-bold text-2xl">Services </h3>

        <div className="uploadimageinputdiv">
             <label htmlFor="">Service Mega Menu Image</label>
             <input type="file" multiple onChange={handleFileChange} />
        </div>

        <div className="uploadimageinputdiv">
             <label htmlFor="">Service Name</label>
             <input type="text" placeholder='Please Enter Service Name....'  value={serviceName} onChange={(e) => setServiceName(e.target.value)}/>
        </div>

        <div className="uploadimageinputdiv">
             <label htmlFor="">Service Description Paragraph 1</label>
             <textarea type="text" placeholder='Please Enter Service Description....'  value={description1} onChange={(e) => setDescription1(e.target.value)}/>
        </div>

        <div className="uploadimageinputdiv">
             <label htmlFor="">Service Description Paragraph 2</label>
             <textarea type="text" placeholder='Please Enter Service Description....'  value={description2} onChange={(e) => setDescription2(e.target.value)}/>
        </div>

        <div className="uploadimageinputdiv">
             <label htmlFor="">Tech Used</label>
             <input type="file" multiple onChange={handleServicesFileChange} />
        </div>

        {images.map((image, index) => (
        <div key={index} className='mappedimagesdiv'>
          <img className='mappedimages' src={image} alt={`Image ${index}`} />
          <input
            type="text"
            value={textInputs[index]}
            onChange={(e) => handleTextChange(index, e.target.value)}
            placeholder="Enter some text"
          />
        </div>
      ))}

        <div className="uploadimageinputdiv">
             <label htmlFor="">Service Image</label>
             <input type="file" multiple onChange={handleFileChange1} />
        </div>


        <button className="uploadimagebtn" onClick={handleUploadServices} style={{ marginTop: "5px", borderRadius: "5px" }}>Upload</button>
      </div>
    </div>

    <div className="uploadimagecolumn">
      <img className="uploadimageimage" src="/" alt="serviceimage"></img>
    </div>

  </div>
  )
}
