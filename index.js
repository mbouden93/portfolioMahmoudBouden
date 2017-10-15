'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()

app.set('port', (process.env.PORT || 5000))

app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'))
})

app.use(express.static(__dirname + '/wp-content/plugins/siteorigin-panels/css/frontd935.css?ver=2.4.24'));
app.use(express.static(__dirname + '/wp-content/plugins/contact-form-7/includes/css/styles1c9b.css?ver=4.6.1'));
app.use(express.static(__dirname + '/wp-content/themes/pulse/styleae9e.css?ver=4.7.6'));
app.use(express.static(__dirname + '/wp-content/themes/pulse/css/bootstrap.minae9e.css?ver=4.7.6'));
app.use(express.static(__dirname + '/wp-content/themes/pulse/css/font-awesome.minae9e.css?ver=4.7.6'));
app.use(express.static(__dirname + '/wp-content/themes/pulse/css/normalizeae9e.css?ver=4.7.6'));
app.use(express.static(__dirname + '/wp-content/themes/pulse/css/mainae9e.css?ver=4.7.6'));
app.use(express.static(__dirname + '/wp-includes/js/jquery/jqueryb8ff.js?ver=1.12.4'));
app.use(express.static(__dirname + '/wp-includes/js/jquery/jquery-migrate.min330a.js?ver=1.4.1'));

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// Process application/json
app.use(bodyParser.json())

// Index route
app.get('/resume', function (req, res) {
    res.sendFile("index.html",{ root: __dirname });
})