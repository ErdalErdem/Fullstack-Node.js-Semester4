import express from "express";

const app = express();

app.get("/room", (req, res) => {
    // res.send({data: "Your in room 1"})
    next();

})

app.get("/room", (req, res) => {
    res.send({data: "Your in room 2"})

})

app.get("*", (req, res) => {
    res.send({})

})

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, console.log("Server is running on port", PORT));