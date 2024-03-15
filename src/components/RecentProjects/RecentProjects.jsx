import React,{useState} from 'react'
import './recentprojects.css';

import gmtimg from '../../assets/images/gtm-1536x692.png';
import apnaapp from '../../assets/images/aa-1536x729.png';
import techmor3d from '../../assets/images/3dtechmor.png';
import aiwriter from '../../assets/images/ai-writing-generator.jpg';
import dwell from '../../assets/images/nfts-development-1.jpg';
import silentlearn from '../../assets/images/silentlearn.png';
import emailhub from '../../assets/images/Email-1536x1024.jpg';
import gippyservice from '../../assets/images/gippyservice.png';
import jobimg from "../../assets/images/business-development-manager-job-description-6000x4000-20201126-2048x2048.jpeg";

const RecentProjectData = [
    {
      imgSrc: apnaapp,
      heading: 'AppnaApp',
      para: 'We have always been in the race to identify innovation before it reaches us from elsewhere. Our engagement with blockchain technology started years ago and today we have successfully helped our customers to implement mass scale blockchain-powered business ecosystems for their end consumers.',
      btnText: 'View Full Details',
    },
    {
      imgSrc: gmtimg,
      heading: 'GlowTechmor',
      para: 'We have always been in the race to identify innovation before it reaches us from elsewhere. Our engagement with blockchain technology started years ago and today we have successfully helped our customers to implement mass scale blockchain-powered business ecosystems for their end consumers.',
      btnText: 'View Full Details',
    },
    {
      imgSrc: techmor3d,
      heading: '3D Techmor',
      para: 'We have always been in the race to identify innovation before it reaches us from elsewhere. Our engagement with blockchain technology started years ago and today we have successfully helped our customers to implement mass scale blockchain-powered business ecosystems for their end consumers.',
      btnText: 'View Full Details',
    },
    {
      imgSrc: aiwriter,
      heading: 'AI Writor',
      para: 'We have always been in the race to identify innovation before it reaches us from elsewhere. Our engagement with blockchain technology started years ago and today we have successfully helped our customers to implement mass scale blockchain-powered business ecosystems for their end consumers.',
      btnText: 'View Full Details',
    },
    {
      imgSrc: dwell,
      heading: 'DWELL',
      para: 'We have always been in the race to identify innovation before it reaches us from elsewhere. Our engagement with blockchain technology started years ago and today we have successfully helped our customers to implement mass scale blockchain-powered business ecosystems for their end consumers.',
      btnText: 'View Full Details',
    },
    {
      imgSrc: silentlearn,
      heading: 'SilentLearn',
      para: 'We have always been in the race to identify innovation before it reaches us from elsewhere. Our engagement with blockchain technology started years ago and today we have successfully helped our customers to implement mass scale blockchain-powered business ecosystems for their end consumers.',
      btnText: 'View Full Details',
    },
    {
      imgSrc: emailhub,
      heading: 'EMAIL-HUB',
      para: 'We have always been in the race to identify innovation before it reaches us from elsewhere. Our engagement with blockchain technology started years ago and today we have successfully helped our customers to implement mass scale blockchain-powered business ecosystems for their end consumers.',
      btnText: 'View Full Details',
    },
    {
      imgSrc: gippyservice,
      heading: 'GIPPY SERVICE',
      para: 'We have always been in the race to identify innovation before it reaches us from elsewhere. Our engagement with blockchain technology started years ago and today we have successfully helped our customers to implement mass scale blockchain-powered business ecosystems for their end consumers.',
      btnText: 'View Full Details',
    },
  
  ];

export default function RecentProjects() {
    const [data, setData] = useState(RecentProjectData);
    const [isAISelected, setIsAISelected] = useState(true);
    const [isBlockChainSelected, setBlockChainSelected] = useState(false);
    const [isProgrammingSelected, setProgrammingSelected] = useState(false);

    const handleAISectionClick = () => {
      setData(RecentProjectData);
      setIsAISelected(!isAISelected);
      setBlockChainSelected(false);
      setProgrammingSelected(false);
    };

    const handleBlockChainSectionClick = () => {
        setData(RecentProjectData);
        setIsAISelected(false);
        setBlockChainSelected(!isBlockChainSelected);
        setProgrammingSelected(false);
    };
      
    const handleProgrammingSectionClick = () => {
        setData(RecentProjectData);
        setIsAISelected(false);
        setBlockChainSelected(false);
        setProgrammingSelected(!isProgrammingSelected);
    };

    const chunkedData = [];
    for (let i = 0; i < data.length; i += 4) {
      chunkedData.push(data.slice(i, i + 4));
    }
  
  return (
    <section className="recentprojectsection">
      
      <div className='recentprojectheadingdiv'>
         <div className="rpheading">
            <h3>OUR RECENT PROJECTS</h3>
         </div> 
      </div>
      
      <div className="careerrow1">

        <div className={` ${isAISelected ? 'careercolumn1 ' : 'careercolumn2'}`}  onClick={handleAISectionClick}>
          <p className="careercolumnpara">AI</p>
        </div>

        <div  className={` ${isBlockChainSelected ? 'careercolumn1 ' : 'careercolumn2'}`} onClick={handleBlockChainSectionClick}>
          <p className="careercolumnpara">BLockchain</p>
        </div>

        <div  className={` ${isProgrammingSelected ? 'careercolumn1 ' : 'careercolumn2'}`} onClick={handleProgrammingSectionClick}>
          <p className="careercolumnpara">Programming & Tech</p>
        </div>
        
      </div>

      <div className="recentprojectrow2">
      {
        chunkedData.map((row, rowIndex) => (
        <div className="recentprojectcardrow" key={rowIndex}>
          {row.map((item, index) => (
            <div className="project-card" key={index}>
              <img className="project-image" src={item.imgSrc} alt="Project" />
              <div className="project-details">
                <p className="project-title">{item.heading}</p>
              </div>
            </div>
          ))}
        </div>
      ))
      }
      </div>
    </section>  
  )
}
