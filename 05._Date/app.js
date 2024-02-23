const express = require("express");

const app = express();

// UTC
console.log(new Date());

// Unix Epoch Time(Seconds since 1970 Jan. 1st)
console.log(Date.now())

// Local time (in my case right now and here CEST GMT+0100)
console.log(Date());

// assigment  create a route /date that returns the date
const date = Date();
app.get("date", (req, res) => {
    res.send({data: Date() });
})

// create a route with the endpoint /month
// that returns the current month in the format
app.get('/month', (req, res) => {
    const currentMonth = new Date().toLocaleString('default', { month: 'long' });
    res.send(`Current month is: ${currentMonth}`);
});

// assigment get today on /day i will solve it version1s technique


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

app.get('/day', (req, res) => {
    const dayName = days[new Date().getDay]
res.send({data: dayName})
})


const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT))