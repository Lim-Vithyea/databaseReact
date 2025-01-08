import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate();

  const handlelogin = () => {
    navigate('/dashboard');
  }
  return (
    <div className='flex justify-center pt-[100px]'>
      <div className='flex flex-col w-[400px] h-[400px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] border-none rounded-xl'>
        <h1 className='text-center p-5 font-bold text-xl text-blue-500'>Login</h1>
        <div className='flex justify-center pt-[20px]'>
        <form className='flex-col'>
            <div className='p-2'>
            <label for="username">Username</label>
            <input name='username' type='text' placeholder='Enter your username'/>
            </div>
            <div className='p-2'>
            <label for="password">Password</label>
            <input name='password' placeholder='Enter your password' type="password"/>
            </div>
            <div className="pt-5 text-center" >
            <button type="submit" onClick={handlelogin} className="bg-blue-600 rounded-[5px] w-[300px] h-[50px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] border-none">
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
