const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));





const projects = [
  {
    imgURL:"/images/NoteTaker.png",
    title:'Note-Taker',
    description:'A web app that allows the user to write notes down. Built using React.js',
    codeURL:'https://github.com/cgrondi/Note-Taker',
    demoURL:'#'
  },
  {
    imgURL:'#',
    title:'TESTING',
    description:'A SECOND PROJECT THAT DOES NOT EXIST TO TEST THE FOREACH FUNCTION IN PORTFOLIO.EJS. DELETE AFTER TESTING.',
    codeURL:'#',
    demoURL:'#'
  }
];


app.get('/', function(req,res){

  res.render('index');
});
app.get('/portfolio', function(req,res){
  res.render('portfolio',{projects: projects});
});
app.get('/about', function(req,res){
  //temporarily until I create the about page
  res.redirect('/');
});

app.listen(3000,function(){
  console.log('Server running on port 3000');
});
