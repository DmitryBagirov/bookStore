const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 9000;
process.env.JWT_SECRET = "superMegaSecretPhrase";
process.env.JWT_EXPIRE = 60*60*1000;

process.on('uncaughtException', function(err) {
    console.log(err);
});

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(require('./routes'));
app.listen(port, () => console.log(`App started on port ${port}!`));
