import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/mozi-avataar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Ever since I was 10, I dreamed of a world where BCI Devices would be the norm. A day that I would be able to experience a new country, fictional and non-fictional, from the comfort of my living room.
              <br />
              <br />My research centers around making that a reality from the hardware perspective. Building reliable BCIs that would eliminate concerns of device malfunction within the human body.
              <br />
              <br />By trade, I am an Electrical Engineer with a Neuroscience background, so I have been exposed a variety of different skillsets. I have grown an expertise towards

              <i>
                <b className="purple"> embedded systems, circuit develepment, </b>
              </i>
              and
              <i>
                <b className="purple"> animal experimentation, </b>
              </i>
              with a handful of different coursework and research projects.
              <br />
              <br />
              My fields of Interests include&nbsp;
              <i>
                <b className="purple">Medical Devices, Neurotechnology, </b> and
                areas related to{" "}
                <b className="purple">
                  Brain-Computer Interface Development.
                </b>
              </i>
              <br />
              <br />
              Outside of academic pursuits, I am a Sprinter on my collegiate <b className="purple">Track and Field</b> team, with aspirations of continuing the sport once I graduate, and
              know my way around the 
                <b className="purple">
                  {" "}
                  Poker  
                </b> table, winning a few local collegiate tournaments.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mguobadia"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/chief_guo/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mozig/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
