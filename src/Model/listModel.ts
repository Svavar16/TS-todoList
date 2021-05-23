// here we will place the models
import { Schema, Model, Document, model } from "mongoose";

interface Iitems extends Document {
	item: string;
}

const itemsSchema: Schema = new Schema({
	item: String,
});

export const itemsModel: Model<Iitems> = model("item", itemsSchema);

interface ItodoList extends Document {
	name: string;
	items: [item: Model<Iitems>];
}

const todoList: Schema = new Schema({
	name: String,
	items: [itemsSchema],
});

const todoListModel: Model<ItodoList> = model("list", todoList);

export default todoListModel;
