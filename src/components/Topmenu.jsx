import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const Topmenu = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">OnlineShopping</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="shop">
              Shop
            </Nav.Link>
            <Nav.Link as={Link} to="menswear">
              Mens Collection
            </Nav.Link>
            <Nav.Link as={Link} to="womenwear">
              Womens Collection
            </Nav.Link>
            <Nav.Link as={Link} to="kidswear">
              Kids Collection
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
