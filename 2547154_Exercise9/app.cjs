const express = require('express');  
const connection = require('./db.cjs'); 
const nodemailer = require('nodemailer');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const fs = require('fs');
const cors = require('cors') 
const app = express();  
app.use(express.json());  
app.use(cors())

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'meerashahi.2158@gmail.com',   
    pass: 'seez tewa zlfi aswf',  
  },
});

app.get('/registrations', (req, res) => {  
    console.log("inside app file")
  connection.query('SELECT * FROM registrations', (err, results) => {  
    if (err) {
        return res.status(500).json({ error: 'Database error' });  
    }
    res.json({ users: results });  
  });  
}); 

// app.post('/registrations', (req, res) => {  
//   const { name, email, p_no } = req.body;  
//   if (!name || !email || !p_no) {  
//     return res.status(400).json({ error: 'Missing required fields' });  
//   }  
//   connection.query(  
//     'INSERT INTO registrations (name, email, p_no) VALUES (?, ?, ?)',  
//     [name, email, p_no],  
//     (err, results) => {  
//       if (err) return res.status(500).json({ error: 'Database error' });  
//       const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: email,
//         subject: 'Registration Successful',
//         html: `<p>Hello ${name},</p><p>Thank you for registering at Happy Tails Kennel Center!</p><p>Best Regards,</p><p>Happy Tails Team</p>`,
//       };

//       try {
//         await transporter.sendMail(mailOptions);
//         console.log('Email sent');
//       } catch (error) {
//         console.log('Error sending email:', error);
//       }
//       res.status(201).json({ message: 'User Registered ', id: results.insertId });  
//     }  
//   );  
// }); 

app.post('/registrations', async (req, res) => {  // Make this async
  const { name, email, p_no } = req.body;  

  if (!name || !email || !p_no) {  
    return res.status(400).json({ error: 'Missing required fields' });  
  }  
  
  connection.query(  
    'INSERT INTO registrations (name, email, p_no) VALUES (?, ?, ?)',  
    [name, email, p_no],  
    async (err, results) => {  // Make this async as well
      if (err) return res.status(500).json({ error: 'Database error' });  

      const mailOptions = {
        from: 'truisecom02@gmail.com',  // Gmail account
        to: email,  // Send to the user’s email
        subject: 'Registration Successful',
        html: `<p>Hello ${name},</p><p>Thank you for registering at Happy Tails Kennel Center!</p><p>Best Regards,</p><p>Happy Tails Team</p>`,
      };

      try {
        await transporter.sendMail(mailOptions);  // Now works because the function is async
        console.log('Email sent');
      } catch (error) {
        console.log('Error sending email:', error);
        return res.status(500).json({ error: 'Failed to send email' });
      }

      res.status(201).json({ message: 'User Registered', id: results.insertId });  
    }  
  );  
}); 

app.post('/upload', upload.single('document'), (req, res) => {
  console.log('Received file:', req.file);  // Debugging
  console.log('Received name:', req.body.name);

  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }

  const name = req.body.name;
  const img = fs.readFileSync(req.file.path);

  connection.query(
    'INSERT INTO file_upload (name, document) VALUES (?, ?)',
    [name, img],
    (err, result) => {
      if (err) {
        console.error('Insert Error:', err);
        return res.status(500).send('Upload failed');
      }
      console.log(result);
      res.send('Uploaded successfully');
    }
  );
});


app.listen(3000, () => console.log('Server running on http://localhost:3000'));  