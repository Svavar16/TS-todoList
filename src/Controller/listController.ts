// here we are going to place the controllers
import todoListModel, {
	itemsModel,
	Iitems,
	ItodoList,
} from "../Model/listModel";

/**
 * todo list controllers
 */
const todolistController = {
	/**
	 * Returns all lists
	 * @returns JSON
	 */
	getAllLists() {
		return todoListModel.find() || [];
	},
	/**
	 * Creates a new item within a list
	 * @param item String
	 * @param listId String
	 * @returns JSON
	 */
	async postNewItem(item: string, listId: string) {
		const newItem: any = itemsModel.create(item);
		const listToSaveToo = todoListModel.findById(
			listId,
			function (err: any, foundList: ItodoList) {
				foundList.items.push(newItem);
			}
		);
		return listToSaveToo;
	},

	/**
	 * Returns a list by ID
	 * @param listId String
	 * @returns JSON
	 */
	getListById(listId: string) {
		return todoListModel.findById(listId) || [];
	},

	/**
	 * Updates a item within a list
	 * @param updatedItem String
	 * @param itemId String
	 * @returns mongoDB Query
	 */
	async updateItemInList(updatedItem: string, itemId: string) {
		return itemsModel.findByIdAndUpdate(itemId, { item: updatedItem });
	},

	/**
	 * Updates a specifics lists name
	 * @param listId string
	 * @param newName string
	 * @returns mongoDB Query
	 */
	async updateListName(listId: string, newName: string) {
		return todoListModel.findByIdAndUpdate(listId, { name: newName });
	},

	/**
	 * Deletes a specific item
	 * @param itemId String
	 * @returns mongoDB query
	 */
	deleteItem(itemId: string) {
		return itemsModel.findByIdAndDelete(itemId);
	},

	/**
	 * should delete a list, and all that it contains
	 * @param listId string
	 * @returns mongoDB query
	 */
	async deleteList(listId: string) {
		const listToDelete: any = await todoListModel.findById(listId);
		for (var i = 0; i < listToDelete.items.length; i++) {
			await itemsModel.findByIdAndDelete(listToDelete.items[i]._id);
		}
		return todoListModel.findByIdAndDelete(listId);
	},
};
