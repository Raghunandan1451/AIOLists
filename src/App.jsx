import Home from '@src/pages/Home';
import ShoppingList from '@components/Shopping/ShoppingList';
import TodoList from '@components/ToDo/ToDoList';
import QRCodeGenerator from '@components/QRCode/QRCodeGenerator';
import MarkdownEditor from '@components/MarkDown/MarkdownEditor';

import Layout from '@layout/Layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />, // Layout contains Navbar and Outlet
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/todo', element: <TodoList /> },
			{ path: '/shopping', element: <ShoppingList /> },
			{ path: '/qrgen', element: <QRCodeGenerator /> },
			{ path: '/markdown', element: <MarkdownEditor /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
