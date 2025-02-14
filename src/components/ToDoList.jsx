/* eslint-disable react/prop-types */
import EditableTable from '@components/Table/EditableTable';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from '@store/todoSlice';
import HeaderWithButton from '@components/HeaderWithButton';
import { handleDownloadPDF } from '@utils/downloadList';
import NotificationCenter from '@components/NotificationCeter';
import useNotifications from '@src/hooks/useNotifications';

const columns = [
	{ key: 'task', type: 'text', header: 'Task', className: 'w-1/2' },
	{
		key: 'target',
		type: 'date',
		header: 'Target Date',
		className: 'w-1/5',
	},
	{
		key: 'status',
		type: 'dropdown',
		header: 'Status',
		className: 'w-1/5',
		options: ['Not Started', 'In Progress', 'Completed'],
	},
];
const TodoList = () => {
	const todoList = useSelector((state) => state.todos);
	const dispatch = useDispatch();
	const { notifications, showNotification } = useNotifications();

	const handleUpdate = (id, key, value) => {
		dispatch(updateTodo({ id, key, value })); // Dispatch Redux action
	};

	const handleAddRow = () => {
		dispatch(addTodo({ task: '', target: '', status: '' })); // Dispatch Redux action
	};

	const handleDeleteRow = (id) => {
		dispatch(deleteTodo(id)); // Dispatch Redux action
	};

	const handleDownload = (heading) => {
		handleDownloadPDF(todoList, columns, heading, showNotification);
	};

	return (
		<>
			<HeaderWithButton
				heading="To-Do List"
				onDownload={handleDownload}
				buttonText="Download PDF"
			/>
			<EditableTable
				columns={columns}
				data={todoList}
				onUpdate={handleUpdate}
				onAddRow={handleAddRow}
				onDeleteRow={handleDeleteRow}
				showNotification={showNotification}
			/>
			<NotificationCenter notifications={notifications} />
		</>
	);
};

export default TodoList;
