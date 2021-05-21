import chai from "chai";
import chaihttp from "chai-http";
import app from "../server";

chai.use(chaihttp);
chai.should();

describe("Lists tests", () => {
	describe("List controllers, and model", () => {
		it("testing allArticles", () => {});
	});
});
