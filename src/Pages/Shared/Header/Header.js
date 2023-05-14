import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import NavDropdown from "react-bootstrap/NavDropdown";
import LeftSideNav from "../LeftSideNav/LeftSideNav.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider.js";
import { FaUser } from "react-icons/fa";
import { toast } from "react-hot-toast";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("logged out successfully")
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Navbar className="mb-4" bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">Dragon News</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">All news</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                {user?.uid ? (
                  <>
                    
                    <Button variant="outline-warning" onClick={handleLogout}>
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link   to="/login"><Button variant="outline-info">Login</Button></Link>
                    <Link to="register">Register</Link>
                  </>
                )}
              </Nav.Link>
              
              <Nav.Link>
                {user?.photoURL ? (
                  <>
                  <Image
                    style={{ height: "30px" }}
                    src={user?.photoURL}
                    roundedCircle
                  />
                  <p className="me-4 text-danger"><b>{user?.displayName}</b></p>
                  </>
                ) : (
                  <>
                  <FaUser></FaUser>
                  <span className="me-4 text-danger"><b>{user?.displayName}</b></span>
                  </>
                )}
              </Nav.Link>
            </Nav>
            <div className="d-lg-none">
              <LeftSideNav></LeftSideNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
