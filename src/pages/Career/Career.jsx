import React, { useState,useEffect } from "react";
import "./career.css";
import { FaChevronDown } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useParams } from "react-router-dom";
import ApplicationForm from "../../components/ApplicationForm/ApplicationForm";

export default function Career() {
  const {opening} = useParams();

    const [openIndexes, setOpenIndexes] = useState([]);
    const [isInternshipSelected, setIsInternshipSelected] = useState(false);
  

  const toggleAccordion = (index) => {
    const updatedIndexes = [...openIndexes];
    const indexPosition = updatedIndexes.indexOf(index);

    if (indexPosition !== -1) {
      updatedIndexes.splice(indexPosition, 1);
    } else {
      updatedIndexes.push(index);
    }

    setOpenIndexes(updatedIndexes);
  };

const [jobOpeningsData,setjobOpeningsData] = useState([]);
const [internshipOpeningsData,setinternshipOpeningsData] = useState([]);
const [openingPositionsData, setopeningPositionsData] = useState(jobOpeningsData);


useEffect(() => {
  const firestore = firebase.firestore();
  const contentDataRef = firestore.collection("openingpositionsData");
  const unsubscribe = contentDataRef.onSnapshot((snapshot) => {
    const newContentData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("Opening Position Data",newContentData);

    const filteredJobData = newContentData.filter(data => data.openingpositionType === "Job");
    setjobOpeningsData(filteredJobData);

    const filteredInternshipData = newContentData.filter(data => data.openingpositionType === "Internship");
    setinternshipOpeningsData(filteredInternshipData);

    if(opening === "jobs"){
      setopeningPositionsData(filteredJobData)
    }
    
    if(opening === "internship"){
      setopeningPositionsData(filteredInternshipData);
      setIsInternshipSelected(true);
    }
  });
  return () => unsubscribe();
}, []);

const handleSectionClick = () => {
  setopeningPositionsData(isInternshipSelected ? jobOpeningsData : internshipOpeningsData)
  setIsInternshipSelected(!isInternshipSelected);
};

const[model,setmodel]=useState(false);

const openModel = ()=>{
  setmodel(!model);
}

  return (
    <>
     <div className={model?"model open":"model"}>
      <ApplicationForm openModel={openModel}/>
      <button className='modelcloseButton' onClick={()=>{setmodel(false)}}><IoMdClose/></button>
    </div>
    
    <section className="careersection">
      <div className="careerrow1">

        <div className={` ${isInternshipSelected ? 'careercolumn2 ' : 'careercolumn1'}`}  onClick={handleSectionClick}>
          <p className="careercolumnpara">Open Jobs</p>
        </div>

        <div className={` ${isInternshipSelected ? 'careercolumn1 ' : 'careercolumn2'}`} onClick={handleSectionClick}>
          <p className="careercolumnpara">Internship</p>
        </div>

      </div>

      <div className="careerrow2">
        { openingPositionsData.length > 0 ?
        openingPositionsData.map((item, index) => (
          <div className="careerrow2innerrow" data-aos="fade-up">
            <div className="careerrow2innerrow1">
              <div className="careerinnercolumn1">
                <img className="careerimg" src={item.openingpositionimage} alt="jobimage" />
              </div>

              <div className="careerinnercolumn2">
                <h2 className="careerheading">{item.openingpositionTitle}</h2>
                <p>{item.openingpositionDescription}</p>
              </div>

              <div className="careerinnercolumn3">
                <button className="careerbtn" onClick={openModel}>Apply Now</button>
              </div>
            </div>

             <div className={`careerrow2innerrow2 carerdescription ${openIndexes.includes(index) ? "active" : ""}`}
               id={`accordion${index}`}
              onClick={() => toggleAccordion(index)}
            >
              <p className="accordion-title" >
                <span className="accordianspan">
                {openIndexes.includes(index) ? <FaMinus/> : <FaChevronDown/>}
                </span>
                Description
              </p>
              <div className="accordion-content">
                <div className="description-content">
                  <ul className="descriptionul">
                    <li>❱ Degree in marketing, business administration, or similar.</li>
                    <li>❱ Extensive sales experience.</li>
                    <li>❱ Intuitive and insightful, particularly regarding human behavior.</li>
                    <li>❱ Ability to generate revenue by identifying pain points and suggesting suitable products or services.</li>
                    <li>❱ Professional yet affable disposition.</li>
                    <li>❱ Neat, well-groomed appearance.</li>
                    <li>❱ Great networking skills.</li>
                    <li>❱ Excellent written and verbal communication.</li>
                    <li>❱ Resourceful, with outstanding research skills.</li>
                    <li>❱ Emboldened by challenges.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))
        :
        <p className="elsepartpara">No Openings as of now</p>
      }
      </div>
    </section>
    </>
    
  );
}
