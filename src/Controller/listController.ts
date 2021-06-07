// here we are going to place the controllers
import itemsModel, { listModel } from "../Model/listModel";

/**
 * todo list controllers
 */
const todolistController = {
	/**
	 * Returns all lists
	 * @returns JSON
	 */
	getAllLists() {
		return listModel.find() || [];
	},

	/**
	 * Creates a new list
	 * @param name String
	 * @returns mongoDB
	 */
	postNewList(name: string) {
		return listModel.create({ name: name });
	},

	/**
	 * Returns a list by ID
	 * @param listId String
	 * @returns JSON
	 */
	getListById(listId: string) {
		return listModel.findById(listId) || [];
	},

	/**
	 * Returns a list by name
	 * @param name
	 * @returns mongoDB query
	 */
	getListByName(name: string) {
		return listModel.findOne({ name: name });
	},

	/**
	 * Updates a specifics lists name
	 * @param listId string
	 * @param newName string
	 * @returns mongoDB Query
	 */
	async updateListName(listId: string, newName: string) {
		return listModel.findByIdAndUpdate(listId, { name: newName });
	},

	/**
	 * should delete a list, and all that it contains
	 * @param listId string
	 * @returns mongoDB query
	 */
	async deleteList(listId: string) {
		const itemInList: any = await itemsModel.find({
			listToConnect: listId,
		});
		if (itemInList.length === 0) {
			return listModel.findByIdAndDelete(listId);
		} else {
			for (let i = 0; i < itemInList.length; i++) {
				itemsModel.findByIdAndDelete(itemInList[i]._id);
			}
			return listModel.findByIdAndDelete(listId);
		}
	},
};

export default todolistController;
