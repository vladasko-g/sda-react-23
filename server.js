const express = require("express");
const path = require("path");

const app = express();
const distPath = path.join(__dirname, "dist");

const PORT = 3006;

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, console.log(`app is running on http://localhost:${PORT}`));
