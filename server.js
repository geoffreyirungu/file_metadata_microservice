'use strict';

var express = require('express');
var cors = require('cors');

// require and use "multer"...
var multer = require('multer');
var app = express();

var upload = multer();
app.use(cors());

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.post('/api/fileanalyse',upload.single('upfile'),function(req,res,next){
  const fileDetails = req.file;
  res.json({"name": fileDetails.originalname, "size": fileDetails.size, "type": fileDetails.mimetype});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
