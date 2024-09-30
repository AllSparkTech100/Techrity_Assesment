import { Container, Row, Col } from "react-bootstrap";
import { FaPlayCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import {
  ipsum,
  Ipsum,
  lorem,
  oldIpsum,
  newIpsum,
  headphone,
} from "../lib/Images";
import {
  MdFamilyRestroom,
  MdOutlineHealthAndSafety,
  MdCastForEducation,
} from "react-icons/md";
import { RiPsychotherapyFill } from "react-icons/ri";
import "./styles.scss";

function Home() {
  return (
    <>
      <Container className="hero-carrier bg-image" fluid>
        <Container className="hero-inner">
          <h2 className="text-white">
            {" "}
            Inclusive Care for <br /> Chldren with Special <br /> Needs
          </h2>
          <div className="d-flex align-items-center mt-5">
            <button className="page-btn">
              <a href="" className="text-dark">
                What We Do
              </a>
            </button>
            <button className="ms-3 page-transparent-btn">
              <a
                href="https://www.youtube.com"
                target="_blank"
                className="text-white"
              >
                <FaPlayCircle className="text-white" size={25} /> Play Video
              </a>
            </button>
          </div>

          <div className="hero-bottom d-flex align-items-center">
            <p className="text-white">230 Children Under Our Care </p>
            <div className="line mb-3 mx-3"></div>
            <p className="text-white">58 Donations Collected</p>
          </div>
        </Container>
      </Container>

      <section className="middle-item">
        <Container>
          {/* know us */}
          <Row>
            <Col md={6} sm={12} lg={6}>
              <div className="middle-first">
                <h5 className="my-3 text-dark fw-bold">KNOW ABOUT US</h5>
                <h4 className="text-dark text-capitalize">
                  we provide a place for <br /> children with special needs
                </h4>
                <p className="mt-4 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate, consequuntur!
                </p>
                <p className="mt-4 mb-4">
                  consectetur adipisicing elit. Quidem harum repellendus iste
                  voluptates, atque laudantium corporis inventore quae fuga
                  eius? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione numquam sequi provident placeat veritatis mollitia ad
                  ut voluptates, fugit et voluptatibus earum. Explicabo
                  voluptatibus inventore praesentium vitae consequuntur! Error,
                  quasi.
                </p>

                <button className="mt-3 mt-md-5 mt-lg-5 page-btn bg-warning">
                  <a href="" className="text-dark">
                    Learn More
                  </a>
                </button>
              </div>
            </Col>
            <Col md={6} sm={12} lg={6} className="mt-5 mt-md-0 mt-lg-0">
              <div className="middle-inner-img bg-image">
                <FaPlayCircle className="text-white" size={90} />
              </div>
            </Col>
          </Row>
          {/* Supporters */}
          <section>
            <div className="d-flex mt-5 align-items-center">
              <h5 className="text-uppercase">Our supporters</h5>
              <div className="support-line ms-3 mb-2 bg-dark"></div>
            </div>

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
        </Container>
      </section>
      {/* Service section */}
      <section className=" service_carrier">
        <Container>
          <Row>
            <Col md={6} sm={12} lg={6}>
              <section className="service-inner">
                <h5 className="my-3 fw-bold text-uppercase">what we do</h5>
                <h4 className="text-dark fw-bold text-capitalize">
                  some services we provide <br /> for our children
                </h4>
                <p className="my-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aspernatur iusto quibusdam voluptatem numquam? Sequi, id!
                </p>
                {/* List of services */}
                <div className="service-list">
                  <div className="serv-list-item">
                    <div className="serv-icon">
                      <MdFamilyRestroom size={30} />
                    </div>
                    <div className="serv-text ms-3">
                      <h5>Family Support</h5>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Rerum, doloribus tempora? Unde ab provident odit
                        officiis libero eius quo eaque!
                      </p>
                    </div>
                  </div>
                  <div className="serv-list-item">
                    <div className="serv-icon">
                      <MdOutlineHealthAndSafety size={30} />
                    </div>
                    <div className="serv-text ms-3">
                      <h5>Health Benefits</h5>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Rerum, doloribus tempora? Unde ab provident odit
                        officiis libero eius quo eaque!
                      </p>
                    </div>
                  </div>
                  <div className="serv-list-item">
                    <div className="serv-icon">
                      <MdCastForEducation size={30} />
                    </div>
                    <div className="serv-text ms-3">
                      <h5 className="text-capitalize">Scholarships</h5>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Rerum, doloribus tempora? Unde ab provident odit
                        officiis libero eius quo eaque!
                      </p>
                    </div>
                  </div>
                  <div className="serv-list-item">
                    <div className="serv-icon">
                      <RiPsychotherapyFill size={30} />
                    </div>
                    <div className="serv-text ms-3">
                      <h5 className="text-capitalize">Therapy</h5>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Rerum, doloribus tempora? Unde ab provident odit
                        officiis libero eius quo eaque!
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </Col>
            <Col md={6} sm={12} lg={6}>
              <div className="head-img">
                <img
                  src={headphone}
                  className="img-fluid "
                  alt="Thinking Child"
                  loading="lazy"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Projects */}
      <Container className="projects">
        <div className="intro-text">
          <h5 className="text-uppercase mb-3 fw-bold">projects we have done</h5>
          <h4 className="text-capitalize fw-bold ms-3">
            we are creating a place <br /> where children with special <br />{" "}
            needs can thrive
          </h4>
          {/* Project  List */}
          <div className="project-list">
            <Row>
              {/* mission */}
              <Col md={4} lg={4} sm={12} className='mb-md-0 mb-lg-0  mb-4'>
                <div className=" mission mission bg-image">
                  <div className="ms-3">
                    <h5 className="text-capitalize">
                      Mission smile 1k: <br /> outdoor charity
                    </h5>
                    <p className="my-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laudantium eaque aliquam ducimus? Vitae dolorem possimus
                    </p>

                    <button className="page-btn miss-btn">
                      <a href="" className="text-black fw-medium">
                        Learn More
                      </a>
                    </button>
                  </div>
                </div>
              </Col>
              {/* excursion */}
              <Col md={4} lg={4} sm={12} className='mb-md-0 mb-lg-0  mb-4'>
                <div className="mission excursion bg-image">
                  <div className="ms-3">
                    <h5 className="text-capitalize">weekly excursion</h5>
                    <p className="my-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laudantium eaque aliquam ducimus? Vitae dolorem possimus
                    </p>

                    <button className="page-btn miss-btn">
                      <a href="" className="text-black fw-medium">
                        Learn More
                      </a>
                    </button>
                  </div>
                </div>
              </Col>
              {/* awareness */}
              <Col md={4} lg={4} sm={12} className='mb-md-0 mb-lg-0  mb-4'>
                <div className="mission awareness bg-image">
                  <div className="ms-3">
                    <h5 className="text-capitalize">
                      Monthly public <br /> awareness
                    </h5>
                    <p className="my-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laudantium eaque aliquam ducimus? Vitae dolorem possimus
                    </p>

                    <button className="page-btn miss-btn">
                      <a href="" className="text-black fw-medium">
                        Learn More
                      </a>
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>

      <Container className="donations" fluid>
        <Container className="donations_inner">
          <Row>
            <Col md={7} lg={7} sm={12}>
              <h5 className="text-white">
                How we spend your <br />
                donations and where it goes
              </h5>
              <p className="my-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Similique consequatur voluptatem, ut nulla veritatis accusantium
                totam ad, optio incidunt velit eum! Fugiat necessitatibus
                laborum assumenda.
              </p>
            </Col>
          <Col md={5} lg={5} sm={12}>
            <div className="graph-circle">
<div className="graph-inner">
  
</div>
            </div>
          </Col>
          </Row>
        </Container>
      </Container>
      {/* Journey Section */}
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

export default Home;
