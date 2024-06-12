//create WebServer
//this is a simple webserver that listens on port 8080
//and responds to all requests with a message
//this webserver is a child of the parent server
//the parent server is the one that calls this server
//and passes the request object to this server
//this server then responds to the request
//this server is a child of the parent server

//import http module
var http = require('http');
//import url module
var url = require('url');

//create a server object
var server = http.createServer(function (req, res) {
    //parse the request url
    var requestUrl = url.parse(req.url, true);
    //get the query string
    var queryData = requestUrl.query;
    //get the comment
    var comment = queryData.comment;

    //set the response header
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    //write the response
    res.write('Your comment is: ' + comment);

    //end the response
    res.end();
});

//export the server object
module.exports = server;

//end of comments.js