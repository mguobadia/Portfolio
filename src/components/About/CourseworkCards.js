import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function CourseworkCards(props) {
  return (
    <Card className="project-card-view">
      
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "left" }}>
          {props.description}
          
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}
export default CourseworkCards;
