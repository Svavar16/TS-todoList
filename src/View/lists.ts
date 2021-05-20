import { Request, Response } from "express";

export default (app: any) => {
	app.get("/api/lists", (req: Request, res: Response) => {
		res.status(200).send("Works!!");
	});
};
