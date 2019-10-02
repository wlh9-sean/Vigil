require('dotenv').config()
const nodemailer = require('nodemailer')


const sendEmail = (req, res) => {
    const {email} = req.params

    // Step 1
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'certification.docbox@gmail.com',
            pass: '12abMatt'
        }
    })

    let emailText = `Welcome to Vigil Light. Sorry for your loss. 👼 ☠️ ⚰️💩`
    // Step 2
    let mailOptions = {
        from: 'certification.docbox@gmail.com',
        to: email,
        subject: 'Welcome to Vigil Light',
        text: emailText
    }

    // Step 3
    transporter.sendMail(mailOptions, (err, data) => {
        if(err){
            res.status(409).send('Error Occured')
        } else {
            res.status(200).send('Message Sent!')
        }

    })
}

module.exports = {
    sendEmail
}