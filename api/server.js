var Restify = require('restify');
// var CookieParser = require('restify-cookies');
// var Secure = require('./secure/canI.js');
var Network = require('./network/network.js');

// Create server
var server = Restify.createServer();

// Define server 
server.use(Restify.fullResponse());
server.use(Restify.urlEncodedBodyParser({ mapParams : false }));

// API ENDPOINTS
// Consume data
server.get("/deserve", Network.deserves);
// server.get("/deserve/:id", Network.deserves);
// server.get("/form", Network.deserves);
// server.get("/form/:id", Network.deserves);
// server.get("/screen", Network.deserves);
server.get("/screen/:id", Network.screen);
// server.post("/basic-info", Network.info);

// // Create data
server.post("/screen", Network.screen);     // Upsert screen
// server.post("/form", Network.form);         // Upsert form
// server.post("/deserve", Network.deserve);   // Upsert deserve


// server.get("/search", function(req, res, next) {
// 	// console.log(req);
// 	console.log(req.url.query);
// 	res.send(200, 'done');
// }); 


// Error intercept
server.on('uncaughtException', function (req, res, route, err) {
    console.error(err.stack);
    process.exit(1);	// This line restart the node proccess to ensure it still working. 
});


// Start listening

server.listen(3456, function (err) {
    if (err)
        console.error(err);
    else
        console.log('Api one is ready at: localhost:3456');
        //console.log('App is ready at : ' + port)
});
