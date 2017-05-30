const express = require("express");
const router = require("./routes/index");
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));
app.set("view engine", "html");
app.use("/", router);
app.listen(process.env.PORT, process.env.IP, () => {
    console.log("File server on and listening...");
});