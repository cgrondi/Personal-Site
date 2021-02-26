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
    demoURL:'http://dry-beyond-70649.herokuapp.com/'
  },
  {
    imgURL:"/images/MonkeyGame.png",
    title:'Monkey Game',
    description:'A simple game in which a player can guide a monkey to bananas inspired by liquid crystal games such as Game and Watch. Made using jquery.',
    codeURL:'https://github.com/cgrondi/Monkey-Game',
    demoURL:'https://cgrondi.github.io/Monkey-Game/'
  },
  {
    imgURL:'https://knowpathology.com.au/app/uploads/2018/07/Happy-Test-Screen-01.png',
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
  res.render('about');
});

app.listen(3000,function(){
  console.log('Server running on port 3000');
});
