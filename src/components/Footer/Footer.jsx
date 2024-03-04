import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import sky from '../../assets/images/gtm-1.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import sky1 from '../../assets/images/gtm17.png';
import './footer.css';

const Footer = () => {
    return (
        <>
        <div className='footerdiv'> 
        <Container className="box-2">
                <Grid container >
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <img style={{ width: "170px", marginTop: "10px" }} src={sky} alt='logo' />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Typography style={{fontSize: "14px", color: "#fff",display:"flex",gap:"10px",marginTop:"20px" }}> < LocationOnIcon />WeWork Prestige Cube Koramangala, Site No. 26, Laskar Hosur Road, Adugodi, Bangalore, KA 560029</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Typography className='g-f'><EmailIcon /> info@glowtechmor.com </Typography>
                        <Typography className='g-f'><PhoneIcon />+91 7978332292</Typography>
                    </Grid>
                    <Grid className='icon-section' item xs={12} sm={6} md={4} lg={3}>
                        <FacebookIcon className='icon' />
                        <TwitterIcon className='icon' />
                        <LinkedInIcon className='icon' />
                        <InstagramIcon className='icon' />
                        <EmailIcon className='icon' />
                    </Grid>
                </Grid>
                  <hr style={{border:"1px solid #fff"}}/>
                 <Box className='second-footer'>
                    <div className='footer-right'>
                        <Typography style={{color:"#fff"}}>About Glowtechmor
                            Privacy Policy
                            Terms & Condition
                            Blog
                        </Typography>
                        <Typography style={{color:"#fff",marginTop:"12px"}}>© Glowtechmor. All rights reserved.</Typography>
                    </div>
                    <div className='footer-left'>
                        <Typography style={{color:"#fff"}}>For inquiries :info@glowtechmor.com</Typography>
                        <img style={{width:"100%"}}src={sky1} alt='sky1' />
                    </div>
                </Box> 
            </Container>
        </div>
            
        </>
    )
}

export default Footer
