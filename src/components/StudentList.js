import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../components/compo.css";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/tblstudent')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-center font-bold text-2xl text-blue-500 p-5">Student List</h1>
      <div className="flex justify-center">
        <table className="w-[80%] text-sm text-gray-700 border-collapse bg-white rounded-lg shadow-md">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr className="text-center">
              <th className="py-3 px-4 border-b">ID</th>
              <th className="py-3 px-4 border-b">First Name</th>
              <th className="py-3 px-4 border-b">Last Name</th>
              <th className="py-3 px-4 border-b">Gender</th>
              <th className="py-3 px-4 border-b">Date of Birth</th>
              <th className="py-3 px-4 border-b">Address</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id} className="text-center border-b hover:bg-gray-50">
                <td className="py-3 px-4">{student.id}</td>
                <td className="py-3 px-4">{student.firstname}</td>
                <td className="py-3 px-4">{student.lastname}</td>
                <td className="py-3 px-4">{student.gender}</td>
                <td className="py-3 px-4">{student.dob}</td>
                <td className="py-3 px-4">{student.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
