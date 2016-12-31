var express = require('express');
var app = module.exports = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var config = require('./server/config');
var massive = require('massive');
