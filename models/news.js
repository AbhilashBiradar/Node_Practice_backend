const mongoose = require('mongoose');

// Schema
const newsSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	shortdesc:{
		type: String,
		required: false
	},
	longdesc:{
		type: String,
		required: false
	},
	imageurl:{
		type: String,
		required: false
	},
	source:{
		type: String,
		required: false
	}

});

const News = module.exports = mongoose.model('News', newsSchema);

// Get News
module.exports.getNews = (callback, limit) => {
	News.find(callback).limit(limit);
}
// GetById News
module.exports.getNewsById = (id,callback) => {
	News.findById(id,callback);
}
// Add 
module.exports.addNews = (news, callback) => {
	News.create(news, callback);
}

// Update 
module.exports.updateNews = (id, news, options, callback) => {
	var query = {_id: id};
	var update = {
		title: news.title,
		shortdesc: news.shortdesc,
		longdesc: news.longdesc,
		imageurl: news.imageurl,
		source: news.source
	};
	News.findOneAndUpdate(query, update, options, callback);
}


// Delete 
module.exports.removeNews = (id, callback) => {
	var query = {_id: id};
	News.remove(query, callback);
}