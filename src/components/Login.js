import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react';
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [databaseData, setDatabaseData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/roleuser')
      .then(response => {
        setDatabaseData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);
  const handleLogin = (e) => {
    console.log('User:', user);
    console.log('Password:', password);
    const foundUser = databaseData.find((dbUser) => dbUser.username === user && dbUser.password === password );
    //login logic
    if (foundUser) {
      navigate('/dashboard');
      console.log('Login successful!');
    } else {
      e.preventDefault();
      console.log('Invalid username or password');
      alert('Login failed. Please try again.');
    }
  };
  return (
    <div className='flex justify-center p-[150px]'>
      <div className='flex flex-col w-[400px] h-[400px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] border-none rounded-xl'>
        <h1 className='text-center p-5 font-bold text-xl text-blue-500'>Login</h1>
        <div className='flex justify-center pt-[20px]'>
        <form className='flex-col' >
            <div className='p-2'>
            <label for="username">Username</label>
            <input 
            name='username' 
            value={user}
            onChange={(e)=>setUser(e.target.value)} 
            type='text' 
            placeholder='Enter your username'/>
            </div>
            <div className='p-2'>
            <label for="password">Password</label>
            <input 
            name='password' 
            value={password}
            onChange={(e)=>setPassword(e.target.value)} 
            placeholder='Enter your password' 
            type="password"/>
            </div>
            <div className="pt-5 text-center" >
            <button type="submit" onClick={handleLogin} className="bg-blue-600 rounded-[5px] w-[300px] h-[50px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] border-none">
                <span className="font-bold text-white">Login</span>
            </button>
        </div>
        </form>
        </div>
      </div>
    </div>
  )
}
export default Login
