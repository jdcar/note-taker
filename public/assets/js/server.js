// Express
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

const path = require('path')

// Copy/Paste this into all projects
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// 
// GET /notes - Should return the notes.html file.


app.get('/add', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/notes.html'))
  console.log(path.join(__dirname + '/public/notes.html'))
})
// GET * - Should return the index.html file

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'))
})




app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

