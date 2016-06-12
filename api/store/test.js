// This have not worked. Done like this. I know i'ts not the best, but... It's a hackathon.
// var db = require('./firebase.js').firebase.database();

var firebase = require("firebase");

firebase.initializeApp({
	serviceAccount: "./app-a-ton-15a1a2b9448c.json",
	databaseURL: "https://app-a-ton.firebaseio.com/"
});

var db = firebase.database();

var ref = db.ref("working");


exports.test = function(callback) {

	ref.on("value", function(snapshot) {
		console.log(snapshot.val());
		callback(snapshot.val());
	}, function (errorObject) {
		console.log("The read failed: " + errorObject.code);
		// callback(snapshot.val());
		callback('error');
	});
	

	console.log('gogogogogo!!!');
}

