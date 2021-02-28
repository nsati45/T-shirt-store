const express = require("express")

const app = express();

const port = 8000;

const admin = (req,res) => {
    return res.send(" this is admin dashboard ");  //can have multiple routes
};

const isAdmin = (req,res,next) => {
    console.log("isAdmin is running")
    next();
};



app.get("/admin", isAdmin,admin);


app.get("/login" , (req,res) => {
    return res.send("you are visiting login route");  //can have multiple routes
});

app.get("/signup" , (req,res) => {
    return res.send("you are visiting signup route");  //can have multiple routes
});




app.listen(port,() => {
    console.log("server is up and running");
});
// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))