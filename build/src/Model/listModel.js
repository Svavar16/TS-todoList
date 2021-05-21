"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoListModel = void 0;
// here we will place the models
var mongoose_1 = require("mongoose");
var todoList = new mongoose_1.Schema({
    item: String,
});
exports.todoListModel = mongoose_1.model("list", todoList);
