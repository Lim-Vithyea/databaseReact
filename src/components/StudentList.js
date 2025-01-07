import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../components/compo.css";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/api/tblstudent')
      .then(response => {
        setStudents(response.data);})
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);
  return (
    <div className=''>

     <h1 className='text-center p-5 font-bold text-2xl text-blue-500'>StudentList</h1>
        <div className='flex justify-center'>
      <table className='w-[90%] text-sm text-left rtl:text-right text-black mb-5'>
        <thead className='text-xs text-blue-500 uppercase bg-gray-50'>
          <tr className='text-center'>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.firstname}</td>
              <td>{student.lastname}</td>
              <td>{student.gender}</td>
              <td>{student.dob}</td>
              <td>{student.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default StudentList;
