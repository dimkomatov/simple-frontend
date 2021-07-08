const http = require('http');
const fs = require('fs')

const server = http.createServer(function (req, res) {
    console.log(req.method, req.url)
    if (req.url == '/style.css') {
        const css = fs.readFileSync('style.css', 'utf-8')
        res.end(css);
    } else {
        const html = fs.readFileSync('index.html', 'utf-8')
        res.end(html);
    }
});

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

console.log('port = ', process.env.PORT)

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});