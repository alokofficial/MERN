const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'aloknh31@gmail.com', // replace with your email
    pass: 'AppPassword',         // replace with your password or app password
  },
});

const mailOptions = {
  from: 'aloknh31@gmail.com',
  to: 'id4college@gmail.com', // replace with the recipient's email
  subject: 'Automated Email',
  text: 'This email was sent using JavaScript automation!',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
