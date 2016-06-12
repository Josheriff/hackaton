// Network

exports.deserves = function(req, res, next) {

	var Test = require('../store/test.js');
	Test.test(function(resp) {
	// Test.test(req, res, next, function(resp) {
		console.log('responding: ');
		console.log(resp);
		response(req, res, next, {status:'ok', data: resp});
	});


	// response(req, res, next, {status: 'ok', data: 'done'});
};


exports.screen = function(req, res, next) {

	var Screen = require('../store/screen.js');

	if(req.method.toLowerCase() == 'get') {
		Screen.getScreen(req.params.id, function(resp) {
			response(req, res, next, {status:'ok', data: resp});
		});
	} else {
		var json = req.body
		Screen.addScreen(json, function(resp) {
			response(req, res, next, {status:'ok', data: resp});
		});
	}

	// response(req, res, next, {status: 'ok', data: 'done'});
};



// RESPONSE

function response(req, res, next, resp) {
	
	if(typeof(resp) == 'undefined' || typeof(resp.status) == 'undefined') {

		console.log('Invalid response arrived:')
		console.error(resp);
		res.send({status:"error", error:"UnexpectedError", message:"There have been an unexpected error proccessing your request. The server response was invalid. Your request may be proceesed or may not."});

	} else {

		if(resp.status != 'error' && resp.data !== undefined) {
			if(typeof(resp.data) == 'number') {
				res.send('' + resp.data);
			} else {
				res.send(resp.data);
			}
		} else {
			res.send(resp);
		}
		// ¿Cómo cojones se responde desde restify con error?
	}
}
