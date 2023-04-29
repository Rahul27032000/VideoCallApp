const express = require("express");
const app = express();
const server = require("http").Server(app);
const port = 3000;
const io = require("socket.io")(server);

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => res.send("Hello World!"));
// app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.listen(port, () => {
  console.log("Hello World!");
});
