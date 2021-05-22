// here we will place the models
import { Schema, Model, Document, model } from "mongoose";

interface items extends Document {
	item: string;
}

const itemsSchema: Schema = new Schema({
	item: String,
});

export const itemsModel: Model<items> = model("item", itemsSchema);

interface ItodoList extends Document {
	name: string;
	items: [item: Model<items>];
}

const todoList: Schema = new Schema({
	name: String,
	items: [itemsSchema],
});

const todoListModel: Model<ItodoList> = model("list", todoList);

export default todoListModel;
