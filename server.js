require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to handle sending emails
app.post('/api/send-email', async (req, res) => {
  const { email, subject, message } = req.body;

  console.log('Received request to send email with:', email, subject, message);

  if (!email || !subject || !message) {
    console.log('Error: Missing required fields');
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      debug: true,
      logger: true,
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: subject,
      text: message,
    };

    console.log('Sending email with options:', mailOptions);

    // Send the email
    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ success: false, message: 'Failed to send email.', error: error.message });
      }
      console.log('Email sent: ' + info.response);
      res.status(200).json({ success: true, message: 'Email sent successfully!' });
    });

  } catch (error) {
    console.error('Error in send-email route:', error);
    res.status(500).json({ success: false, message: 'Failed to send email.', error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
