// const express = require("express");
// const router = express.Router();

// router.get('/add-home', (req, res) => {
//     res.send(`
//         <h1>Register your home on AirBnB</h1>
//         <form action="/host/submit-home" method="post">
//             <input type="text" name="houseName" id="houseName" placeholder="Enter House Name"><br>
//             <input type="submit" value="Submit">
//         </form>
        
//     `)
// })
// router.post('/submit-home', (req, res) => {
//     const houseName = req.body.houseName
//     res.send(`
//         <h1>House ${houseName} added successfully</h1>
//     `)
//     res.redirect('/')
// })

// module.exports = {
//     router
// }


const path = require("path");

const express = require("express");
const router = express.Router();

router.get('/add-home', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'addHome.html'))
})

