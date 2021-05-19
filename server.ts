// in order to get express, we need to install @types/express, and express itself
// then we need to use the old style import, you should be able to use newer, just dont know how yet
const express = require("express");
// then initialize the port
const port = process.env.PORT || 4044;

// then we initialize it
const app = express();

app.get("/", (req: any, res: any) => {
	res.send("Works!!");
});

// then we tell it what listen to this port
app.listen(port, () => {
	console.log(`This application is listening on port: ${port}`);
});
