"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemsModel = void 0;
// here we will place the models
var mongoose_1 = require("mongoose");
var itemsSchema = new mongoose_1.Schema({
    item: String,
});
exports.itemsModel = mongoose_1.model("item", itemsSchema);
var todoList = new mongoose_1.Schema({
    name: String,
    items: [itemsSchema],
});
var todoListModel = mongoose_1.model("list", todoList);
exports.default = todoListModel;
