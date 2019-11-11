var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var port = 80
var db = require('./queries')

app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/test', db.getTest)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
