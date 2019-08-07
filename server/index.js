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
const cors = require('cors');

const app = express();
const port = 3000;

const sqlite3= require('sqlite3').verbose();
const db = new sqlite3.Database('item.db');

//automaticly will read the data
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());


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
  db.all('select * from items', (err, items) => {
  
    if (err) {
      res.status(400).end();
    }else {
      res.send(items);
    }
  })
  console.log(items)
  
});


app.post('/items', (req, res) => {
  var newItems = req.body;
  db.run('insert into items (values(?,?)', newItems.name, newItems.qty, (err) => {
    if (err) {
      res.status(400).end();
    }else {
    res.send(newItems);
    }
  })
});



//Read (cRud) - all
//app.get('/items/:', () => {
//})