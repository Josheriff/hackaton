// Store data

var firebase = require("firebase");

firebase.initializeApp({
	serviceAccount: "./app-a-ton-15a1a2b9448c.json",
	databaseURL: "https://app-a-ton.firebaseio.com/"
});

exports.firebase = firebase;