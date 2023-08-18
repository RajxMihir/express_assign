const http = require('http');

const menProducts = [];
const womenProducts = [];

const server = http.createServer((req, res) => {
    if(req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to Men & Women Dummy Data');
    }
    else if(req.url == '/men') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(menProducts));
    }
    else if (req.url == '/women') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(womenProducts));
      } 
      else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
      }
});

server.listen(3100, () => {
    console.log('Server is running on port 3100');
});