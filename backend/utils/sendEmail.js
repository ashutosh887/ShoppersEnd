const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  console.log("I came to send email function");

  const transporter = nodemailer.createTransport({
    service: process.env.SMPT_SERVICE,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  console.log("I am just about to send Email");
  // await transporter.sendMail(mailOptions);
  // console.log("I have sent the Email");

  await transporter.sendMail(mailOptions, (error) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent");
  });
};

module.exports = sendEmail;
