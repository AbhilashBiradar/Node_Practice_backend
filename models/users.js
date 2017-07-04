const mongoose = require('mongoose');

// Genre Schema
const usersSchema = mongoose.Schema({
	firstname:{
		type: String,
		required: true
	},
	lastname:{
		type: String,
		required: true
	},
	email:{
		type: String,
		required: false
	},
	password:{
		type: String,
		required: false
	},
	phone:{
		type: String,
		required: false
	},
	place:{
		type: String,
		required: false
	},
	dob:{
		type: String,
		required:false
		
	}
});

const Users = module.exports = mongoose.model('Users', usersSchema);

// Get Users
module.exports.getUsers = (callback, limit) => {
	Users.find(callback).limit(limit);
}
// GetById Users
module.exports.getUsersById = (id,callback) => {
	Users.findById(id,callback);
}
// Add Users
module.exports.addUsers = (users, callback) => {
	Users.create(users, callback);
}

// Update Users
module.exports.updateUsers = (id, users, options, callback) => {
	var query = {_id: id};
	var update = {
		firstname: users.firstname,
		lastname: users.lastname,
		email: users.email,
		password:users.password,
		phone: users.phone,
		place: users.place,
		dob: users.dob
	};
	Users.findOneAndUpdate(query, update, options, callback);
}


// Delete Genre
module.exports.removeUsers = (id, callback) => {
	var query = {_id: id};
	Users.remove(query, callback);
}
