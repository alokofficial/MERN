const express = require('express')
const app = express()
const port = 3000

app.use('/', (req, res, next) => {
    console.log('hello world')
    next()
    
})

app.use('/submit-details',(req, res, next) => {
    console.log('second middleware',req.method, req.url)
    res.send('<h1>welcome to submit-details page</h1>')
})

app.use('/', (req, res, next) => {
    console.log('third middleware',req.method, req.url)
    res.send('<h1>welcome to home page</h1>')
})
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})