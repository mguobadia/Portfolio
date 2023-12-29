import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import color_organ from "../../Assets/Projects/color-organ.png";
import ar_vr from "../../Assets/Projects/6205_Final.jpg";
import color_perception from "../../Assets/Projects/960_Final.jpg";
import arm from "../../Assets/Projects/6012_Final.jpg";
import splitbit from "../../Assets/Projects/6013_Final.jpg";
import frogexperiment from "../../Assets/Projects/6021_Mid.jpg";
import axon from "../../Assets/Projects/9422_Final.jpg";
import hopfield from "../../Assets/Projects/hopfield.png";
import broadbandamp from "../../Assets/Projects/BroadbandAmp.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ar_vr}
              title="Xilinx FPGA Augmented Reality Cards (2022)"
              description="A system that
              works in tandem with developed AR Cards to produce 3D images
              that appear on the monitor within the actual environment. While
              moving the camera, in addition to seeing the normal display of
              the environment, the user should be able to view various angles
              of the 3D image on the monitor."
              demoLink="https://drive.google.com/file/d/1xvf4cO9T2AbVHK2qSnpoDD0J3N714rsh/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={broadbandamp}
              title="11.5 MHz 4-Stage BJT Broadband Amplifier (2023)"
              description="Design of a four-stage broadband amplifier utilizing the 2N3906 and 2N3904 bipolar junction transistors (BJT) is described. The approach consists of three dispersed stages of amplification, produced by three NPN (2N3904) transistors, preceded by a buffer stage utilizing a PNP (2n306) transistor."
              demoLink="https://drive.google.com/file/d/1qFC7GwJnJGVELnFU4dsxi2v_cCk0df3M/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={splitbit}
              title="SplitBit: A Low-Cost Automatic Radio-Frequency
              Transponder Sports Timing System for Athletes (2022)"
              description="Protoype design of an RFID-based timing sensor specifically
              targeted to be almost as accurate as freelance timing sensors, or
              photo timing systems at a fraction of the cost."
              demoLink="https://drive.google.com/file/d/1wKciIpohjgggdvym2eGFNILfeUZu6xVX/view?usp=sharing"
            />
          </Col>
                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={color_organ}
              title="Tri-Sectioned LED Frequency Color Organ (2022)"
              description="A system that splits audio input into three freqeuncies activates corresponding LEDs to light up and play with the audio input in a speaker."
              demoLink="https://drive.google.com/file/d/1dJI_nREA7A-8yRROl3Xi8OvLA2yLeDeC/view?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={color_perception}
              title="The Effect of Limited Early Color
              Perception on Object Detection: Comparing
              Human and Machine Performance (2023)"
              description="Using the TensorFloe Lite Model Maker Software CNNs based on the EfficientDet-Lite 4 architecture and the YOLO v8 Model CNN, we train models to accurately sort the Open Images V7 Dataset based on the limitations of color input into the model."
              demoLink="https://drive.google.com/file/d/1uAhY8lfIWA9TruwZm5gfvCSUWx8cjprj/view?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={arm}
              title="Improvement on the SAMTEL ARM microprocessor transistors (2021)"
              description="Investigated ways to improve performance and efficiency on ARM transistor technology."
              demoLink="https://drive.google.com/file/d/1KqzhRJKyHVbH5iC7iQWQBTWM7GR3RpU-/view?usp=sharing"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={frogexperiment}
              title="Examining the Effects of Differing Shaped Voltage Spikes on Action
              Potential Generation in Frog Sciatic Nerves (2022)"
              description="In this electrophysiology experiment, we
              examine the compound-action potential (CAP) generation
              properties in the frog sciatic nerve, an NMJ bundle that is
              centered around the leg."
              demoLink="https://drive.google.com/file/d/1qEBiWf4mdTdDuvAXs-m7iw4WD8Qp57j8/view?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={axon}
              title="Preserving axon signal transmission after axon lesion formation in the central nervous
              system (2022)"
              description="This project aims to gain insights into axon degeneration and aid in future work to circumvent
              axon and signal transmission loss following degeneration by way of delineating the issues and
              limitations we came across via the current literature on the topic through various modes of
              investigation."
              demoLink="https://drive.google.com/file/d/1ZL2JbfmQlQf_CFc0L81ew8yFGsKJGt7c/view?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hopfield}
              title="100-Node Simple Discrete Hopfield Network (2023)"
              description="Created a simple discrete hopfield network in python and measured the differences in synchronous and asynchronous updating, as well as number of prototype vectors."
              demoLink="https://drive.google.com/file/d/13bPMMM39OB2eLF4nxpZo7t_q-czOquxD/view?usp=sharing"
            />
          </Col>
          
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
