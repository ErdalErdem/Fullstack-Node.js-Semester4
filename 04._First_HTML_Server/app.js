const express = require("express")

const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "public/homepage/homepage.html");
});

app.get("publicsquare", (req, res) => {
    res.sendFile(__dirname + "public/publicSquare/publicSquare.html")
})

// task take a name from the query string and greet the person if their name is Anders (in my case), otherwise say hello stranger

const knownNames = ["Erdal", "Alice"]

app.get("/greeting", (req, res) => {
    if (req.query.name === knownName) {
        res.send({data: `Hello ${knownName}!`});
    } else {
        res.send({data: "Hello Stranger"});
    }
});

const PORT = 8080;