const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	Username: {type: String, required: true, unique: true},
	Email: {type: String, required: true, unique: true},
	Password: {type: String, min: 6, required: true}
}) 

const User = mongoose.model('User', userSchema)

module.exports = User

