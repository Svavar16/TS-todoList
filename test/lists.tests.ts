import chai, { expect } from "chai";
import chaihttp from "chai-http";
import todolistController from "../src/Controller/listController";
import "mocha";
import "../src/Model/_db";
// import app from "../server";

chai.use(chaihttp);
chai.should();

describe("Lists tests", () => {
	describe("List controllers", () => {
		it("Should get all lists", async () => {
			const testList: any = await todolistController.getAllLists();
			expect(testList).to.not.be.undefined;
			expect(testList).to.not.be.null;
		});
		it("Should create a new list", async () => {
			const newList = await todolistController.postNewList("testList");
			expect(newList).to.not.be.undefined;
			expect(newList).to.not.be.null;
			expect(newList).to.have.property("name", "testList");
		});
		it("Should get a single list by name", async () => {
			const foundList = await todolistController.getListByName(
				"testList"
			);
			expect(foundList).to.not.be.undefined;
			expect(foundList).to.not.be.null;
			expect(foundList).to.have.property("name", "testList");
		});
		it("Should get a single list by name", async () => {
			const foundList = await todolistController.getListByName(
				"testList"
			);
			expect(foundList).to.have.property("name", "testList");
			const foundListById = await todolistController.getListById(
				foundList?._id
			);
			expect(foundListById).to.have.property("name", "testList");
		});
		it("Should delete a list", async () => {
			const foundList = await todolistController.getListByName(
				"testList"
			);
			expect(foundList).to.have.property("name", "testList");
			const listToDelete = await todolistController.deleteList(
				foundList?._id
			);
			expect(listToDelete).to.not.be.undefined;
			expect(listToDelete).to.not.be.null;
		});
	});
});
