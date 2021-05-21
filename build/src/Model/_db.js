"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
var mongoose_1 = __importDefault(require("mongoose"));
console.log(process.env.MONGODBPATH);
var dbPath = "mongodb://localhost:27017/tstodolist";
var options = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
};
mongoose_1.default.connect(dbPath, options);
var db = mongoose_1.default.connection;
db.on("error", function () {
    console.log("> unable to connect to the database");
});
db.once("open", function () {
    console.log("> successfully connected to the database");
});
exports.default = db;
