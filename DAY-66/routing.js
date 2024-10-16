const http = require('http')

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')

    if (req.url === '/') {
        res.write('Welcome to our home page')
        return res.end()
        
    }
    else if (req.url === '/about') {
        res.write('Here is our short history')
        return res.end()
        
    }else {
    res.write(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
    return res.end()
}
})
const PORT = 3000
server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})