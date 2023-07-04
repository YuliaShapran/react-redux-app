import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, addPost, deletePost } from '../../redux/actions';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './PostList.css';



function PostList() {
	const dispatch = useDispatch();
	const posts = useSelector((state) => state.posts);
	const { register, handleSubmit, reset } = useForm();

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	const onSubmit = (data) => {
		dispatch(addPost(data.title, data.body));
		reset();
	};

	const handleDelete = (postId) => {
		dispatch(deletePost(postId));
	};

	return (
		<Container>
			<div className='posts-list'>
				<form className='form' onSubmit={handleSubmit(onSubmit)}>
					<div>
						<label htmlFor="title"></label>
						<input type="text" id="title" placeholder='Title' {...register('title', { required: true })} />
					</div>
					<div>
						<label htmlFor="body"></label>
						<textarea id="body" placeholder='Text ' {...register('body', { required: true })} />
					</div>
					<button className='add-btn' type="submit">Add Post</button>
				</form>
				<ul className='posts'>
					{posts.map((post) => (
						<li className='post-card' key={post.id}>
							<h2 className='post-card__title'>{post.title}</h2>
							<p className='post-card__content'>{post.body}</p>
							<button className='del-btn' onClick={() => handleDelete(post.id)}>Delete Post</button>
						</li>
					))}
				</ul>
			</div>
		</Container>
	);
}



export default PostList;

