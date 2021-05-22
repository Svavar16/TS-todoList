// here we are going to place the controllers
import todoListModel, { itemsModel } from "../Model/listModel";

const todolistController = {
	getAllLists() {
		return todoListModel.find() || [];
	},

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

	getListById(listId: string) {
		return todoListModel.findById(listId) || [];
	},
};
