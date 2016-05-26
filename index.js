var express=require('express');
var bodyParser=require('body-parser');
var application=require('./app/');
var http=require('http');
var config=require('./config');

application.connect();

var mainApp=express();
var httpClient=http.Server(mainApp);

mainApp.use(bodyParser.urlencoded({extended: true}));
mainApp.use(bodyParser.json());

mainApp.use(express.static(__dirname + "/public"));

httpClient.listen(config.port, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening on port " + config.port);
    }
});
 