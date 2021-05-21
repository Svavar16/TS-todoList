"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (app) {
    app.get("/api/lists", function (req, res) {
        res.status(200).send("Works!!");
    });
    app.post("/api/lists", function (req, res) {
        res.status(200).send(req.body);
    });
    app.put("/api/lists/:listID", function (req, res) {
        res.status(200).send("> updated " + req.params.listID);
    });
    app.delete("/api/lists/:listID", function (req, res) {
        res.status(200).send("> deleted " + req.params.listID);
    });
});
