import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import './UserDetails.css';



	const UserDetail = () => {
		const { userId } = useParams();
		const [albums, setAlbums] = useState([]);
		const [todos, setTodos] = useState([]);
		const [posts, setPosts] = useState([]);

		useEffect(() => {
			const fetchUserDetails = async () => {
				try {
					const [albumsResponse, todosResponse, postsResponse] = await Promise.all([
						axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/albums`),
						axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/todos`),
						axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`),
					]);

					setAlbums(albumsResponse.data);
					setTodos(todosResponse.data);
					setPosts(postsResponse.data);
				} catch (error) {
					console.error('Error fetching user details:', error);
				}
			};

			fetchUserDetails();
		}, [userId]);
		

	

		return (
			<div className='wrapper'>
				
				<Container>
					<Button variant="secondary" style={{marginBottom: 20}}>
						<Link style={{color: "#fff", textDecoration: "none"}}
							to="/users" className="back-button">
							<FontAwesomeIcon icon={faArrowLeft} style={{marginRight: 8}} />
							Back to User's page
						</Link>
					</Button>
					<Tabs defaultActiveKey="todo" id="fill-tab-example" className="mb-3" fill >
						<Tab className="tab" eventKey="Albums" title="Albums" >
							<div className="tab-content">
								<ul className='albums-list'>
									{albums.map((album) => (
										<li className='albums-item' key={album.id}>{album.title}</li>
									))}
								</ul>
							</div>
						</Tab>

						<Tab className="tab" eventKey="todo" title="ToDo">
							<div className="todos-column">
								{todos.length === 0 ? (
									<p>No todos available</p>
								) : (
									<ul className="detailsTodo-list">
										{todos.map((todo) => (
											<li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`} >
												<span className="checkbox">
													{todo.completed ? <FontAwesomeIcon icon={faCheck} /> : null}
												</span>
												<span className="title" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
													{todo.title}
												</span>
											</li>
										))}
									</ul>
								)}
							</div>
						</Tab>

						<Tab className="tab" eventKey="Posts" title="Posts">
							<div>
								<ul className='posts'>
									{posts.map((post) => (
										<li className='post-card' key={post.id}>
										<h2 className='post-card__title'>{post.title}</h2>
										<p className='post-card__content'>{post.body}</p>
										</li>
									))}
								</ul>
							</div>
						</Tab>
					</Tabs>
				</Container>
			</div>
		);

	
	}



export default UserDetail;