import axios from 'axios';

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';

export const fetchPostsSuccess = (posts) => ({
	type: FETCH_POSTS_SUCCESS,
	payload: posts,
	});

	export const addPostSuccess = (post) => ({
	type: ADD_POST_SUCCESS,
	payload: post,
	});

export const fetchPosts = () => {
	return async (dispatch) => {
		try {
		const response = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=10');
		dispatch(fetchPostsSuccess(response.data));
		} catch (error) {
		console.error('Error fetching posts:', error);
		}
	};
};

export const addPost = (title, body) => {
	return async (dispatch) => {
		try {
		const response = await axios.post('https://jsonplaceholder.typicode.com/posts', { title, body });
		dispatch(addPostSuccess(response.data));
		} catch (error) {
		console.error('Error adding post:', error);
		}
	};
};
export const deletePostSuccess = (postId) => ({
	type: DELETE_POST_SUCCESS,
	payload: postId,
	});

export const deletePost = (postId) => {
	return async (dispatch) => {
		try {
		await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
		dispatch(deletePostSuccess(postId));
		} catch (error) {
		console.error('Error deleting post:', error);
		}
	};
};


export const fetchTodos = () => {
	return async (dispatch) => {
		try {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos?userId=5');
		const data = await response.json();
		dispatch({ type: 'FETCH_TODOS_SUCCESS', payload: data });
		} catch (error) {
		console.log(error);
		}
	};
};

export const toggleTodoComplete = (id) => {
	return async (dispatch, getState) => {
		const { todos } = getState();
		const todo = todos.find((todo) => todo.id === id);

		if (todo) {
		const updatedTodo = {
			...todo,
			completed: !todo.completed,
		};

		try {
				await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
					method: 'PUT',
					headers: {
					'Content-Type': 'application/json',
					},
					body: JSON.stringify(updatedTodo),
				});

				dispatch({ type: 'TOGGLE_TODO_COMPLETE', payload: updatedTodo });
			} catch (error) {
				console.log(error);
			}
		}
	};
};

export const updateTodoTitle = (id, title) => {
	return { type: 'UPDATE_TODO_TITLE', payload: { id, title } };
};


export const deleteTodo = (id) => {
	return async (dispatch) => {
		try {
		await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
			method: 'DELETE',
		});

		dispatch({ type: 'DELETE_TODO', payload: id });
		} catch (error) {
		console.log(error);
		}
	};
};

export const fetchUsers = () => {
	return async (dispatch) => {
		try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		const data = await response.json();
		dispatch({ type: 'FETCH_USERS_SUCCESS', payload: data });
		} catch (error) {
		console.log(error);
		}
	};
};
