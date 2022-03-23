var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var engine = require('ejs-mate');

var app = express();

//set public folder
app.use(express.static(path.join(__dirname, 'public')));


const index = require('./routes/index');
// const staffs = require('./routes/staffs');
const {CareerPage, Career} = require('./routes/reg');

app.set('view engine', 'ejs');
app.engine('js', engine);

//bodyParser
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.get('/career', CareerPage);
// app.post('/career', Career);

app.use(index);
// app.use(staffs);

var port = process.env.PORT || 5000;

app.listen(port , () => {
    console.log(`Server listening on port ${port}`);
})
