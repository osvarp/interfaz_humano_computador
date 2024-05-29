import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ProfileImage from "./profileImage";
function Navbarr() {
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">U-Commerce</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="Explorar">Explore</Nav.Link>
              <Nav.Link href="MyProducts">My products</Nav.Link>
              <Nav.Link href="/Registro">Log out</Nav.Link>
            </Nav>
            <ProfileImage></ProfileImage>
          </Container>
        </Navbar>
        <br></br>
        </>
    )
}

export default Navbarr;