import { Card, Row, Col } from "react-bootstrap";
import {
  ellen,
  francis,
  freddy,
  kylie,
  miriam,
  dale,
  john,
  adrian,
} from "../lib/Images";
import { FaTwitter, FaLinkedin, FaFacebookF } from "react-icons/fa";

function Team() {
  const Members = [
    {
      name: "Leornard john davies",
      position: "CO founder",
      img: john,
    },
    {
      name: "francis weber",
      position: "vice chairman",
      img: francis,
    },
    {
      name: "kyla obrien",
      position: "head of authority",
      img: kylie,
    },
    {
      name: "adrian Dxon",
      position: "support executive",
      img: adrian,
    },
    {
      name: "freddy busby",
      position: "project manager",
      img: freddy,
    },
    {
      name: "dale banks",
      position: "Accountant finance",
      img: dale,
    },
    {
      name: "miriam middleton",
      position: "CO founder, CEO",
      img: miriam,
    },
    {
      name: "ellen walton",
      position: "vice chairman",
      img: ellen,
    },
  ];
  return (
    <>
      <Row  className="g-4">
        {Members.map((items, index) => {
          return (
            <Col md={3} sm={12} lg={3}key={index}>
              <Card className="text-center border-0">
                <Card.Img variant="top" src={items.img} />
                <Card.Body>
                  <Card.Title className="text-capitalize fw-bold">{items.name}</Card.Title>
                  <Card.Text className="text-capitalize">{items.position}</Card.Text>
                  <div className="d-flex align-items-center justify-content-center text-dark mt-3">
                    <FaFacebookF size={20} className="text-dark" /> <FaTwitter size={20} className="text-dark" /> &nbsp;{" "}
                    <FaLinkedin size={20} className="text-dark" />
                    &nbsp;
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default Team;
