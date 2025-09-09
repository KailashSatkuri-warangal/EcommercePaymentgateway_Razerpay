await transporter.sendMail({
  from: process.env.SMTP_USER,
  to: "satkurikailash@gmail.com",  // Must use registered email
  subject: "Test Email from Payment App",
  text: "SMTP configuration is working perfectly ✅",
});
