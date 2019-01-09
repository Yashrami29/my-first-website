var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});
router.get('/header', function(req, res, next) {
  res.render('header', { title: 'Express' });
});
router.post('/contact', function(req, res, next) {
  //console.log(req,body)
  //console.log("contact data is"+req.body);
  //res.render('header',{title:'Express'});
  //console.log("Hello")
  
  //var a =req.body.txt1;
  //console.log("Textbox value is" + a);
  const myarray ={
    name : req.body.txt1,
    Message :req.body.txt2,
    Email :req.body.txt3
  }
  res.render('home', { msg: myarray });
});

module.exports = router;
