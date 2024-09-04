const nodemailer = require('nodemailer');
require('dotenv').config();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;
    console.log(email);
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: 'hocineghhotmail.fr@gmail.com',
      to: email,
      subject: subject,
      html: message,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);
      res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
