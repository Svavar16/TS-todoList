// in order to get express, we need to install @types/express, and express itself
// then we need to use the old style import, you should be able to use newer, just dont know how yet
import express from "express";
// starting the mongoDB, same needs to be done for SQL databases
// use straight import, just to get the side effect
import "./src/Model/_db";
// then initialize the port
const port = process.env.PORT || 4044;

// then we initialize it
const app: express.Application = express();

// api routes
import lists from "./src/View/lists";

lists(app);

// then we tell it what listen to this port
app.listen(port, () => {
	console.log(`> This application is listening on port: ${port}`);
});

export default app;
