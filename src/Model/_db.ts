require("dotenv").config();
import mongoose from "mongoose";

console.log(process.env.MONGODBPATH);

const dbPath: string = "mongodb://localhost:27017/tstodolist";
const options: any = {
	useNewUrlParser: true,
	useFindAndModify: false,
	useCreateIndex: true,
	useUnifiedTopology: true,
};

mongoose.connect(dbPath, options);

const db: any = mongoose.connection;

db.on("error", () => {
	console.log("> unable to connect to the database");
});

db.once("open", () => {
	console.log("> successfully connected to the database");
});

export default db;
