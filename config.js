(function (app) {
	app.secret='fkngjwts_13';
	app.database='mongodb://localhost/LastHour';
	app.port=process.env.PORT || 3000;
}(module.exports));