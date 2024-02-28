const nodemailer = require("nodemailer");

module.exports = {
  emailUsername: async (req, res) => {
    try {
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 587,
        auth: {
          user: process.env.NODEMAILER_USER,
          pass: process.env.NODEMAILER_PASS,
        },
      });
      // send mail with defined transport object
      const info = await transporter.sendMail({
        from: '"Get Username" <no-reply@jameshlo.com>', // sender address
        to: `${req.body[0]}`, // list of receivers
        subject: "Capital One Username", // Subject line
        text: `Your Capital One username is ${req.body[1]}`, // plain text body
        html: `Your Capital One username is <b>${req.body[1]}</b>`, // html body
      });
      res.status(200).json("Email containing username sent!");
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    } catch (error) {
      console.log(error);
      res.status(400).json("Error sending email");
    }
  },
};
