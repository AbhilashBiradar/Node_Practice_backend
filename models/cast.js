const mongoose = require('mongoose');

// cast Schema
const castSchema = mongoose.Schema({
	charctername:{
		type: String,
		required: false
	},
	movieName:{
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
	},
	movieId:{
		type: String,
		required: false
	}
});

const Cast = module.exports = mongoose.model('cast', castSchema);

// Get Cast
module.exports.getCast = (callback, limit) => {
	Cast.find(callback).limit(limit);
}
// GetById Cast
module.exports.getCastById = (id,callback) => {
	Cast.findById(id,callback);
}
//GetByActorId Cast
module.exports.getCastByActor = (actorId,callback) => {
	var query = {actorId: actorId};
	Cast.find(query,callback);
}
//GetByMovieId Cast
module.exports.getCastByMovie = (movieId,callback) => {
	var query = {"movieId": movieId};
	Cast.find(query, callback);
}
// Add Cast
module.exports.addCast = (cast, callback) => {
	Cast.create(cast, callback);
}
// Update Cast
module.exports.updateCast = (id, cast, options, callback) => {
	var query = {"id": id};
	var update = {
			charctername: cast.charctername,
			movieName: cast.movieName,
			actorId: cast.actorId,
			movieId: cast.movieId,
			movieName: cast.movieName
	};
	Cast.findOneAndUpdate(query, update, options, callback);
}

// Delete Cast
module.exports.removeCast = (id, callback) => {
	var query = {"id": id};
	Cast.remove(query, callback);
}
