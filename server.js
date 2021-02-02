// Express
const express = require('express');
const fs = require('fs')
const app = express()
const PORT = process.env.PORT || 3000;
const path = require('path')
const db = require('./db/db.json')


// Copy/Paste this into all projects
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// Set up
// GET /notes - Should return the notes.html file.

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/notes.html'))
  console.log(path.join(__dirname + '/public/notes.html'))
})

// Set up
// GET * - Should return the index.html 

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'))
  console.log(path.join(__dirname + '/public/index.html'))

})

// Done located at /db.json
// The application should have a db.json file on the backend that will be used to store and retrieve notes using the fs module.


// GET /api/notes - 

app.get('/api/notes', (req, res) => {
  // Should read the db.json file and return all saved notes as JSON.
  res.json(db) 

})

app.post('/api/notes', (req, res) => {


  // Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
  res.status(200).send()

})

app.delete('/api/notes/:id', (req, res) => {

  // Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file
})







app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

