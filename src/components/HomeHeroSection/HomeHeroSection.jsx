import React from 'react'
import { Box, Button,Typography } from '@mui/material';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { FaAngleDoubleRight } from "react-icons/fa";

export default function HomeHeroSection() {
    const [typeEffect] = useTypewriter({
        words: ["TECH IT GROW MORE", "LIVING INOVATION", "GROW WITH NFT'S"],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40
    });

  return (
    <Box className='lay'>

            <div className='homediv'>
            <Box className='containerr'>
                <div className='homecolumn1'>
                <div className='c-lite-1'>
                    <h6 style={{ fontSize: "45px" }}>{typeEffect} <Cursor /></h6>
                    <Typography style={{ marginTop: "26px" }}>Bring both tangible and Intangible business metrics to the table to beat the odds.</Typography>
                    <Button variant="contained">CONTACT US <FaAngleDoubleRight style={{marginLeft:"5px"}}/></Button>
                </div>
                </div>
               
                <div className='homecolumn2'>
                    <img style={{ height: "384px",width:"100%", marginTop: "18px" }} src="https://glowtechmor.com/wp-content/uploads/2022/12/dribbble-animation-1.gif" alt='logo' />
                </div>
            </Box>
            </div>
    </Box>  
  )
}
