import React from "react";
import Card from "react-bootstrap/Card";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";


function SkillSetCards(props) {
  return (
    <Card className="project-card-view" bg="secondary">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "left" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {props.items.map((item, index) => (
          <ListGroup.Item variant="dark" textAlign="left" key={index}>{item}</ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
}
export default SkillSetCards;
