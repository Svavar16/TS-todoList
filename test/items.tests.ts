import chai, { expect } from "chai";
import chaihttp from "chai-http";
import itemsController from "../src/Controller/itemController";
import todolistController from "../src/Controller/listController";
import "mocha";
import "../src/Model/_db";
// import app from "../server";

chai.use(chaihttp);
chai.should();

describe("Items tests", () => {
	describe("Items Controller", () => {
		it("Should create an item", async () => {
			const listToUse = await todolistController.postNewList("testList");
			expect(listToUse).to.have.property("name", "testList");
			const createdItem = await itemsController.postNewItem(
				"testItem",
				listToUse._id
			);
			console.log(typeof createdItem.listToConnect);
			expect(createdItem).to.have.property("item", "testItem");
			expect(createdItem).to.have.property(
				"listToConnect",
				listToUse._id.toString()
			);
		});
		it("Should find item by name", async () => {});
		it("Should find item by Id", async () => {});
		it("Should find items in a list", async () => {});
		it("Should update an item", async () => {});
		it("Should delete an item", async () => {});
	});
});
