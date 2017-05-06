import path from 'path';
import { Server } from 'http';
import Express from 'express';

// Create express app and server
const app = new Express();
const server = new Server(app);

// Always return index page (SPA)
app.get('*', (req, res) => {
  return res.sendFile(path.join(__dirname + '/src/static/index.html'));
});

// Start the server
// Don't forget to allow access if running from a proper server:
//   sudo ufw allow 1111/tcp
// To show all ports that are open: sudo ufw show added
const port = process.env.PORT || 1111;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
