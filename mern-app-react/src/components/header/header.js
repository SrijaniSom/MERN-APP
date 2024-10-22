import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand to="/" as={Link}>My App</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link to="/" as={Link}>Dashboard</Nav.Link>
                        <Nav.Link to="/user" as={Link}>Post User</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>

    )
}

export default Header;