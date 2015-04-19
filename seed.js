var sqlite3 = require('sqlite3').verbose(); 
var db = new sqlite3.Database('./forum.db');  


//  db.run("CREATE TABLE comments (body text, location varchar, topics_id integer, FOREIGN KEY(topics_id) REFERENCES topics (id));"); 


db.run("INSERT INTO topics (title,author,body,vote) VALUES ('sake','chad','chaaa',0);"); 
db.run("INSERT INTO topics (title,author,body,vote) VALUES ('cake','mary','daaa',0);"); 
db.run("INSERT INTO topics (title,author,body,vote) VALUES ('lake','ronald','raaaa',0);");
db.run("INSERT INTO topics (title,author,body,vote) VALUES ('bake','ray','claaaa',0);"); 

db.run("INSERT INTO comments (body,location,topics_id) VALUES ('not good','newyork',3);"); 
db.run("INSERT INTO comments (body,location,topics_id) VALUES ('good','francek',2);"); 
db.run("INSERT INTO comments (body,location,topics_id) VALUES ('less good','china',1);"); 
db.run("INSERT INTO comments (body,location,topics_id) VALUES ('some good','russia',4);"); 


