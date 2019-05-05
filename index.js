const express = require("express");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const fs = require('fs');
const ejs = require("ejs");
const app = express();

const PORT = 8081;


app.set('view engine','ejs');

app.use(express.static(__dirname + '/views'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// const transporter = nodemailer.createTransport({
//     host: 'smtp.zoho.com',
//     port: 465,
//     secure: true, // use SSL
//     auth: {
//         user: 'testmail@zoho.com',
//         pass: '123456'
//     }
// });
//
// ejs.renderFile(__dirname + "//contact", { name: 'Stranger' }, function (err, data) {
// if (err) {
//     console.log(err);
// } else {
//     let mainOptions = {
//         from: '"Tester" testmail@zoho.com',
//         to: "totest@zoho.com",
//         subject: 'Hello, world',
//         html: data
//     };
//     console.log("html data: ", mainOptions.html);
//     transporter.sendMail(mainOptions, function (err, info) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('Message sent: ' + info.response);
//         }
//     });
// }
//
// });




app.get('/', function(req, res) {
	res.statusCode = 200;
	res.render('pages/index');
});

app.get('/about-us', function(req, res) {
	res.statusCode = 200;
	res.render('pages/about-us');
});

app.get('/contact', function(req, res) {
	res.statusCode = 200;
	res.render('pages/contact');
});

app.post('/contact', function(req, res) {
	res.statusCode = 200;
	res.render('pages/contact');
});

//-----------------------------------------------
//make this the gallery page replace eventXX with eventNAME @TODO
app.get('/eventphotos/Galleryone', function(req, res) {
	res.render('pages/eventphotos/Galleryone');
});

app.get('/gallerytwo', function(req, res) {
	res.render('pages/eventphotos/Gallerytwo');
});

app.get('/galleryThree', function(req, res) {
	res.render('pages/eventphotos/GalleryThree');
});

app.get('/galleryfour', function(req, res) {
	res.render('pages/eventphotos/Galleryfour');
});
//-----------------------------------------------

//make this the donations page
app.get('/donations', function(req, res) {
	res.statusCode = 200;
	res.render('pages/coming');
});

app.get('/Events', function(req, res) {
	res.render('pages/Events');
});

app.get('/Sponsors', function(req, res) {
	res.render('pages/Sponsors');
});

app.get('/404',function(req,res,next){
  next()
});

app.use(function(req,res,next){
  res.status(200);

  res.format({
    html:function (){
      res.render('pages/404',{url: req.url})
    },
    json:function (){
      res.json({error:'Not Found'})
    },
    default:function (){
      res.type('txt').send('Not Found')
    }
  })
});

app.listen(PORT,function() {
  console.log(`Server is running on port ${PORT}`);
});
