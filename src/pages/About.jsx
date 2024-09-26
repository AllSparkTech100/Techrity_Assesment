import { Container, Row, Col } from "react-bootstrap";
import "./styles.scss";
import { FaPlayCircle } from "react-icons/fa";
import {
  ipsum,
  Ipsum,
  lorem,
  oldIpsum,
  newIpsum,
  ngo_award,
  best_award,
  csn_award,
  global_award, care
} from "../lib/Images";

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

      <Container className="statements h-100 pb-5" fluid>
        <Container className="bg-image people">
          <FaPlayCircle size={40} />
        </Container>
        <div className="container ps-md-5 pe-md-5 pe-lg-5 ps-lg-5 p-0 statement-inner">
          <Row>
            <Col md={6} lg={6} sm={12}>
              <div>
                <h5 className="text-uppercase fw-bold my-3">our mission </h5>
                <h5 className="text-uppercase fw-bold my-3">
                  We make sure to provide inclusive care for children with
                  special needs
                </h5>
                <p className="my-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus reiciendis, nesciunt voluptatum placeat fugiat,
                  repellat eum perspiciatis nostrum sapiente fugit tenetur
                  distinctio est. Magnam sunt aliquid, harum officia culpa
                  libero. Quos tempora doloribus error! Sunt culpa suscipit illo
                  quasi veniam?
                </p>
              </div>
            </Col>
            <Col md={6} lg={6} sm={12}>
              <div>
                <h5 className="text-uppercase fw-bold my-3">our vision </h5>
                <h5 className="text-uppercase fw-bold my-3">
                  provide more inclusive care to children around the world
                </h5>
                <p className="my-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus reiciendis, nesciunt voluptatum placeat fugiat,
                  repellat eum perspiciatis nostrum sapiente fugit tenetur
                  distinctio est. Magnam sunt aliquid, harum officia culpa
                  libero. Quos tempora doloribus error! Sunt culpa suscipit illo
                  quasi veniam?
                </p>
              </div>
            </Col>
          </Row>

          <section>
            <div className="d-flex mt-5 align-items-center">
              <h5 className="text-uppercase fs-6">Our supporters</h5>
            </div>
            {/* logos */}
            <div className="d-flex my-3 flex-sm-wrap justify-content-between align-items-center">
              <div>
                <img src={ipsum} alt="" loading="lazy" />
              </div>
              <div>
                {" "}
                <img src={newIpsum} alt="" loading="lazy" />
              </div>
              <div>
                <img src={Ipsum} alt="" loading="lazy" />
              </div>
              <div>
                <img src={oldIpsum} alt="" loading="lazy" />
              </div>
              <div>
                <img src={lorem} alt="" loading="lazy" />
              </div>
            </div>
          </section>
        </div>
      </Container>
      {/* Awards */}
      <Container className="awards">
        <div className="awards-text text-capitalize">awards & recognitions</div>

        <div className="mt-5 flex-sm-wrap d-flex align-items-center justify-content-between">
          <div>
            <img src={ngo_award} loading="lazy" alt="" />
          </div>
          <div>
            <img src={best_award} loading="lazy" alt="" />
          </div>
          <div>
            <img src={csn_award} loading="lazy" alt="" />
          </div>
          <div>
            <img src={global_award} loading="lazy" alt="" />
          </div>
        </div>
      </Container>
      {/* a thousand miles */}
      <Container className="milestone">
        <div className="mile-inner">
          <Row>
            <Col md={6} lg={6} sm={6}>
              <h5 className="my-3 text-uppercase fw-bold">our journey</h5>
              <h4 className="my-3 text-capitalize fw-bold">
                how we raised 34M
              </h4>

              <p className="my-4 ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maxime, distinctio eaque. At praesentium natus dicta! Numquam
                atque, tempore accusantium aspernatur eaque voluptatibus
                similique iure, dignissimos quod explicabo quo error! Vel harum
                labore suscipit autem non itaque eos. Non, quaerat cumque.
              </p>

              <div className="mt-5 d-flex align-items-center justify-content-between">
                <div className="d-flex flex-column">
                  <h5 className="fw-bold fs-2">34M+</h5>
                  <p className="text-capitalize">Donations Recieved</p>
                </div>
                <div className="d-flex flex-column">
                  <h5 className="fw-bold fs-2">400+</h5>
                  <p className="text-capitalize">Volunteers</p>
                </div>
                <div className="d-flex flex-column">
                  <h5 className="fw-bold fs-2">20+</h5>
                  <p className="text-capitalize">Care Homes</p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={6} sm={6} className="">
             <div className="journey-image">
              <img src={care} alt="" loading="lazy"/>
             </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default About;
