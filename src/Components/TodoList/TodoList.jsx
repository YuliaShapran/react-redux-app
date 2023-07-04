import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, toggleTodoComplete, updateTodoTitle, deleteTodo } from '../../redux/actions';
import Container from 'react-bootstrap/Container';
import './TodoList.css';

function TodoList() {
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos);

	useEffect(() => {
		if (todos.length === 0) {
		dispatch(fetchTodos());
		}
	}, [dispatch, todos]);

	const handleTodoClick = (id) => {
		dispatch(toggleTodoComplete(id));
	};

	const handleTodoTitleChange = (id, title) => {
		dispatch(updateTodoTitle(id, title));
	};

	const handleTodoDelete = (id) => {
		dispatch(deleteTodo(id));
	};

	const renderTodo = (todo) => {
		const statusClassName = todo.completed ? 'completed' : 'incomplete';
		return (
			<div key={todo.id}>
				<h2 className='title' onClick={() => handleTodoClick(todo.id)}>
					<span>{todo.completed ? <del>{todo.title}</del> : todo.title}</span>
				</h2>
				{todo.completed && (
					<button className='delete-btn' onClick={() => handleTodoDelete(todo.id)}>Delete</button>
				)}
				<p className='status'>Status: <span className={statusClassName}>{todo.completed ? 'Completed' : 'Incomplete'}</span></p>
			</div>
		);
	};

	return (
			<Container>
				<div className='todo-list'>
					
						{todos.map((todo) => (
							<div className='todo-card' key={todo.id}>
								<div className='wrapper'>
									{todo.editing ? (
									<input
										type="text"
										value={todo.title}
										onChange={(e) => handleTodoTitleChange(todo.id, e.target.value)}
										onBlur={() => handleTodoClick(todo.id)}
										autoFocus
									/>
									) : (
									renderTodo(todo)
								)}
								</div>
							</div>
						))}

				</div>
			</Container>
		);
	}

export default TodoList;


