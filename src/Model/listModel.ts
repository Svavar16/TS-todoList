// here we will place the models
import { Schema, model } from "mongoose";

export const itemsSchema = new Schema({
	item: String,
	listToConnect: String,
});

const itemsModel = model("item", itemsSchema);

export const todoList = new Schema({
	name: String,
});

export const listModel = model("list", todoList);

export default itemsModel;
