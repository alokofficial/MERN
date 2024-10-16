const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    switch (req.url) {
        case '/':
            res.write('Welcome to our Main Page')
            res.write('<br></br>')
            res.write('<a href="https://www.myntra.com/">Main</a>')
            break
        case '/home':
            res.write('Welcome to Home Page')
            res.write('<br></br>')
            res.write('<a href="https://www.myntra.com/home">Home</a>')
            break
        case '/men':
            res.write('Welcome to Men Page')
            res.write('<br></br>')
            res.write('<a href="https://www.myntra.com/men">Men</a>')
            break
        case '/women':
            res.write('Welcome to Women Page')
            res.write('<br></br>')
            res.write('<a href="https://www.myntra.com/women">Women</a>')
            break
        case '/kids':
            res.write('Welcome to Kids Page')
            res.write('<br></br>')
            res.write('<a href="https://www.myntra.com/kids">Kids</a>')
            break
        case '/cart':
            res.write('Welcome to Cart Page')
            res.write('<br></br>')
            res.write('<a href="https://www.myntra.com/cart">Cart</a>')
            break
        default:
            res.write('Page Not Found')
    }
    res.end()
})
const PORT = 3000
server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})
