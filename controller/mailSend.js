const nodemailer = require("nodemailer");

exports.sendMail = async (req, res) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let info = await transporter.sendMail({
      from: '"Jaseem" <jaseem6396jaz@gmail.com>',
      to: "ashin209@gmail.com",
      subject: "Assignment Nodejs",
      html: `
        <h1>Hi Sir</h1>
        <p>This is send through nodemailer</p>
        <p>         by</p>
        <p>Jaseem k s , Batch : E36 , jaseem6396jaz@gmail.com</p>
      `,
    });

    console.log("Message sent: ", info.messageId);
    res.status(200).send({ message: "Email sent successfully", messageId: info.messageId });
  } catch (error) {
    res.status(500).send({ message: "Error sending email", error: error.message });
  }
};
