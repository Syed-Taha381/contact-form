const express = require('express');
const app = express();
const nodemailer = require("nodemailer")

const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.static('public'))
app.use(express.json())

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/public/contactform.html")
})

app.post('/', (req, res)=>{
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'hello.srp.ai@gmail.com',
            pass: 'ksgazuvuxfaqlvwf'
            // user: process.env.USER,
            // pass: process.env.PASS
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: "hello.srp.ai@gmail.com, info@srca.com.pk, sjangda@srca.com.pk",
        subject: `Message from ${req.body.email}: ${req.body.select}`,
        text: `${req.body.message} Contact me for more details ${req.body.number}`
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error);
            res.send('error')
        }else{
            console.log('Email sent: ' + info.response)
            res.send('Success')
        }
    })
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})