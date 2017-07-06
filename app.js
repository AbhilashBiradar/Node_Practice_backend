var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var port = process.env.PORT	||	3000;
app.use(bodyParser.urlencoded({
  extended: true
}));﻿
app.use(bodyParser.json());﻿
//import models
Users =require('./models/users');
Actor =require('./models/actor');
News =require('./models/news');
Movie =require('./models/movies');

app.set('port', (process.env.port||3000));
//connect to MongoDB

app.use(express.static(__dirname));

//routes

app.get("/", function(req,res){
	res.render("index");
});

app.listen(port, function(){
   console.log("app running");
});

var mongodbUri = 'mongodb://dev:devdev@ds011261.mlab.com:11261/esg_app';

mongoose.connect(mongodbUri);
var conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', function () {console.log("Great success!")});

app.get('/api/users', (req, res) => {
	Users.getUsers((err, users) => {
		if(err){
			throw err;
		}
		res.json(users);
	});
});
app.get('/api/users/:_id', (req, res) => {
	Users.getUsersById(req.params._id, (err, user) => {
		if(err){
			throw err;
		}
		res.json(user);
	});
});
app.post('/api/users', (req, res) => {
	var users = req.body;
	Users.addUsers(users, (err, users) => {
		if(err){
			throw err;
		}
		res.json(users);
	});
});

app.put('/api/users/:_id', (req, res) => {
	var id = req.params._id;
	var users = req.body;
	Users.updateUsers(id, users, {}, (err, users) => {
		if(err){
			throw err;
		}
		res.json(users);
	});
});

app.delete('/api/users/:_id', (req, res) => {
	var id = req.params._id;
	Users.removeUsers(id, (err, users) => {
		if(err){
			throw err;
		}
		res.json(users);
	});
});

app.post('/api/actor', (req, res) => {
	var actor = req.body;
	Actor.addActor(actor, (err, actor) => {
		if(err){
			throw err;
		}
		actor.Response= " Actor"+actor.name+" Added sucessfully with id " + actor._id;
		res.json("actor":actor);
		
	});
});
app.get('/api/actor', (req, res) => {
	Actor.getActor((err, actor) => {
		if(err){
			throw err;
		}
		res.json(actor);
	});
});
app.get('/api/actor/:_id', (req, res) => {
	Actor.getActorById(req.params._id, (err, actor) => {
		if(err){
			throw err;
		}
		res.json(actor);
	});
});
app.put('/api/actor/:_id', (req, res) => {
	var id = req.params._id;
	var actor = req.body;
	Actor.updateActor(id, actor, {}, (err, actor) => {
		if(err){
			throw err;
		}
		res.json(actor);
	});
});

app.delete('/api/actor/:_id', (req, res) => {
	var id = req.params._id;
	Actor.removeActor(id, (err, actor) => {
		if(err){
			throw err;
		}
		res.json(actor);
	});
}); 
app.post('/api/news', (req, res) => {
	var news = req.body;
	News.addNews(news, (err, news) => {
		if(err){
			throw err;
		}
		res.json(news);
	});
});
app.get('/api/news', (req, res) => {
	News.getNews((err, news) => {
		if(err){
			throw err;
		}
		res.json(news);
	});
});
app.get('/api/news/:_id', (req, res) => {
	News.getNewsById(req.params._id, (err, news) => {
		if(err){
			throw err;
		}
		res.json(news);
	});
});
app.put('/api/news/:_id', (req, res) => {
	var id = req.params._id;
	var news = req.body;
	News.updateNews(id, news, {}, (err, news) => {
		if(err){
			throw err;
		}
		res.json(news);
	});
});

app.delete('/api/news/:_id', (req, res) => {
	var id = req.params._id;
	News.removeNews(id, (err, news) => {
		if(err){
			throw err;
		}
		res.json(news);
	});
});
app.post('/api/movie', (req, res) => {
	var movie = req.body;
	Movie.addMovie(movie, (err, movie) => {
		if(err){
			throw err;
		}
		res.json(movie);
	});
});
app.get('/api/movies', (req, res) => {
	Movie.getMovies((err, movie) => {
		if(err){
			throw err;
		}
		res.json(movie);
	});
});
app.get('/api/movie/:_id', (req, res) => {
	var id = req.params._id;
	Movie.getMovieById(id,(err, movie) => {
		if(err){
			throw err;
		}
		res.json(movie);
	});
});
app.get('/api/movies/actor/:_id', (req, res) => {
	var actorId = req.params._id;
	Movie.getMovieByActorId(actorId,(err, movie) => {
		if(err){
			throw err;
		}
		res.json(movie);
	});
});
app.get('/api/movies/name/:_Name', (req, res) => {
	var movieName = req.params._Name;
	Movie.getMovieByMovieName(movieName,(err, movie) => {
		if(err){
			throw err;
		}
		res.json(movie);
	});
});
app.put('/api/movie/:_id', (req, res) => {
	var id = req.params._id;
	var movie = req.body;
	Movie.updateMovie(id, movie, {}, (err, movie) => {
		if(err){
			throw err;
		}
		res.json(movie);
	});
});

app.delete('/api/movie/:_id', (req, res) => {
	var id = req.params._id;
	Movie.removeMovie(id, (err, movie) => {
		if(err){
			throw err;
		}
		res.json(movie);
	});
});
