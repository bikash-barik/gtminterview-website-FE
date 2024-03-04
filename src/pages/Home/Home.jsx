import React from 'react'
import GetInTouch from '../../components/GetInTouch/GetInTouch';
import FreeQuote from '../../components/FreeQuote/FreeQuote';
import CoreValues from '../../components/CoreValues/CoreValues';
import WorkProcess from '../../components/WorkProcess/WorkProcess';
import HomeHeroSection from '../../components/HomeHeroSection/HomeHeroSection';
import OnDemandService from '../../components/OnDemandService.jsx/OnDemandService';

const Home = () => {    
    return (
        <>
            <HomeHeroSection/>
            {/* <OnDemandService/> */}
            <WorkProcess/>
            <CoreValues/>
            <FreeQuote/>
            <GetInTouch/>
        </>                  
    )
}

export default Home;
