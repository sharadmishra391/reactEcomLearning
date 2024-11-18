import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const Topmenu = () => {
  return (
    <>
      <Navbar bg="warning" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Watch Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="shop">
              Shop
            </Nav.Link>
            <Nav.Link as={Link} to="menswear">
              Mens Watch
            </Nav.Link>
            <Nav.Link as={Link} to="womenwear">
              Womens Watch
            </Nav.Link>
            <Nav.Link as={Link} to="kidswear">
              Kids Watch
            </Nav.Link>
            <Nav.Link as={Link} to="cart">
              Cart
            </Nav.Link>
            <Nav.Link as={Link} to="contact">
              Contact us
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Topmenu;
