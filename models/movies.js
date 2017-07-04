const mongoose = require('mongoose');

const castSchema = mongoose.Schema({
	charctername:{
		type: String,
		required: false
	},
	actorName:{
		type: String,
		required: false
	},
	actorId:{
		type: String,
		required: false
	}
});
// cast Schema
const movieSchema = mongoose.Schema({
	movieName:{
		type: String,
		required: false
	},
	shortdesc:{  
		type: String,
		required: false
	},
	longdesc:{
		type: String,
		required: false
	},
	smallimageurl:{
		type: String,
		required: false
	},
	bigimageurl:{
		type: String,
		required: false
	},
	releaseDate:{
		type: String,
		required: false
	},
	cast:{
		type:[castSchema],
		required:false
	}
});

const Movie = module.exports = mongoose.model('movie', movieSchema);

/*// Get Movies
module.exports.getMovies = (callback, limit) => {
	Movie.find(function(err,movie){
		if(err){
			throw err;
		}else{
			for(var i=0; i<movie.length;i++){
				movie[i].cast="";
				Cast.getCastByMovie(movie[i].id,function(err,cast){
					if(err){
						throw err;
					}else{
						movie[i].cast=cast;
						
					}
					
				});	
			}
			callback;
		}
	});
}
// GetMovieById
module.exports.getMovieById = (id,callback) => {
	Movie.findById(id,callback);
}
//GetMovieByCastId
module.exports.getMovieByName = (movieName,callback) => {
	var query = {"movieName": movieName};
	Movie.find(query,callback);
}

// Add Movie
module.exports.addMovie = (movie, callback) => {
	var movieObj={};
	var cast=[];
	var movieCast=movie.cast;
		movieObj.movieName=movie.movieName;
		movieObj.shortdesc= movie.shortdesc;
		movieObj.longdesc=movie.longdesc;
		movieObj.smallimageurl=movie.smallimageurl;
		movieObj.bigimageurl=movie.bigimageurl;
		movieObj.releaseDate=movie.releaseDate;
	
	Movie.create(movieObj,function (err,resultmovie) {
		  if (err) {
			  throw err;  
		  }
		  else{
			  for(var i=0; i<movieCast.length; i++){
				  cast.push({ 
					  movieId:resultmovie._id,
					  movieName:resultmovie.movieName,
					  actorName:movieCast[i].actorName,
					  actorId:movieCast[i].actorId,
					  charctername:movieCast[i].charctername
				  });  
			  }
			  Cast.addCast(cast,callback);
		  }
			 
		});
	
}
// Update Movie
module.exports.updateMovie = (id, movie, options, callback) => {
	var query = {"id": id};
	var movieupdate = {
			movieName: movie.movieName,
			shortdesc: movie.shortdesc,
			longdesc: movie.longdesc,
			smallimageurl: movie.smallimageurl,
			bigimageurl: movie.bigimageurl,
			releaseDate: movie.releaseDate
	};
	var movieCast=movie.cast;
	var castReturn=[];
	Movie.findOneAndUpdate(query, update, options, function (err,resultmovie) {
		  if (err) {
			  throw err;  
		  }else{
			  for(var i=0; i<movieCast.length; i++){
				  var cast={};
				  var castid=movieCast.castid;
				  cast.movieId=resultmovie.id;
				  cast.movieName=resultmovie.movieName;
				  cast.actorName=movieCast[i].actorName;
				  cast.actorId=movieCast[i].actorId;
				  cast.charctername=movieCast[i].charctername;
				  Cast.updateCast(castid,cast,options,function(err,castUpdate){
					  if (err) {
						  throw err;  
					  }  
					  else{
						  castReturn.push(castUpdate);
						  
					  }
				  });
			  }
			 
		  }
	});
}

// Delete Movie
module.exports.removeMovie = (id, callback) => {
	var query = {"id": id};
	Movie.remove(query, callback);
}





*/
//Get Actor
module.exports.getMovies = (callback, limit) => {
	Movie.find(callback).limit(limit);
}
//GetById Movie
module.exports.getMovieById = (id,callback) => {
	Movie.findById(id,callback);
}
//GetByactorId Movie
module.exports.getMovieByActorId = (id,callback) => {
	var query = {"cast.actorId":id};
	Movie.find(query,callback);
}
//GetMovieName Movie
module.exports.getMovieByMovieName = (name,callback) => {
	var containsString='/'+name+'/';
	var query = {"movieName":containsString};
	Movie.find(query,callback);
}
//Add Movie
module.exports.addMovie = (movie, callback) => {
	Movie.create(movie, callback);
}
//Update Movie
module.exports.updateMovie = (id, movie, options, callback) => {
	var query = {_id: id};
	//shortdesc  longdesc   smallimageurl  bigimageurl releaseDate cast
	var update = {
			movieName: movie.movieName,
			shortdesc: movie.shortdesc,
			longdesc: movie.longdesc,
			smallimageurl: movie.smallimageurl,
			bigimageurl: movie.bigimageurl,
			releaseDate: movie.releaseDate,
			cast: movie.cast
	};
	Movie.findOneAndUpdate(query, update, options, callback);
}

//Delete Movie
module.exports.removeMovie = (id, callback) => {
	var query = {_id: id};
	Movie.remove(query, callback);
}








