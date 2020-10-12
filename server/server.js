const express = require('express');
const path = require('path');
const app = express();

// Serve static files....
app.use(express.static(__dirname + '/dist/OnlineResume'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/OnlineResume/index.html'));
});

// default Heroku PORT
const serverport = process.env.PORT || 3000;
app.listen(serverport);
console.log("Listening on " +serverport)

