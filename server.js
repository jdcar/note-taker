// Express
const express = require('express');
const fs = require('fs')
// const connectLivereload = require("connect-livereload");

const app = express()
const PORT = process.env.PORT || 3000;
const path = require('path')
const db = require('./db/db.json')



// Copy/Paste this into all projects
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))


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


app.get('/api/notes/:id', (req, res) => {
  console.log(req.params)
  res.end()

})

app.post('/api/notes', (req, res) => {


  const newNote = req.body
  newNote.id = Math.floor(Math.random() * 1000000000);
  db.push(newNote)

  fs.writeFileSync('./db/db.json', JSON.stringify(db), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  // console.log(db)
  // Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.

  res.status(200).send()
  // res.json(db)
})



app.delete('/api/notes/:id', (req, res) => {

  let chosenNote = req.params.id

  fs.readFile('./db/db.json', 'utf8', (err, db) => {
    if (err) throw err 
    let notes = JSON.parse(db)
    console.log(notes)

    let found = notes.findIndex((element) => { 
        return chosenNote == element.id 
    })
    console.log(found)
    notes.splice(found, 1)

    fs.writeFile('./db/db.json', JSON.stringify(notes), function (err) {
      if (err) throw err;
      console.log('Saved!');
      res.json(JSON.stringify(notes))

      app.use(connectLivereload());

      // console.log(notes)
    });
    
  })
})


app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

