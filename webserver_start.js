const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
 
    const readStream = fs.createReadStream('./static/index.html');
    res.writeHead(200,{'Content-type' : 'text/html'});
    readStream.pipe(res);
   /* if(req.url === '/') {
        res.write('Hello world from nodejs');
        res.end();
    }
    else {
        res.write('using some other domain');
        res.end();
    } */
}).listen('3000');

