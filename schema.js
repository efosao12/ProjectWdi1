var sqlite3 = require('sqlite3').verbose(); 
var db = new sqlite3.Database('./forum.db'); 

 db.run("CREATE TABLE topics (id INTEGER PRIMARY KEY AUTOINCREMENT, title varchar, author varchar, body text, vote integer );"); 
 db.run("CREATE TABLE comments (id INTEGER PRIMARY KEY AUTOINCREMENT,body text, location varchar, topics_id integer, FOREIGN KEY(topics_id) REFERENCES topics (id));"); 


