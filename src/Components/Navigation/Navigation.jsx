import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';

function Navigation() {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home">Logo</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/posts">Posts</Nav.Link>
						<Nav.Link href="/todos">Todos</Nav.Link>
						<Nav.Link href="/users">Users</Nav.Link>
					</Nav>
				</Container> 
			</Navbar>
		
		</>
	);
}

export default Navigation;
