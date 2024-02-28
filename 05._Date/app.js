const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Tillad CORS

app.use(express.static('public')); 


/*
app.get("/date", (req, res) => {
    res.send({ data: Date() });
});

*/

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/public/homepage.html");
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));

// Export the Express API
module.exports = app;

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




