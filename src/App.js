import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import StudentList from './components/StudentList';
import UserForm from './components/UserForm';
import Chart from './components/Chart';
import Setting from './components/Setting';
import Login from './components/Login';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const handleLogin = () => {
    setIsAuthenticated(true);
  };
  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  return (
    <Router>
      {isAuthenticated ? (
      <div className="h-screen flex">
      <div className="w-[20%]">
        <Sidebar />
      </div>
      <div className="flex-grow p-4 ">
        <Routes>
          <Route path="/dashboard" element={
            <div className=''>
              <div className='bg-white'>
                <h1 className='text-3xl font-bold text-blue-500 pl-5 '>Dashboard</h1>
              </div>
              <div className='pl-10 pr-10 pb-10'>
                <Chart />
                </div>
                <StudentList />
            </div>
            } />
          <Route path="/user-form" element={<UserForm />} />
          <Route path="/setting" element={<Setting handlelogout={handleLogout}/>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div> ): ( 
      <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>)} 
    </Router>
    
  );
}

export default App;
