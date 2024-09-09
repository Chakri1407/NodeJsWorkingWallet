const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
    const transporter = nodemailer.createTransport ({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth:{
            user:process.env.EMAIL_USERNAME,
            pass:process.env.EMAIL_PASSWORD
        },
        
    });

    const mailOptions = {
        from: 'ChakravarthyNaik <chakravarthynaik101@gmail.com>',
        to,
        subject,
        text
        
    };

    await transporter.sendMail(mailOptions)
}

module.exports = sendEmail;