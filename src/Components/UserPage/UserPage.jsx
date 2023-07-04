import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEnvelope, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';


function UserPage() {

	const { userId } = useParams();
	const user = useSelector((state) =>
		state.users.find((user) => user.id === parseInt(userId))
	);

	if (!user) {
		return <Container>
			<div style={{
				display: "flex", 
				fontSize: "4rem",
				fontWeight: 700,
				color: "#fff", 
				marginTop: 100
				}}>User not found
			</div>
			<Link style={{
				color: "#fff",
				textDecoration: "none"
				}}
					to="/users" className="back-button">
					<FontAwesomeIcon icon={faArrowLeft} style={{marginRight: 8}} />
					Back to User's page
			</Link>
		</Container>
	}



	return (
		<Container>
			<Card style={{
				width: '30%',
				marginTop: 60 
			}}>
				<Card.Body>
					<Card.Img variant="top" src={user.photo} alt={user.name} />
					<Card.Title>{user.name}</Card.Title>
					<Card.Text>
						<p>Username: {user.username}</p>
						<p><FontAwesomeIcon icon={faEnvelope} style={{marginRight: 8}} /> Email: {user.email}</p>
						<p><FontAwesomeIcon icon={faPhone} style={{marginRight: 8}} /> Phone: {user.phone}</p>
						<p><FontAwesomeIcon icon={faGlobe} style={{marginRight: 8}} /> Website: {user.website}</p>
					</Card.Text>
					<Button variant="secondary">
						<Link style={{color: "#fff", textDecoration: "none"}}
							to="/users" className="back-button">
							<FontAwesomeIcon icon={faArrowLeft} style={{marginRight: 8}} />
							Back to User's page
						</Link>
					</Button>

					<Button variant="secondary" style={{ marginLeft: 20 }}>

						<Link style={{color: "#fff", textDecoration: "none"}} to={`/users/${userId}/details`} className="view-details-button">View Details</Link>
					</Button>
				</Card.Body>
			</Card>
		</Container>
	);
}

export default UserPage;