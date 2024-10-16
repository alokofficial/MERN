const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    if (req.url === '/') {
        res.write(`
            <h1>welcome to Home Page</h1>
    <form action="/submit-details" method="POST">
        <input type="text" name="name" id="name" placeholder="Enter Name"><br>
        <label for="gender">Gender:</label>
        <input type="radio" name="gender" id="male" value="male">
        <label for="male">Male</label>
        <input type="radio" name="gender" id="female" value="female">
        <label for="female">Female</label><br>
        <input type="submit" value="Submit">
    </form>
            `)
        return res.end()
    }
})
const PORT = 3002
server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})