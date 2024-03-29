const express = require("express");
const fs = require("node:fs/promises");

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/homepage.html")
})

app.listen(PORT, () => {console.log("Server is running on port:", PORT)});

module.exports = app;   

app.get("/date", (req, res) => {
    res.send({ data: Date() });
});

/*
// UTC
console.log(new Date());

// Unix Epoch Time (Seconds since 1970 Jan. 1st)
console.log(Date.now());

// Local time (in my case right now and here CEST GMT+0100)
console.log(Date());
*/


/*

const months = ["January", "February", "March", "April", "May", "June", "July", 
                "August", "September", "October", "November", "December"];

app.get("/month/version1", (req, res) => {
    const monthIndex = new Date().getMonth();

    res.send({ data: months[monthIndex] });
});

app.get("/month/version2", (req, res) => {
    const monthName = new Date().toLocaleDateString("en-us", { month: "long" })
    res.send({ data: monthName });
});

app.get("/month/version3", (req, res) => {
    const monthName = Date().split(" ")[1];
    res.send({ data: monthName });
});

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

app.get("/day", (req, res) => {
    const dayName = days[new Date().getDay()];
    res.send({ data: dayName });
});

*/




