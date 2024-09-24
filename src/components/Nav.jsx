import { Container, Nav, Navbar } from "react-bootstrap";
import "./components.scss";

function NavComp() {
  return (
    <Navbar expand="lg" sticky='top' className="header">
      <Container>
        <Navbar.Brand href="/">
          foltfoundation<span className="icon">i</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/activities">What We Do</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <button className="page-btn bg-dark">
          <a href="/" className="text-white">Donate</a>
        </button>
      </Container>
    </Navbar>
  );
}

export default NavComp;
