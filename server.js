const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    // insert MySQL password
    password: 'ill1nois',
    database: 'election'
  },
  console.log('connected to the election database')
);




// test query
db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});

// routes
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World'
  });
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});