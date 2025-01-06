require('dotenv').config();
const mysql =require ('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'reactdb',
    port: 3306
  });

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to MySQL database');
});
// API Endpoint to Insert Data
app.post('/api/tblstudent', (req, res) => {
  const { firstname, lastname, gender, dob, address } = req.body;

  // Validate required fields
  if (!firstname || !lastname || !gender || !dob || !address) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const query = 'INSERT INTO tblstudent (firstname, lastname, gender, dob, address) VALUES (?, ?, ?, ?, ?)';
  const values = [firstname, lastname, gender, dob, address];
  db.query(query, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Database error' });
    }
    res.status(201).json({ message: 'User added successfully', userId: result.insertId });
  });
});

//display
app.get('/api/tblstudent', (req, res) => {
  console.log('Received a GET request to /api/tblstudent');
  const query = 'SELECT * FROM tblstudent';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Database query error:', error.message);
      return res.status(500).json({ message: 'Database error', error: error.message });
    }
    console.log('Query results:', results);
    res.status(200).json(results);
  });
});

// Fetch data for chart
app.get('/api/chart-data', (req, res) => {
  const query = 'SELECT * FROM  tblstudent'; // Example table name, adjust as necessary
  db.query(query, (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      return res.status(500).json({ message: 'Database error', error: err.message });
    }
    res.json(results); // Return the query result as JSON
  });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

