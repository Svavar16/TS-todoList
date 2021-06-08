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
			expect(createdItem).to.have.property("item", "testItem");
			expect(createdItem).to.have.property(
				"listToConnect",
				listToUse._id.toString()
			);
		});
		it("Should find item by name", async () => {
			const itemToFind = await itemsController.getItemByName("testItem");
			expect(itemToFind).to.have.property("item", "testItem");
		});
		it("Should find item by Id", async () => {
			const itemToFindByName = await itemsController.getItemByName(
				"testItem"
			);
			expect(itemToFindByName).to.have.property("item", "testItem");
			const itemToFindById = await itemsController.getItemById(
				itemToFindByName?._id
			);
			expect(itemToFindById).to.have.property("item", "testItem");
		});
		it("Should find items in a list", async () => {});
		it("Should update an item", async () => {});
		it("Should delete an item", async () => {});
	});
});
