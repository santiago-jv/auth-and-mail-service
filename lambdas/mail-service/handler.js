'use strict';

const transporter = require("./helpers/transporter");

module.exports.sendEmail = async (event) => {
    if (!event.Records) {
        console.error("No records received")
        return;
    }
    const sqsData = event.Records[0]
    const {  email, subject, html } = JSON.parse(sqsData.body)
    console.log(JSON.parse(sqsData.body));
    try {
        await transporter.sendMail({
            from: `Email Service <${process.env.MAIL_USER}>`,
            to: email,
            subject,
            html
        })
        console.log("Mail sent successfully")

    } catch (error) {
        console.error(error)
    }
  
};
