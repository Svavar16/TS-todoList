"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listModel = exports.todoList = exports.itemsSchema = void 0;
// here we will place the models
var mongoose_1 = require("mongoose");
exports.itemsSchema = new mongoose_1.Schema({
    item: String,
    listToConnect: String,
});
var itemsModel = mongoose_1.model("item", exports.itemsSchema);
exports.todoList = new mongoose_1.Schema({
    name: String,
});
exports.listModel = mongoose_1.model("list", exports.todoList);
exports.default = itemsModel;
