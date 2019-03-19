// 1 - sse the current list
// -Read / GET

// 2 - add to list
// -Create / POST

// 3 - remove from list
// - Delete / DELETE

// 4 - edit an item
// - Update / PUT/PATCH

// 5 - see details about une item 
// - Read / GET



//TODO - create express server

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const sqlite3= require('sqlite3').verbose();
const db = new sqlite3.Database('items.db');

//automaticly will read the data
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

//Read (cRud) - all
var items = [
  {name:'Bread', qty: 5}, 
  {name:'Salad', qty: 1}, 
  {name:'Tomato', qty:3}, 
  {name:'Olive Oil', qty: 1}, 
  {name:'Perper', qty:2}
];

app.get('/items', (req, res) => {
  res.send(null)});


app.post('/items', (req, res) => {
  var newItem = req.body;
  items.push(newItem);
  res.send(newItem);
});

db.serialize(function() {
  
  db.run('insert into items (values(?,?)', req.body.name, req.body,qty ));
 
  var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  for (var i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i);
  }
  // if (request.method === 'POST') {
  //   if (items.name === undefined) {
  //     item.name = item.qty;
  //     res.end();
  //   }
  // }
  


  // let data = '';
  // req.on('data', chunk =>

//Read (cRud) - all
//app.get('/items/:', () => {
//});