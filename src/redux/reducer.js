import { combineReducers } from 'redux';
import { FETCH_POSTS_SUCCESS, ADD_POST_SUCCESS, DELETE_POST_SUCCESS } from './actions';


const postsReducer = (state = [], action) => {
	switch (action.type) {
		case FETCH_POSTS_SUCCESS:
			return action.payload;
		case ADD_POST_SUCCESS:
			return [action.payload, ...state];
		case DELETE_POST_SUCCESS:
			return state.filter((post) => post.id !== action.payload);
		default:
			return state;
	}
};



const todosReducer = (state = [], action) => {
	switch (action.type) {
		case 'FETCH_TODOS_SUCCESS':
		return action.payload;
		case 'TOGGLE_TODO_COMPLETE':
		return state.map((todo) =>
			todo.id === action.payload.id ? action.payload : todo
		);
		case 'UPDATE_TODO_TITLE':
		return state.map((todo) =>
			todo.id === action.payload.id
				? { ...todo, title: action.payload.title, editing: false }
				: todo
		);
		case 'DELETE_TODO':
		return state.filter((todo) => todo.id !== action.payload);
		default:
		return state;
	}
};

const usersReducer = (state = [], action) => {
	switch (action.type) {
		case 'FETCH_USERS_SUCCESS':
		return action.payload;
		default:
		return state;
	}
	};

const rootReducer = combineReducers({
	posts: postsReducer,
	todos: todosReducer,
	users: usersReducer,
});

export default rootReducer;
