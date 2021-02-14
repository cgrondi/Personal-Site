const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', function(req,res){
  const date = new Date();
  const year = date.getFullYear();
  res.render('index', {year: year});
});

app.listen(3000,function(){
  console.log('Server running on port 3000');
});
