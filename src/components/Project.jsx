import "./components.scss";
import { Card, Col, Row } from "react-bootstrap";
import { mission } from "../lib/Images";

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
      {List.map((items, index) => {
        <Row key={index}>
          <Col>
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
                    <a href="" className="text-dark">Learn More</a>
                </button>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>;
      })}
    </>
  );
}

export default Project;
