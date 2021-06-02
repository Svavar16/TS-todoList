// here we will place the models
import { Schema, Model, Document, model } from "mongoose";

export interface Iitems extends Document {
	item: string;
}

const itemsSchema: Schema = new Schema({
	item: String,
});

export const itemsModel: Model<Iitems> = model("item", itemsSchema);

export interface ItodoList extends Document {
	name: string;
	items: [item: Model<Iitems>];
}

const todoList: Schema = new Schema({
	name: String,
	items: [itemsSchema],
});

export default model<ItodoList>("list", todoList);
