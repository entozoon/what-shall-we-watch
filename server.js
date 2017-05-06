// Server requirements
let express = require('express'),
	app = express(),
	http = require('http').createServer(app);
app.use(express.static('public'));

// Server port and IP
// Don't forget to run:
//   sudo ufw allow 1112/tcp
// on the server to allow access.
// To show all ports that are open:
//   sudo ufw show added
let port = 1111,
	ip = "127.0.0.1";

http.listen(port, ip);
console.log("Server running on "+ip+":"+port);
