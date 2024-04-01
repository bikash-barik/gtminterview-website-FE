import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './login.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useNavigate } from 'react-router-dom';

export default function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
  
    const handleLogin = async (e) => {
      e.preventDefault();
  
      if (!email || !password) {
        setError('Please fill in all fields.');
        return;
      }
  
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        navigate('/upload');
      } catch (error) {
        setError('Invalid email or password. Please try again.'); 
      }
    };

  return (
   <section className='signupsection md:mt-28 md:pt-0 pt-24'>
      <form className="signupdiv">
        <h1 className='signupheading'>Login</h1>
        <input className='signupinput' type="email"  placeholder='Enter Email...' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input className='signupinput' type="password"  placeholder='Enter Password...' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <p className='signuppara'>Forget Password?</p>
        <button className='signupbtn' type='submit' onClick={handleLogin}>Login</button>
        <p className='signuppara text-right text-black'> 
        <Link to="/signup" className='text-blue-600'>Create New Account..</Link></p>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
   </section>

  )
}