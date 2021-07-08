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

console.log('port = ', process.env.PORT)

server.listen(process.env.PORT || 3000)