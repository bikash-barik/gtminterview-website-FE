import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseConfig from '../../firebaseConfig'; 
import { useNavigate } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

export default function SignUp () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successDialog, setSuccessDialog] = useState(false);
  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      setSuccessDialog(true);
      navigate('/login');
    } catch (error) {
      setError(error.message);
    }
  };
  return (
   <section className='signupsection'>
      <div className="signupdiv">
        <h1 className='signupheading'>Register</h1>
        <input className='signupinput' type="email"  placeholder='Enter Email...' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input className='signupinput' type="password"  placeholder='Enter Password...' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button className='signupbtn' onClick={handleRegistration}>SignUp</button>
        <p className='signuppara text-right text-black'> 
        <Link to="/login">Already have an account? Login</Link></p>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {successDialog && (
          <div style={{ border: '1px solid green', padding: '10px', marginTop: '10px' }}>
            <p>Registration successful! You can now proceed to the login screen.</p>
          </div>
        )}
      </div>
   </section>

  )
}