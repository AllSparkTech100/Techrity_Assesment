import { Container, Row, Col } from "react-bootstrap";
import "./styles.scss";
import Team from "../components/Team";
import { FaPlayCircle, FaArrowRight } from "react-icons/fa";
import {
  ipsum,
  Ipsum,
  lorem,
  oldIpsum,
  newIpsum,
  ngo_award,
  best_award,
  csn_award,
  global_award,
  care,
} from "../lib/Images";

function About() {
  return (
    <>
      {/* Intro section */}
      <Container className="about-intro">
        <Row>
          <Col sm={12} md={7} lg={7} className="mb-md-0 mb-4 mb-lg-0">
            <h5 className="text-uppercase">Know about us</h5>
            <h4 className="fw-bold">We are a non-governmental organization</h4>
          </Col>
          <Col sm={12} md={5} lg={4} className="mb-md-0 mb-5 mb-lg-0">
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

      <Container className="statements pb-5" fluid>
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
              <h5 className="text-uppercase fs-4">Our supporters</h5>
            </div>
            {/* logos */}
            <div className="d-flex my-3 flex-wrap justify-content-between align-items-center">
              <div className="col-sm-3 mb-md-0 mb-lg-0 mb-3 col-md-2">
                <img src={ipsum} alt="" loading="lazy" />
              </div>
              <div className="col-sm-3 mb-md-0 mb-lg-0 mb-3 col-md-2">
                {" "}
                <img src={newIpsum} alt="" loading="lazy" />
              </div>
              <div className="col-sm-3 mb-md-0 mb-lg-0 mb-3 col-md-2">
                <img src={Ipsum} alt="" loading="lazy" />
              </div>
              <div className="col-sm-3 mb-md-0 mb-lg-0 mb-3 col-md-2">
                <img src={oldIpsum} alt="" loading="lazy" />
              </div>
              <div className="col-sm-3 mb-md-0 mb-lg-0 mb-3 col-md-2">
                <img src={lorem} alt="" loading="lazy" />
              </div>
            </div>
          </section>
        </div>
      </Container>
      {/* Awards */}
      <Container className="awards">
        <div className="awards-text text-capitalize">awards & recognitions</div>

        <div className="mt-5 flex-wrap d-flex align-items-center justify-content-between">
          <div className="mb-lg-0 mb-md-0 mb-5">
            <img src={ngo_award} loading="lazy" alt="" />
          </div>
          <div className="mb-lg-0 mb-md-0 mb-5">
            <img src={best_award} loading="lazy" alt="" />
          </div>
          <div className="mb-lg-0 mb-md-0 mb-5">
            <img src={csn_award} loading="lazy" alt="" />
          </div>
          <div className="mb-lg-0 mb-md-0 mb-5">
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
                <img src={care} alt="" loading="lazy" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      {/* team */}
      <Container className="teams">
        <div className="team-text text-center my-5">
          <h4 className="text-capitalize fw-bold fs-3">meet our team</h4>
          <p className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
            soluta.
          </p>
        </div>
        <Team />
      </Container>
      <section className="journey-carrier">
        <Container className="bg-image journey">
          <div className="journey-inner">
            <h4 className="text-capitalize text-white">
              you can contribute to provide a place <br /> for children with
              special needs!
            </h4>
            <div className="mx-auto my-3">
              <button className="page-btn vol_btn">
                <a href="" className="text-dark">
                  Join as Volunteer
                </a>
              </button>
              <button className="page-btn ms-3">
                <a
                  href="
      "
                  className="text-dark"
                >
                  Donate
                </a>
              </button>
            </div>
          </div>
        </Container>
        {/* Events */}
        <Container className="events">
          <h5 className="text-capitalize">our events</h5>
          <Row>
            <div className="col-md-6 mb-sm-2 col-lg-6 col-sm-12">
              <div className="calendar-box mt-4">
                <div className="calendar-inner">
                  <div className="date text-capitalize">
                    <h5 className="fw-bold">
                      13 <br />
                      <span className="fw-normal text-uppercase">apr</span>
                    </h5>
                  </div>
                  <div className="day-title text-capitalize">
                    a day with our wonderful children
                  </div>
                  <div className="calendar_btn">
                    <a href="">
                      <FaArrowRight size={15} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h6 className="mt-3 text-uppercase">next events</h6>
              </div>
            </div>
            <div className="col-md-6 mb-sm-2 col-lg-6 col-sm-12">
              <div className="calendar-box mt-4">
                <div className="calendar-inner">
                  <div className="date text-capitalize">
                    <h5 className="fw-bold">
                      25 <br />
                      <span className="fw-normal text-uppercase">apr</span>
                    </h5>
                  </div>
                  <div className="day-title text-capitalize">
                    Seminar: caring for children with autism
                  </div>
                  <div className="calendar_btn">
                    <a href="">
                      <FaArrowRight size={15} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h6 className="mt-3 text-uppercase">next events</h6>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;
