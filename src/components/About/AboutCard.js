import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey everyone! My name is <span className="purple">Omozusi Guobadia.</span> I am a first-generation Nigerian-American who was born in New York City, New York, and  
            raised in <span className="purple"> Houston, Texas.</span> 
            <br />
            <br /> I am a first year graduate student pursuing a Master's of Engineering Degree (M.Eng)
            in Computation and Cognition at MIT. My research focus will be in developing multifunctional fibers for unique neuronal recording purposes. I am a research affiliate of Jasanoff's Lab and Anikeeva's Lab.
            <br />
            <br />
            Apart from academic pursuits, here are some other activities that I like doing:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video/Board Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in Weirdly Athletic Activities
            </li>
            <li className="about-activity">
              <ImPointRight /> Consuming Thrillers/Psychological Fiction
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "There is nothing impossible to those brave enough to try"{" "}
          </p>
          <footer className="blockquote-footer">Alexander the Great</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
