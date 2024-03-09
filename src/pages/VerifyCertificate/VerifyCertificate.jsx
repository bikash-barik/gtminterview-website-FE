import React from 'react';
import './verifycertificate.css';

export default function VerifyCertificate() {
  return (
    <section className='verifycertificatesection'>
        <div className="verifycertificatediv">
            <h3>Verify Your Certificate</h3>

            <div className="verifycertificateinputdiv">
                <label htmlFor="cartificateid">Enter Valid Certificate ID</label>
                <input id='cartificateid' type="text" placeholder='Enter Certificate ID'/>
            </div>

            <button>VERIFY</button>
        </div>
    </section>
  )
}
