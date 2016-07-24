var redisClient = require('redis').createClient;
var redis = redisClient(6379, 'localhost');
var express = require('express'),
    MongoClient = require('mongodb').MongoClient,
    app = express(),
    mongoUrl = 'mongodb://localhost:29000/dbname';
var ObjectId = require('mongodb').ObjectID;
var assert = require('assert');
var access = require('./access.js');

MongoClient.connect(mongoUrl, function (err, db) {
    if (err) throw 'Error connecting to database - ' + err;


    app.get('/iteminfo', function (req, res, next) {

        var res = db.collection('iteminfo').find();
        res.each(function(err, doc) {
          if (doc != null) {
              callback(doc);
          } else {
              callback(null);
          }
        });
    });

    app.get('/iteminfo/:_id', function (req, res) {
        if (!req.param('_id'))
            res.status(400).send("Please send a proper id");
        else {
            db.collection('iteminfo').findOne({_id: id}, function(err, doc){
            if (doc != null)
                callback(doc);
            else
                callback(null);
            });
        }
    });

    app.listen(29370, function () {
        console.log('Listening on port 29370');
    });

});

