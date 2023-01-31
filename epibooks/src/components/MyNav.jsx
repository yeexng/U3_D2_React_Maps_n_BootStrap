import {Navbar, Nav, Container} from "react-bootstrap"

const MyNav = () =>{
    return (
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#">EpiBooks</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Browse</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
      );
}

export default MyNav