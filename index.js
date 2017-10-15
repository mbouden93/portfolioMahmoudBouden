'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()

app.set('port', (process.env.PORT || 5000))

app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'))
})

app.use(express.static(__dirname + '/wp-content/plugins/siteorigin-panels/css/frontd935.css'));
app.use(express.static(__dirname + '/wp-content/plugins/contact-form-7/includes/css/styles1c9b.css'));
app.use(express.static(__dirname + '/wp-content/themes/pulse/styleae9e.css'));
app.use(express.static(__dirname + '/wp-content/themes/pulse/css/bootstrap.minae9e.css'));
app.use(express.static(__dirname + '/wp-content/themes/pulse/css/font-awesome.minae9e.css'));
app.use(express.static(__dirname + '/wp-content/themes/pulse/css/normalizeae9e.css'));
app.use(express.static(__dirname + '/wp-content/themes/pulse/css/mainae9e.css'));
app.use(express.static(__dirname + '/wp-includes/js/jquery/jqueryb8ff.js'));
app.use(express.static(__dirname + '/wp-includes/js/jquery/jquery-migrate.min330a.js'));

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// Process application/json
app.use(bodyParser.json())

// Index route
app.get('/resume', function (req, res) {
    res.sendFile("index.html",{ root: __dirname });
})