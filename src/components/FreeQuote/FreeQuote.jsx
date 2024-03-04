import React from 'react';
import { Button} from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './freequote.css';

export default function FreeQuote() {
  return (
    <div className='banner-image'>
    <div className='b-i-s'>
        <h3>LET'S TALK ABOUT WHAT WE<br />
            CAN BUILD TOGETHER</h3>
        <Button className='btn-1' variant="contained">Get Free Quote<ChevronRightIcon /></Button>
    </div>
</div>
  )
}
