var express = require('express');
var sqlite3 = require('sqlite3')
var fs = require('fs');
var Mustache = require('mustache');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var marked = require('marked');
var db = new sqlite3.Database('./forum.db');
var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(methodOverride('_method')); 
//works
app.get('/', function(req, res){
  res.send(fs.readFileSync('./views/index.html', 'utf8'));
});
//works
app.post('/forum/create', function(req, res){
  db.run("INSERT INTO topics (title,author,body,vote) VALUES ('" + req.body.title + "','" + req.body.author + "','" + marked(req.body.content) + "','" + req.body.vote + "')");
  res.redirect('/forum');; 
var markedContent = marked(req.body.content) 
  res.send(markedContent);
}); 


//works
app.get('/forum', function(req, res) {
  var template = fs.readFileSync('./views/forum.html', 'utf8');

  db.all('SELECT * FROM topics;', function(err, topics) {
    var html = Mustache.render(template, {posts: topics});
    res.send(html);
  })
});
//works
app.get('/forum/:id', function(req, res){
  var id = req.params.id;
  db.all("SELECT * FROM topics WHERE id = " + id + ";", {}, function(err, topic){
    fs.readFile('./views/show.html', 'utf8', function(err, html){
      console.log(topic);
      
      var renderedHTML = Mustache.render(html, topic[0]);
      res.send(renderedHTML);
    });
  });
});
//works
app.put('/forum/:id', function(req, res){
  var id = req.params.id;
  var posts = req.body;

  db.run("UPDATE topics SET title =  '" + posts.title + "', author = '" + posts.author + "', body = '" + posts.content + "' WHERE id = " + id + ";");
    
  res.redirect('/forum');
});

//works
app.delete('/forum/:id', function(req, res){
  var id = req.params.id;
  db.run("DELETE FROM topics WHERE id = " + id + ";");
  res.redirect("/forum");
});

app.listen(3000, function() {
  console.log("LISTENING!");
});

