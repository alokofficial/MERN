const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true })) // to get data from form
app.use(express.json())

app.use('/', (req, res, next) => {
    console.log(req.method, req.url)
    next()
    
})
app.use('/first', (req, res, next) => {
    console.log(req.method, req.url)
    next()
})

app.use('/submit-details',(req, res, next) => {
    console.log('second middleware',req.method, req.url)
    res.send('<h1>welcome to submit-details page</h1>')
})
app.get('/', (req, res, next) => {
    res.send(
        `
        <form action="/contact-us" method="post">
            <input type="text" name="name" id="name" placeholder="Enter Name"><br>
            <input type="email" name="email" id="email" placeholder="Enter Email"><br>
            <input type="submit" value="Submit">
        </form>
        `
    )
    
})
app.post('/contact-us', (req, res, next) => {
    res.send(
        `
        <h1>Submitted Successfully</h1>
        <p>Name: ${req.body.name}</p>
        <p>Email: ${req.body.email}</p>
        `
    )
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})