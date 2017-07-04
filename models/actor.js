const mongoose = require('mongoose');

// actor Schema
const actorSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	shortdescription:{
		type: String,
		required: false
	},
	longdescription:{
		type: String,
		required: false
	},
	fblink:{
		type: String,
		required: false
	},
	twitterlink:{
		type: String,
		required: false
	},
	imageurl:{
		type: String,
		required: false
	}	
});

const Actor = module.exports = mongoose.model('actor', actorSchema);

// Get Actor
module.exports.getActor = (callback, limit) => {
	Actor.find(callback).limit(limit);
}
// GetById Actor
module.exports.getActorById = (id,callback) => {
	Actor.findById(id,callback);
}
// Add Actor
module.exports.addActor = (actor, callback) => {
	Actor.create(actor, callback);
}
// Update Actor
module.exports.updateActor = (id, actor, options, callback) => {
	var query = {_id: id};
	var update = {
		name: actor.name,
		shortdescription: actor.shortdescription,
		longdescription: actor.longdescription,
		fblink: actor.fblink,
		twitterlink: actor.twitterlink,
		imageurl: actor.imageurl
	};
	Actor.findOneAndUpdate(query, update, options, callback);
}

// Delete Actor
module.exports.removeActor = (id, callback) => {
	var query = {_id: id};
	Actor.remove(query, callback);
}
