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



const queryAllCandidtates = `SELECT * FROM candidates`;
const queryOneCandidate = `SELECT * FROM candidates WHERE id = 1`;
const queryDeleteCandidate = `DELETE FROM candidates WHERE id = ?`;
const queryCreateCandidate = `DELETE FROM candidates WHERE id = ?`;

// // GET all candidates
// db.query(queryAllCandidtates, (err, rows) => {
//   if(err){
//     console.log(err);
//   }
//   console.log(rows);
// });

// // GET all candidates query
// db.query(queryOneCandidate, (err, row) => {
//   if(err){
//     console.log(err);
//   }
//   console.log(row);
// });

// // DELETE a candidate
// db.query(queryDeleteCandidate, 1, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });


// Create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
              VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});



// ROUTES
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