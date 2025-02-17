const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.get("/hello", (req, res) => {
    res.send("Hello, Platform.sh!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});