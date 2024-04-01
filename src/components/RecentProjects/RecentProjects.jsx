import React,{useState,useEffect} from 'react'
import './recentprojects.css';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import gmtimg from '../../assets/images/gtm-1536x692.png';
import apnaapp from '../../assets/images/aa-1536x729.png';
import techmor3d from '../../assets/images/3dtechmor.png';
import aiwriter from '../../assets/images/ai-writing-generator.jpg';
import dwell from '../../assets/images/nfts-development-1.jpg';
import silentlearn from '../../assets/images/silentlearn.png';
import emailhub from '../../assets/images/Email-1536x1024.jpg';
import gippyservice from '../../assets/images/gippyservice.png';
import gardnershub from '../../assets/images/gardnershub.png';
import iskconpurimain from '../../assets/images/iskconpurimain.png';
import iskconpuriguesthouse from '../../assets/images/iskconpuriguesthouse.png';
import iskconpurifood from '../../assets/images/iskconpurifood.png';
import gosats from '../../assets/images/gosats.png';
import centurionmetaverse from '../../assets/images/centurionmetaverse.png';
import gttech from '../../assets/images/gt-tech.png';
import transparenttech from '../../assets/images/transparent-tech.png';
import writeup from '../../assets/images/writeup.png';
import tanumanasa from '../../assets/images/tanumanasa.png';
// import jobimg from "../../assets/images/business-development-manager-job-description-6000x4000-20201126-2048x2048.jpeg";

const RecentAIProjectData = [
    {
      imgSrc: aiwriter,
      heading: 'AI Writor',
      link : 'https://writeup.ai/',
      btnText: 'View Full Details',
    },
    {
      imgSrc: writeup,
      heading: 'Write Up',
      link : 'https://writeup.ai/',
      btnText: 'View Full Details',
    },
    {
      imgSrc: tanumanasa,
      heading: 'Tanumanasa',
      link: 'https://tanumanasa.com/',
      btnText: 'View Full Details',
    },
  
  ];

  const RecentBlockChainProjectData = [
    {
      imgSrc: apnaapp,
      heading: 'AppnaApp',
      link: 'http://appnaapp.com/',
      btnText: 'View Full Details',
    },
    {
      imgSrc: gmtimg,
      heading: 'GlowTechmor',
      link: 'https://glowtechmor.com/',
      btnText: 'View Full Details',
    },
    {
      imgSrc: techmor3d,
      heading: '3D Techmor',
      link: 'https://gaming-35085.web.app/',
      btnText: 'View Full Details',
    },
    {
      imgSrc: dwell,
      heading: 'DWELL',
      link: 'https://opensea.io/',
      btnText: 'View Full Details',
    },
    {
      imgSrc: silentlearn,
      heading: 'SilentLearn',
      link: 'https://courses.techmentorcore.com/',
      btnText: 'View Full Details',
    },
    {
      imgSrc: emailhub,
      heading: 'EMAIL-HUB',
      link: 'https://email-sand-1-2-front-end.vercel.app/',
      btnText: 'View Full Details',
    },
    {
      imgSrc: gippyservice,
      heading: 'GIPPY SERVICE',
      link: 'https://gippyservice.com/',
      btnText: 'View Full Details',
    },
    {
      imgSrc: gardnershub,
      heading: 'GARDNERS-HUB',
      link: 'https://thegardenershub.com/',
      btnText: 'View Full Details',
    },
    {
      imgSrc: iskconpurimain,
      heading: 'ISKCON PURI',
      link: 'https://www.iskconpuri.com/',
      btnText: 'View Full Details',
    },
    {
      imgSrc: iskconpuriguesthouse,
      heading: 'ISKCON PURI GUEST-HOUSE',
      link: 'https://www.iskconpuri.in/',
      btnText: 'View Full Details',
    },
    {
      imgSrc: iskconpurifood,
      heading: 'ISKCON PURI FOOD FOR LIFE',
      link: 'https://iskconpuri.org/',
      btnText: 'View Full Details',
    },
    {
      imgSrc: gippyservice,
      heading: 'EXRAMA',
      link: 'https://exrama.com/',
      btnText: 'View Full Details',
    },
    {
      imgSrc: gosats,
      heading: 'GOSATS',
      link: 'https://gosats.io/',
      btnText: 'View Full Details',
    },
    {
      imgSrc: gosats,
      heading: 'Vichayan',
      link: 'https://gosats.io/',
      btnText: 'View Full Details',
    },
    {
      imgSrc: gosats,
      heading: 'The Point0',
      link: 'https://gosats.io/',
      btnText: 'View Full Details',
    },
    {
      imgSrc: centurionmetaverse,
      heading: 'CENTURION METAVERSE',
      link: 'https://cutm-metaverse.vercel.app/',
      btnText: 'View Full Details',
    },
    {
      imgSrc: gttech,
      heading: 'GT TECH',
      link: 'https://gaming-35085.web.app/',
      btnText: 'View Full Details',
    },
    {
      imgSrc: transparenttech,
      heading: 'TRANSPARENT TECH',
      link: 'https://devtransparenttech.web.app/',
      btnText: 'View Full Details',
    },
  
  ];



export default function RecentProjects() {
    const [data, setData] = useState(RecentAIProjectData);
    const [AIData, setAIData] = useState({});
    const [ProgrammingData, setProgrammingData] = useState({});
    const [BlockChainData, setBlockChainData] = useState({});
    const [isAISelected, setIsAISelected] = useState(true);
    const [isBlockChainSelected, setBlockChainSelected] = useState(false);
    const [isProgrammingSelected, setProgrammingSelected] = useState(false);

    useEffect(() => {
      const firestore = firebase.firestore();
      const contentDataRef = firestore.collection("RecentProjectData");
      const unsubscribe = contentDataRef.onSnapshot((snapshot) => {
        const newContentData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Recent Projects Data",newContentData);
    
        const filteredAIData = newContentData.filter(data => data.recentprojectCategory === "AI");
        setData(filteredAIData);
        setAIData(filteredAIData);
    
        const filteredProgrammingData = newContentData.filter(data => data.recentprojectCategory === "Programming");
        setProgrammingData(filteredProgrammingData);

        const filteredBlockChainData = newContentData.filter(data => data.recentprojectCategory === "BlockChain");
        setBlockChainData(filteredBlockChainData);
    
      });
      return () => unsubscribe();
    }, []);
    const handleAISectionClick = () => {
      setData(AIData);
      setIsAISelected(!isAISelected);
      setBlockChainSelected(false);
      setProgrammingSelected(false);
    };

    const handleBlockChainSectionClick = () => {
        setData(BlockChainData);
        setIsAISelected(false);
        setBlockChainSelected(!isBlockChainSelected);
        setProgrammingSelected(false);
    };
      
    const handleProgrammingSectionClick = () => {
        setData(ProgrammingData);
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
          <p className="careercolumnpara">Programming</p>
        </div>
        
      </div>


      <div className="recentprojectrow2">
        <div className="recentprojectcardrow">
        {
           data.map((item, index) => (
            <a href={item.link} className="project-card" key={index}>
              <img className="project-image" src={item.imgSrc} alt="Project" />
              <div className="project-details">
                <p className="project-title">{item.heading}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>  
  )
}
