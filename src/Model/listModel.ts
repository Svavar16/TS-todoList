// here we will place the models
import { Schema, Model, Document, model } from "mongoose";

interface ItodoList extends Document {
	item: string;
}

const todoList: Schema = new Schema({
	item: String,
});

export const todoListModel: Model<ItodoList> = model("list", todoList);
