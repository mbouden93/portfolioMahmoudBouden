'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()

app.set('port', (process.env.PORT || 5000))

app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'))
})

app.use(express.static(__dirname + '/wp-includes'));
app.use(express.static(__dirname + '/wp-content'));
app.use(express.static(__dirname + '/wp-admin'));

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// Process application/json
app.use(bodyParser.json())

// Index route
app.get('/resume', function (req, res) {
    res.sendFile("index.html",{ root: __dirname });
})