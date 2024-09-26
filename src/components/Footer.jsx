import { Container, Col, Row, Form } from "react-bootstrap";

import "./components.scss";

function Footer() {
  return (
    <div>
      <Container className="text-muted footer-carrier" fluid>
        <Container className="mt-5 text-white">
          <Row>
            <Col md={6} lg={3} sm={6} className="mb-5">
              <h4 className="mb-4 fw-bold brand-name text-white">
                foltfoundation<span className="icon">i</span>
              </h4>
            </Col>

            <Col md={6} lg={3} sm={6} className="mb-5">
              <table>
                <thead>
                  <tr>
                    <th>Home</th>
                    <th>More</th>
                    <th>Connect</th>
                  </tr>
                  <tr>
                    <td>About Us</td>
                    <td>Team</td>
                    <td>What We Do</td>
                    <td>Contact</td>
                    <td></td>
                    <td></td>
                  </tr>
                </thead>
              </table>
            </Col>

            <Col md={6} lg={3} sm={6} className="mb-5">
              <h4 className="mb-4 fw-bold text-capitalize sub-text text-white">
                Subscribe to get latest updates
              </h4>
              <div className="sub_form">
                <Form.Group controlId="formGridEmail">
                  <Form.Control
                    type="email"
                    className="shadow-none rounded-1 p-3"
                    placeholder="Your Email"
                    required
                  />
                </Form.Group>
                <div className="sub_btn ms-auto">
                  {" "}
                  <a href="" className="text-black ">
                    Subscribe
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Footer;
