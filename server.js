var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
// favicon
//app.use(favicon(path.join(__dirname,'public','favicon.ico')));

// Routers
const accountRouter = require('./app/routers/accountRouter'); 
const articleRouter = require('./app/routers/articleRouter');
const transferRouter = require('./app/routers/transferRouter');

// PORT
const PORT = process.env.PORT || 8080;

var db_user = process.env.DB_USER;
var db_pass = process.env.DB_PASS;

// Connect to mongoDB
// If using local server: localConfig.DB
// If using MongoDB Atlas: 
// mongodb+srv://<username>:<password>@cluster0-c14lf.gcp.mongodb.net/test?retryWrites=true

mongoose.connect('mongodb+srv://' + db_user + ':' 
    + db_pass + '@cluster0-c14lf.gcp.mongodb.net/admin?retryWrites=true&w=majority')
.then(() => {
    console.log('Connected to Server');
})
.catch((err) => console.log(err));

app.use(bodyParser.json());
app.use(express.static(__dirname+'/public'));
app.use('/account', accountRouter);
app.use('/article', articleRouter);
app.use('/transfer', transferRouter);

app.get('/', (req, res, next) => {
    res.sendFile('./public/index.html');
});

app.listen(PORT);
console.log("listening on port:" + PORT);
