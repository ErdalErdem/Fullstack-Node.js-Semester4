import express from "express"

const app = express();

app.use(express.static("public"));

import path from "path";

console.log(path.resolve("public/homepage/homepage.html"))

app.get("/",  (req, res) => {
    res.sendFile(path.resolve);
})

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT))