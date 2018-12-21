var express = require('express');
var app = express();
var fs = require('fs');

app.set('view engine', 'ejs');

const port = 3000;

var http = require('http');
var url = require('url');
var querystring = require('querystring');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); //support encoded bodies


app.get('/', (req, res) => {

	res.render('home.ejs', {});
});

app.get('/home', (req, res) => {

	res.render('home.ejs', {});
});

app.get('/hotels', (req, res) => {

	res.render('hotels.ejs', {});
});

app.get('/flights', (req, res) => {

	res.render('flights.ejs', {});
});


//  start of flightsbooking
app.get('/flightsbooking', (req, res) => {	

	var params =
		querystring.parse(url.parse(req.url).query);


		res.render('flightsbooking.ejs', { startlocation: params['startlocation'], endlocation: params['endlocation'], startdate: params['startdate'], enddate: params['enddate'] });
		
	}
);

// end of flightsbooking

//  start of hotelsbooking
app.get('/hotelsbooking', (req, res) => {

	var params =
		querystring.parse(url.parse(req.url).query);

	res.render('hotelsbooking.ejs', { londonplaces: params['londonplaces'], startdate: params['startdate'], enddate: params['enddate'] });
});

// end of hotelsbooking

//  start of packagesbooking
app.get('/packagesbooking', (req, res) => {

	var params =
		querystring.parse(url.parse(req.url).query);

	res.render('packagesbooking.ejs', { travelmonth: params['travelmonth']});
});

// end of hotelsbooking


app.get('/packages', (req, res) => {

	res.render('packages.ejs', {});
});

app.get('/aboutus', (req, res) => {

	res.render('about us.ejs', {});
});

app.get('/contactus', (req, res) => {

	res.render('contact us.ejs', {});
});

app.listen(port, () => {
	console.log('Express server is up!');
});

app.use( express.static("public"));

