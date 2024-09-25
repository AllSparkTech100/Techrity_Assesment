import { Container, Row, Col } from "react-bootstrap";
import { FaPlayCircle } from "react-icons/fa";
import { ipsum, Ipsum, lorem, oldIpsum, newIpsum } from "../lib/Images";
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

                <button className="mt-5 page-btn bg-warning">
                  <a href="" className="text-dark">
                    Learn More
                  </a>
                </button>
              </div>
            </Col>
            <Col md={6} sm={12} lg={6}>
              <div className="middle-inner-img bg-image">
                <FaPlayCircle className="text-white" size={90} />
              </div>
            </Col>
          </Row>
          {/* Supporters */}
          <section>
            <div className="d-flex mt-5 align-items-center">
              <h5 className="text-uppercase fs-6">Our supporters</h5>
              <div className="support-line ms-3 mb-2 bg-dark"></div>
            </div>

            <div className="d-flex mt-5 flex-wrap justify-content-between align-items-center">
              <img src={ipsum} alt="" loading="lazy" />
              <img src={newIpsum} alt="" loading="lazy" />
              <img src={oldIpsum} alt="" loading="lazy" />
              <img src={lorem} alt="" loading="lazy" />
              <img src={Ipsum} alt="" loading="lazy" />
            </div>
          </section>
        </Container>
      </section>
      {/* Service section */}
      <section className=" service_carrier">
        <Container>
          <Row>
            <section className="service-inner">
              <Col md={6} sm={12} lg={6}>
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
                    <div className="serv-text">
                      <h5>Family Support</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolore, aliquam.
                      </p>
                    </div>
                  </div>
                  <div className="serv-list-item">
                    <div className="serv-icon">
                      <MdOutlineHealthAndSafety size={30} />
                    </div>
                    <div className="serv-text">
                      <h5>Health Benefits</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolore, aliquam.
                      </p>
                    </div>
                  </div>
                  <div className="serv-list-item">
                    <div className="serv-icon">
                      <MdCastForEducation size={30} />
                    </div>
                    <div className="serv-text">
                      <h5 className="text-capitalize">Scholarships</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolore, aliquam.
                      </p>
                    </div>
                  </div>
                  <div className="serv-list-item">
                    <div className="serv-icon">
                      <RiPsychotherapyFill size={30} />
                    </div>
                    <div className="serv-text">
                      <h5 className="text-capitalize">Therapy</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolore, aliquam.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} sm={12} lg={6}>
              <div className="head-img bg-image">
              </div>
              </Col>
            </section>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
