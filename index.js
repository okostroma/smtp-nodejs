const express = require('express');
const nodemailer = require("nodemailer");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())


app.get('/', function (req, res) {
    res.send('Hello World!');
});

let port = process.env.PORT || 3010;
let smtp_login = process.env.smtp_login;
let smtp_password = process.env.smtp_password;



app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: smtp_login, // generated ethereal user
        pass: smtp_password, // generated ethereal password
    },
});

app.post('/send', async function (req, res) {
    try {
        let {name, email, message} = req.body;
        await transporter.sendMail({
            from: 'HR', // sender address
            to: "oxakostroma@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "HR wants me", // plain text body
            html: `<div> name: ${name}</div>  <div> email: ${email}</div> <div> message: ${message} </div>`, // html body
        });
    } catch (e) {
        res.send(e);
    }

});


