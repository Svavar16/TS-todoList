import itemsModel, { listModel } from "../Model/listModel";

const itemsController = {
	/**
	 * Find a single item by id
	 * @param itemId String
	 * @returns mongoDB query
	 */
	getItemById(itemId: string) {
		return itemsModel.findById(itemId);
	},
	/**
	 * Find a single item by name
	 * @param name String
	 * @returns mongoDB query
	 */
	getItemByName(name: string) {
		return itemsModel.findOne({ item: name });
	},

	/**
	 *
	 * @param listId String
	 * @returns mongoDB query
	 */
	getAllItemsWithinAList(listId: string) {
		return itemsModel.find({ listToConnect: listId });
	},

	/**
	 * Creates a new item within a list
	 * @param item String
	 * @param listId String
	 * @returns JSON
	 */
	async postNewItem(item: string, listId: string) {
		const newItemToSave: any = {
			item: item,
			listToConnect: listId,
		};
		const newItem: any = itemsModel.create(newItemToSave);
		return newItem;
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
	 * Deletes a specific item
	 * @param itemId String
	 * @returns mongoDB query
	 */
	deleteItem(itemId: string) {
		return itemsModel.findByIdAndDelete(itemId);
	},
};

export default itemsController;
