"use strict";
// in order to get express, we need to install @types/express, and express itself
// then we need to use the old style import, you should be able to use newer, just dont know how yet
var express = require("express");
// then initialize the port
var port = process.env.PORT || 4044;
// then we initialize it
var app = express();
app.get("/", function (req, res) {
    res.send("Works!!");
});
// then we tell it what listen to this port
app.listen(port, function () {
    console.log("This application is listening on port: " + port);
});
