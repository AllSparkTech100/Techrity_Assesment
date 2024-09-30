import { Container, Nav, Navbar } from "react-bootstrap";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import "./components.scss";

function NavComp() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <>
      <Navbar expand="lg" sticky="top" className="header">
        <Container>
          <Navbar.Brand href="/">
            foltfoundation<span className="icon">i</span>
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto mx-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/activities">What We Do</Nav.Link>
            </Nav>
            <button className="page-btn bg-dark">
              <a href="/" className="text-white">
                Donate
              </a>
            </button>
          </Navbar.Collapse>

          <button
            className="d-lg-none d-sm-block border-0 shadow-none"
            onClick={toggleMenu}
          >
            {isMenuVisible ? <IoClose size={30} /> : <CiMenuFries size={30} />}
          </button>
        </Container>
      </Navbar>
      {isMenuVisible && (
        <Container fluid className="menu-carrier">
          <div className="menu-inner">
            <ul>
              <Nav.Link href="/" className="">
                Home
              </Nav.Link>
              <Nav.Link href="/about" className="">
                About
              </Nav.Link>
              <Nav.Link href="/activities" className="">
                What We Do
              </Nav.Link>
              <button className="page-btn bg-dark">
                <a href="/" className="text-white">
                  Donate
                </a>
              </button>
            </ul>
          </div>
        </Container>
      )}
    </>
  );
}

export default NavComp;
