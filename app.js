const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

//serve static files(that support you apps. The next line of code tells your webserver where to find it) in express
app.use(express.static(path.join(__dirname, "public")));

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/index.html"));
  //__dirname : It will resolve to your project folder.
});

router.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/about.html"));
});

//add the router
app.use("/", router);
app.listen(process.env.port || 3000);

console.log("Running at Port 3000");