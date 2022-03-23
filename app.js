const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));





const projects = [
  {
    imgURL: "/images/MyPantryPic.png",
    title: "My Pantry",
    description: "A fullstack web app for keeping track of a home's food supply including quantities and expiration dates. Built using MongoDB, ExpressJs, and NodeJS for the backend and Angular for the frontend.",
    codeURL: 'https://github.com/cgrondi/MyPantry',
    demoURL: "http://mypantry-env.eba-p9vezdty.us-east-1.elasticbeanstalk.com/"
  },
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

app.listen(process.env.PORT || 3000,function(){
  console.log('Server running on port 3000');
});
