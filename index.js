require('dotenv').config()
const express = require('express')
const app = express()
const JSONdb = require('simple-json-db');
const db = new JSONdb('db.json');

require('./api')(app, db)

app.listen(3000)