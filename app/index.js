(function (app) {
    var mongoose = require('mongoose');
    var config = require('../config');
    var topic = require('./models/topic'), user = require('./models/user');

    var connectDb = function () {
        mongoose.connect(config.database, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log("Connected to database");
            }
        });
    }

    // app = {
    //     connect: connectDb,
    //     topic: topic,
    //     user: user
    // }

    app.connect = connectDb;
    app.topic = topic;
    app.user = user;

} (module.exports));