import React, {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../../redux/actions';
import Container from 'react-bootstrap/Container';
import './UserList.css';



function UserList() {
	const dispatch = useDispatch();
	const users = useSelector((state) => state.users);

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	return (

		<Container>
			
			<div className='cards'>
				{users.map((user) => (
					<div className='card' key={user.id}>
						<Link to={`/users/${user.id}`} style={{textDecoration: "none"}}>
							<div className='user-info'>
								<h2 className='name'>{user.name}</h2>
								<p className='username'>Username: {user.username}</p>
								</div>
						</Link>
					</div>
				))}
			</div>
		</Container>

	);
}

export default UserList;

