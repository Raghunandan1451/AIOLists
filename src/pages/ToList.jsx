import { useState } from "react";
import TodoList from "../components/ToDoList";
import ShoppingList from "../components/ShoppingList";
import { downloadShoppingList, downloadTodoList } from "../utils/downloadList";

const ToList = () => {
	const [activeList, setActiveList] = useState('todo');

	const [todoList, setTodoList] = useState([])
	const [shoppingList, setShoppingList] = useState([])
	const [todoCounter, setTodoCounter] = useState(0)
	const [shoppingCounter, setShoppingCounter] = useState(0)

	const listNames = [
		{
			id: 'todo',
			name: 'To-Do List'
		},
		{
			id: 'shopping',
			name: 'Shopping List'
		}
	];

	const handleButtonClick = (id) => {
		setActiveList(id);
	};

	const handleDownloadClick = (items) => {
		if (activeList === 'todo') {
			downloadTodoList(items);
		} else {
			downloadShoppingList(items);
		}
	};

	return (
		<div className="flex flex-col w-full mx-auto p-4">
			<div className="grid grid-cols-2 gap-4">
				{listNames.map(({id, name}, index) => (
					<button className="min-w-1/2" key={index} onClick={() => handleButtonClick(id)}>
						{name}
					</button>
				))}
			</div>
			{activeList === 'todo' && (
				<TodoList 
					handleDownload={handleDownloadClick} 
					items={todoList} 
					setItems={setTodoList}
					idCounter={todoCounter} 
					setIdCounter={setTodoCounter}
				/>)}
			{activeList === 'shopping' && (
				<ShoppingList 
					handleDownload={handleDownloadClick} 
					items={shoppingList} 
					setItems={setShoppingList}
					idCounter={shoppingCounter} 
					setIdCounter={setShoppingCounter}
				/>)}
		</div>
	)
}

export default ToList