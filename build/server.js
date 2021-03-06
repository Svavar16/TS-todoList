"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// in order to get express, we need to install @types/express, and express itself
// then we need to use the old style import, you should be able to use newer, just dont know how yet
var express_1 = __importDefault(require("express"));
// starting the mongoDB, same needs to be done for SQL databases
// use straight import, just to get the side effect
require("./src/Model/_db");
// then initialize the port
var port = process.env.PORT || 4044;
// then we initialize it
var app = express_1.default();
// api routes
var lists_1 = __importDefault(require("./src/View/lists"));
lists_1.default(app);
// then we tell it what listen to this port
app.listen(port, function () {
    console.log("> This application is listening on port: " + port);
});
exports.default = app;
