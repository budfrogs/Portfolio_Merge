const https = require("https");
//const hostname = "budfrogsdev.me"; //Change to yourdomain.com

require("dotenv").config({ path: "./config.env" });
//const dotenv = require("dotenv").config();
const port = process.env.PORT || 5010;
const dbo = require("./db/conn");
const path = require("path");

const express = require("express");
const cors = require("cors");
const corsOptions = { origin: "*", optionsSuccesStatus: 200 };
const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(require("./routes/movie"));
// Serve static files such as images, CSS files, and JavaScript files for the React frontend app
app.use(express.static(path.join(__dirname, "client/build")));

const fs = require("fs");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/*", (req, res) => {
  //n3
  res.sendFile(path.join(__dirname + "/client/build/index.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

// app.post("/mssg", function (req, res) {
//   console.log(req.body);

//   res.redirect("/");
// });

const options = {
  key: fs.readFileSync("/etc/letsencrypt/live/budfrogsdev.me/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/budfrogsdev.me/fullchain.pem"),
};

const server = https.createServer(options, app);

server.listen(port, function (req, res) {
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  //Change Port Number here (if required, 443 is the standard port for https)
  console.log("HTTPS listening on ", port); //and here
});
