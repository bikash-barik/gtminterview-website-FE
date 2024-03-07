import React from 'react';
import logo5 from '../../assets/images/gtm6.png';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { Button } from '@mui/material'
export default function WhoAreWe() {
  return (
    <div className='whowearediv'>
           <div className='container-2'>
                <div className='c-left' data-aos="fade-up">
                    <h3>Who we are</h3>
                    <h2>Holistic & Innovative Solutions For Your Business Needs​</h2>
                    <p>We offer integrated consulting and technology implementation services to businesses that want to redefine their customer success stories through digital transformation.</p>

                    <p>We have always been in the race to identify innovation before it reaches us from elsewhere. Our engagement with blockchain technology started years ago and today we have successfully helped our customers to implement mass scale blockchain-powered business ecosystems for their end consumers.</p>

                    <p>Our expertise in blockchain technologies include solutions such as Smart Business Contracts, Automated Lottery Systems, Customer Loyalty & Rewards System, Real Estate Contract Management Systems, and much more.</p>
                    <Button className='btn' variant="contained">Get Free Quote<ChevronRightIcon /></Button>
                </div>
                <div className='c-right' data-aos="fade-up">
                    <img className='c-right-img' src={logo5} alt='logo5' />
                </div>
          </div>
    </div>
            
  )
}
