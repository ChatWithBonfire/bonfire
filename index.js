const { application } = require('express')
const express = require('express')
const app = express()
const JSONdb = require('simple-json-db');
const db = new JSONdb('db');

require('./api')(app, db)