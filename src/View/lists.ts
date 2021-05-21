import { Request, Response } from "express";

export default (app: any) => {
	app.get("/api/lists", (req: Request, res: Response) => {
		res.status(200).send("Works!!");
	});

	app.post("/api/lists", (req: Request, res: Response) => {
		res.status(200).send(req.body);
	});

	app.put("/api/lists/:listID", (req: Request, res: Response) => {
		res.status(200).send(`> updated ${req.params.listID}`);
	});

	app.delete("/api/lists/:listID", (req: Request, res: Response) => {
		res.status(200).send(`> deleted ${req.params.listID}`);
	});
};
