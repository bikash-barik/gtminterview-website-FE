import React,{useState} from 'react';
import './verifycertificate.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import Certificate from '../../components/Certificate/Certificate';

export default function VerifyCertificate() {
  const [employeeId, setemployeeId] = useState("");
  const [certificateData, setCertificateData] = useState(null);

  const getCertificate = async (e) => {
    e.preventDefault();
    try {
      const firestore = firebase.firestore();
      const certificateRef = firestore.collection('EmployeeData');
      const querySnapshot = await certificateRef.where('employeeid', '==', employeeId).get();

      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          setCertificateData(doc.data());
          console.log(doc.data());
        });
      } else {
        setCertificateData(null);
        console.log('No certificate found with the provided employee ID');
      }
    } catch (error) {
      console.error('Error fetching certificate data:', error);
    }
  };

  return (
    <>
    {
      certificateData ? 
      <Certificate data={certificateData}/>
      :
      <section className='verifycertificatesection'>
      <div className="verifycertificatediv">
          <h3>Verify Your Certificate</h3>

          <div className="verifycertificateinputdiv">
              <label htmlFor="cartificateid">Enter Valid Certificate ID</label>
              <input id='cartificateid' type="text" value={employeeId} onChange={(e)=>{setemployeeId(e.target.value)}} placeholder='Enter Certificate ID'/>
          </div>

          <button onClick={getCertificate}>VERIFY</button>
      </div>
     </section>

    }

    </>
  )
}
