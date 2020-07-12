const express = require('express');
const app = express();

app.get('https://smtp-nodejs-portfolio.herokuapp.com/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
