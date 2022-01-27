var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();
var fuckin_mongo = require('mongoose');
fuckin_mongo.connect('mongodb://localhost/my_db');

var personSchema = fuckin_mongo.Schema({
    name: String,
    age: Number,
    nationality: String
});
var Person = fuckin_mongo.model("Person",personSchema);

app.get('/', function(req,res) {
    res.render('form');
});

app.get('/person', function(req,res) {
    res.render('person');
});

app.set('view engine','pug');
app.set('views', './views');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.use(upload.array());
app.use(express.static('public'));

app.post('/', function(req,res) {
    console.log(req.body);
    res.send("received your request!");
});

app.post('/person', function(req,res){
    var personInfo = req.body;
    if(!personInfo.name || !personInfo.age || !personInfo.nationality){
        res.render('show_message', {
            message: "Sorry, you provided wrong info", type: "error"});

    } else {
        var newPerson = new Person({
            name: personInfo.name,
            age: personInfo.age,
            nationality: personInfo.nationality
        });
        
        newPerson.save(function(err,Person){
            if(err)
                res.render('show_message',{message: "Database error", type:"error"});
            else
                res.render('show_message',{
                    message: "New person added", type: "success",person:personInfo});
        

        });
    }
});
app.listen(3000);