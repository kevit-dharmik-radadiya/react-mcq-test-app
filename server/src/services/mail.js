const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'clint.bechtelar@ethereal.email',
    pass: '8Tc6j3smS6mNzS5TtJ',
  },
});

exports.sendResetPasswordEmail = async (to, resetUrl) => {
  const from = process.env.EMAIL_USERNAME;
  const subject = 'Reset password!';

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Reset your password</title>
    </head>
    <body>
      <p>Hi,</p>
      <p>You are receiving this email because you requested to reset your password for your Quizza account.</p>
      <p>Click the link below to reset your password:</p>
      <a href="${resetUrl}">${resetUrl}</a>
      <p>If you did not request a password reset, please ignore this email.</p>
      <p>Thank you,<br>Quizza Team</p>
    </body>
    </html>
  `;

  const res = await transporter.sendMail({
    from,
    to,
    subject,
    html,
  });
  console.log(res);
};
