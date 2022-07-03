const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
	PostImg: {type: String, required: true},
	Date: {type: Date, default: Date.now},
	PostTitle: {type: String, required: true},
	Content: {type: String, required: true},
	Forum: {type: String, required: true},
	SubForum: {type: String, required: true},
}) 

const Post = mongoose.model('Post', postSchema)

module.exports = Post

