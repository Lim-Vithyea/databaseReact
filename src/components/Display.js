import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Display() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/users');
      console.log('Fetched users:', response.data); // Log the response data
      setUsers(response.data); // Set the users data in the state
    } catch (error) {
      setError('Failed to fetch users');
      console.error('Error fetching users:', error); // Log any errors
    }
  };
  

  return (
    <div>
      <h2>User List</h2>
      {error && <p>{error}</p>}
      <ul>
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </ul>
    </div>
  );
}

export default Display;
