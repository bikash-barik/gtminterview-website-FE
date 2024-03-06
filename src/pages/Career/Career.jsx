import React, { useState } from "react";
import "./career.css";
import jobimg from "../../assets/images/business-development-manager-job-description-6000x4000-20201126-2048x2048.jpeg";
import { FaChevronDown } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const data = [
  {
    jobimage: jobimg,
    jobtitle: "Business Development Manager",
    jobdescription: "Looking for Business Development Manager",
  },
  {
    jobimage: jobimg,
    jobtitle: "User Interface (UI) Designer",
    jobdescription: "Looking for User Interface (UI) Designer",
  },
  {
    jobimage: jobimg,
    jobtitle: "React Native developer",
    jobdescription: "Looking for React Native developer",
  },
  {
    jobimage: jobimg,
    jobtitle: "Flutter Developer",
    jobdescription: "Looking for Flutter Developer",
  },
  {
    jobimage: jobimg,
    jobtitle: "MERN(Mongodb Express ReactJs NodeJs ) stack developers",
    jobdescription:
      "Looking for MERN(Mongodb Express ReactJs NodeJs ) stack developers",
  },
];



export default function Career() {
    const [openIndexes, setOpenIndexes] = useState([]);
    
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

  return (
    <section className="careersection">
      <div className="careerrow1">
        <div className="careercolumn1">
          <p className="careercolumnpara">Open Jobs</p>
        </div>

        <div className="careercolumn2">
          <p className="careercolumnpara">Internship</p>
        </div>
      </div>

      <div className="careerrow2">
        {data.map((item, index) => (
          <div className="careerrow2innerrow">
            <div className="careerrow2innerrow1">
              <div className="careerinnercolumn1">
                <img className="careerimg" src={item.jobimage} alt="jobimage" />
              </div>

              <div className="careerinnercolumn2">
                <h2 className="careerheading">{item.jobtitle}</h2>
                <p>{item.jobdescription}</p>
              </div>

              <div className="careerinnercolumn3">
                <button className="careerbtn">Apply Now</button>
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
        ))}
      </div>
    </section>
  );
}
