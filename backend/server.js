const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/dictionary', {
  useNewUrlParser: true
});

// Configure multer so that it will upload to '../front-end/public/images'
const multer = require('multer')
const upload = multer({
  dest: '../frontend/public/images/',
  limits: {
    fileSize: 10000000
  }
});

// Create a scheme for items in the dictionary: a word and a definition.
const itemSchema = new mongoose.Schema({
  word: String,
  definition: String,
});

// Create a model for items in the dictionary.
const Item = mongoose.model('Item', itemSchema);


// Create a new item in the dictionary
app.post('/api/items', async (req, res) => {
  const item = new Item({
    word: req.body.word,
    definition: req.body.definition,
  });
  try {
    await item.save();
    console.log(item);
    res.send(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Get a list of all of the items in the dictionary
app.get('/api/items', async (req, res) => {
  try {
    let items = await Item.find();
    res.send(items);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/items/:id', async (req, res) => {
  console.log('Delete ' , req.params.id);
  try {
    await Item.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/items/:id', async (req, res) => {
  console.log('Edit ' , req.params.id);
  let item = await Item.findOne({
    _id: req.params.id
  });
  item.word = req.body.word;
  item.definition = req.body.definition;
  try {
    await item.save();
    res.send(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));