// Create web server

// import module
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('./cors');
var authenticate = require('../authenticate');

// import model
var Comments = require('../models/comments');

// create router
var commentsRouter = express.Router();
commentsRouter.use(bodyParser.json());