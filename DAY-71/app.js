const express = require("express");
const app = express();


const hostRouter = require("./router/host");
const userRouter = require("./router/user");

app.use(express.urlencoded({ extended: true }));

app.use("/host", hostRouter);
app.use("/user", userRouter);
app.use(express.static(path.join(__dirname, 'public'))) // path.join(__dirname,     'public')

app.use((req, res) => {
    res.status(404).send(`
        <h1>Page Not Found</h1>`);
})

const port = 3000;
app.listen(port, () => {
    console.log(`server is running at http://localhost:3000`);
})
