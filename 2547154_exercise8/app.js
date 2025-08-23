const express = require('express');  
const connection = require('./db'); 
const cors = require('cors') 
const app = express();  
app.use(express.json());  
app.use(cors())

app.get('/kennels', (req, res) => {  
    console.log("inside app file")
  connection.query('SELECT * FROM kennels', (err, results) => {  
    if (err) {
        return res.status(500).json({ error: 'Database error' });  
    }
    res.json({ kennels: results });  
  });  
}); 

app.post('/kennels', (req, res) => {  
  const { name, type, size, fee } = req.body;  
  if (!name || !type || !size || !fee) {  
    return res.status(400).json({ error: 'Missing required fields' });  
  }  
  connection.query(  
    'INSERT INTO kennels (name, type, size, fee) VALUES (?, ?, ?, ?)',  
    [name, type, size, fee],  
    (err, results) => {  
      if (err) return res.status(500).json({ error: 'Database error' });  
      res.status(201).json({ message: 'Kennel added ', id: results.insertId });  
    }  
  );  
}); 

app.post('/kennel_booking', (req, res) => {  
  console.log("Form submission started");
  const { owner_name, p_no, pet_name, species, tot_days, kennel_id } = req.body;

  // Ensure data is correctly captured
  console.log('Captured data: ', req.body);

  // Convert to integers if necessary
  const tot_days_int = parseInt(tot_days, 10);
  const kennel_id_int = parseInt(kennel_id, 10);

  // Check for valid conversion
  if (isNaN(tot_days_int) || isNaN(kennel_id_int)) {
    return res.status(400).json({ error: 'Invalid value for total days or kennel_id' });
  }

  if (!owner_name || !p_no || !pet_name || !species || !tot_days_int || !kennel_id_int) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Log the payload
  console.log("Sending request with payload: ", req.body);

  // Check if kennel_id exists in the kennels table before inserting the booking
  connection.query('SELECT * FROM kennels WHERE id = ?', [kennel_id_int], (err, results) => {
    if (err) {
      console.error("Error checking kennel_id: ", err);
      return res.status(500).json({ error: 'Database error when checking kennel_id' });
    }

    if (results.length === 0) {
      return res.status(400).json({ error: 'Invalid kennel_id. This kennel does not exist.' });
    }

    // Proceed with inserting the booking record
    connection.query(
      'INSERT INTO kennel_booking (owner_name, p_no, pet_name, species, tot_days, kennel_id) VALUES (?, ?, ?, ?, ?, ?)',
      [owner_name, p_no, pet_name, species, tot_days_int, kennel_id_int],
      (err, results) => {
        if (err) {
          console.error("Error during booking insert: ", err);
          return res.status(500).json({ error: 'Database error during insert' });
        }

        console.log("Booking successfully created with ID: ", results.insertId);
        res.status(201).json({ message: 'Booking created', id: results.insertId });
      }
    );
  });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));  
