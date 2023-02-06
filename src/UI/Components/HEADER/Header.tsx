import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom"

export const Header = () =>{
    return(
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/Home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/Home">Home</Link>
            <Link to="/Registration">register</Link>
            <Link to="/login">login</Link>
          </Nav>
        </Container>
      </Navbar>
    )
}