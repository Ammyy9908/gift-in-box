export default function handler(req, res) {
  let nodemailer = require("nodemailer");
  const { name, email, message, phone } = req.body;

  const transporter = nodemailer.createTransport({
    host: "us2.smtp.mailhostbox.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: "Giftinbox|Alerts",
    text: `--------------------------------------------------------------------------------

   
    
    Hello Giftinbox,
    
    There is an alert comes from the client kindly Respond.

    The following content of the email is below:

    ${message}
    
    --------------------------------------------------------------------------------
    
    Thank you,
    
    The Giftinbox Team
    
    Connect with us
    
    https://notifications.google.comhttps://notifications.google.comhttps://notifications.google.com
    
    © 2023 Giftinbox 302, Udyog Vihar Phase II, Gurgaon, Haryana, 122008`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res
        .status(400)
        .json({ message: `Error in sending Message 😓`, status: 500 });
    } else {
      res.status(200).json({ message: `success`, status: 200 });
    }
  });
}
