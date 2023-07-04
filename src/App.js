import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducer.js';
import Navigation from './Components/Navigation/Navigation.jsx';
import HomePage from './Components/HomePage/HomePage.jsx';
import PostsList from './Components/PostList/PostList.jsx';
import TodoList from './Components/TodoList/TodoList.jsx';	
import UserList from './Components/UserList/UserList.jsx';
import UserPage from './Components/UserPage/UserPage.jsx';
import UserDetail from './Components/UserDetail/UserDetails.jsx';


const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
	return (
		<Provider store={store}>
			<Router>
				<div>
					<Navigation />

					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/posts" element={<PostsList />} />
						<Route path="/todos" element={<TodoList />} />
						<Route exact path="/users" element={<UserList />} />
						<Route exact path="/users/:userId" element={<UserPage />} />
						<Route path="/users/:userId/details" element={<UserDetail />} />
					</Routes>
				</div>
			</Router>
		</Provider>
	);
}

export default App;
