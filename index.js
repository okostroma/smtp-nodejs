const express = require('express');
const nodemailer = require("nodemailer");
const app = express();

app.get('https://smtp-nodejs-portfolio.herokuapp.com/', function (req, res) {
    res.send('Hello World!');
});



app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        // host: "smtp.ethereal.email",
        // port: 587,
        // secure: false, // true for 465, false for other ports
        auth: {
            user: "oxakostroma@gmail.com", // generated ethereal user
            pass: "Deadsea81696", // generated ethereal password
        },
    });

app.post('/send', async function (req, res) {
    try {
        let {name, email, message} = res.body
        await transporter.sendMail({
            from: 'HR', // sender address
            to: "oxakostroma@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "HR wants me", // plain text body
            html: "<b>Hello world?</b>", // html body
        });
    } catch (e) {
        res.send(e);
    }

});


