import React from 'react'
import GetInTouch from '../../components/GetInTouch/GetInTouch';
import FreeQuote from '../../components/FreeQuote/FreeQuote';
import CoreValues from '../../components/CoreValues/CoreValues';
import WorkProcess from '../../components/WorkProcess/WorkProcess';
import HomeHeroSection from '../../components/HomeHeroSection/HomeHeroSection';
import OnDemandService from '../../components/OnDemandService.jsx/OnDemandService';
import WhoAreWe from '../../components/WhoAreWe/WhoAreWe';
import Serve from '../../components/Serve/Serve';

const Home = () => {    
    return (
        <>
            <HomeHeroSection/>
            <OnDemandService/>
            <WhoAreWe/>
            <WorkProcess/>
            <CoreValues/>
            <FreeQuote/>
            <Serve/>
            <GetInTouch/>
        </>                  
    )
}

export default Home;
