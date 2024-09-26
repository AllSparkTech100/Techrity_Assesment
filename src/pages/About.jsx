import { Container, Row, Col } from "react-bootstrap";
import "./styles.scss";
import { FaPlayCircle } from "react-icons/fa";
function About() {
  return (
    <>
      <Container className="about-intro">
        <Row>
          <Col sm={12} md={7} lg={7}>
            <h5 className="text-uppercase">Know about us</h5>
            <h4 className="fw-bold">We are a non-governmental organization</h4>
          </Col>
          <Col sm={12} md={5} lg={4}>
            <p className="fw-bold text-capitalize">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
              molestiae officia, recusandae ut eos asperiores assumenda eaque
              fugit nostrum officiis in, laboriosam dolorem iure ea velit
              tenetur? Dolor, nam quos.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit,
              architecto! Voluptate qui molestias cumque minus delectus
              distinctio itaque facere facilis!
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="statements" fluid>
        <Container className="bg-image people">
          <FaPlayCircle size={40} />
        </Container>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
