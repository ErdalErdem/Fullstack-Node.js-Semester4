const express = require("express");

const app = express();

app.use(express.static("public"));

// const helicopterFactoryFile = require("./util/helicopterFactory.js");
// console.log(helicopterFactoryFile.helicopterFactory());

const { helicopterFactory } = require("./util/helicopterFactory.js");
console.log(helicopterFactory());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/homepage/homepage.html");
});

app.get("/publicsquare", (req, res) => {
    res.sendFile(__dirname + "/public/publicSquare/publicSquare.html");
});

app.get("/treasuretrove", (req, res) => {
    res.send({data: "You found it"})
});

app.get("/secretpassphrase", (req, res) => {
    // task: Get the passphrase from the query string and compare it below
    if (req.query.passphrase !== "SesameOpenUp") {
        res.status(400).send({data: "Wrong passphrase"});
    } else {
        res.redirect("/treasuretrove");s
    }
});

// html = client
// app.js etc server

const knownNames = ["Anders", "Alice"];

app.get("/greeting", (req, res) => {
    const providedName = req.params.name;
    if (knownNames.includes(providedName)) {
        res.send({ data: `Hello ${providedName}!` });
    } else {
        res.send({ data: "Hello stranger!" });
    }
});

app.get("/knownpeople", (req, res) => {
    res.send({ data: knownNames.length });
});

app.get("/proxy", (req, res) => {
    fetch("http://www.google.com")
        .then(response => response.text()) // Convert the response to text
        .then(body => res.send(body)) // Send the response body to the client
        .catch(error => {
            console.error('Error fetching Google:', error);
            res.status(500).send('An error occurred');
        });
});


const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));