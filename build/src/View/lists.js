"use strict";
// here we will place the views
// const express = require("express");
// export const listRouter = express.Router();
Object.defineProperty(exports, "__esModule", { value: true });
// listRouter.get("/", (req: any, res: any) => {
// 	res.status(200).send("Works!!");
// });
exports.default = (function (app) {
    app.get("/api/lists", function (req, res) {
        res.status(200).send("Works!!");
    });
});
