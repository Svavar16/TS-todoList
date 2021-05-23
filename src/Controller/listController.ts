// here we are going to place the controllers
import todoListModel, { itemsModel } from "../Model/listModel";

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
		interface Iitems {
			item: string;
		}

		interface ItodoList {
			name: string;
			items: [item: Iitems];
		}
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
	async updateListName(listId: string, newName: string) {},

	deleteItem() {},

	deleteList() {},
};
