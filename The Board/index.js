const mongoose = require('mongoose')

const dbURL = 'mongodb://localhost:27017/ForumDB';

mongoose.connect(dbURL);

const express = require('express');
const fileUpload = require('express-fileupload')
const path = require ('path')
const Post = require('./models/Post');
const User = require('./models/User');
const app = new express();

app.use(express.json());
app.use(express.urlencoded({extended:true}) );
app.use(express.static(`public`));
app.use(fileUpload());


const hbs = require('hbs');
app.set ('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


app.get('/', async(req,res) => {
	const userpost = await Post.find({})
	res.render(__dirname + '\\' + 'index', {userpost});
})

app.get('/editprofile', async(req,res) => {
	const userpost = await Post.find({})
	res.render('editprofile', {userpost})
})

app.get('/createpost', function(req,res) {
	res.render('createpost')
})

app.get('/contact', function(req,res) {
	res.render('contact')
})

app.get('/help', async(req,res) => {
	res.render('help')
})

app.get('/profile', async(req,res) => {
	const userpost = await Post.find({})
	res.render('profile', {userpost})
})

app.get('/signup', function(req,res) {
	res.render('signup')
})

app.post('/create-user', function(req,res) {
	User.create(req.body, (error,post) =>
	{
		res.redirect('/profile')
	})
})

app.post('/submit-post', function(req,res) {
	const {PostImg} = req.files
	PostImg.mv(path.resolve(__dirname, 'public/images', PostImg.name), (error) => {
		Post.create(
		{
			PostImg: '/images/' + PostImg.name,
			...req.body	
		} , (error,post) => 
		{
			res.redirect('/')
		})

	})
})

var port = 3000
var server = app.listen(port, function() { 
	console.log ('Node server is running on port ' + port)
})

