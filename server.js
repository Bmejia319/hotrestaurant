// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = process.env.PORT || 8080;

// Create our server
var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {
    var path = req.url;

    switch (path) {

        case "/table":
            return fs.readFile(__dirname + "/tables.html", function (err, data) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });

        case "/make":
            return fs.readFile(__dirname + "/reservation.html", function (err, data) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });

        default:
            return fs.readFile(__dirname + "/index.html", function (err, data) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });
    }

}

// Starts our server
server.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
});