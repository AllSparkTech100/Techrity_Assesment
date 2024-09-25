import "./components.scss";
import { Container, Card, Col, Row } from "react-bootstrap";
import { mission } from "../assets/children.jpg";

function Project() {
  const List = [
    {
      title: "Mission 1k: Outdoor charity",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. A cupiditate architecto tempora reprehenderit eius porro excepturi perferendis modi asperiores alias!",
      img: { mission },
    },
    {
      title: "Weekly  Excursions",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. A cupiditate architecto tempora reprehenderit eius porro excepturi perferendis modi asperiores alias!",
      img: { mission },
    },
    {
      title: "Monthly Public Awareness",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. A cupiditate architecto tempora reprehenderit eius porro excepturi perferendis modi asperiores alias!",
      img: { mission },
    },
  ];
  return (
    <>
      <Container>
        <Row>
          {List.map((items, index) => {
            return(
              <Col md={4} sm={12} lg={4} key={index}>
              <Card className="bg-dark text-white">
                <Card.Img
                  src={items.img}
                  alt={items.title}
                  loading="
            lazy"
                />
                <Card.ImgOverlay>
                  <Card.Title>{items.title}</Card.Title>
                  <Card.Text>{items.text}</Card.Text>
                  <button className="page-btn">
                    <a href="" className="text-dark">
                      Learn More
                    </a>
                  </button>
                </Card.ImgOverlay>
              </Card>
            </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Project;
