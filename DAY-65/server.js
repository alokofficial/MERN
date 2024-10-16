const http = require('http'); //core module of nodejs
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.write('Hello World');
    console.log(req.url, req.method, req.headers);
    res.end();
})
const PORT = 3000
server.listen(PORT,()=>{
    console.log(`Server listening on http://localhost:${PORT}`)
});