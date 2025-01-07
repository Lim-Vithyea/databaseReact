import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import StudentList from './components/StudentList';
import UserForm from './components/UserForm';
import Chart from './components/Chart';

function App() {
  return (
    <Router>
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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
