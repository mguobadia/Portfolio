import React from "react";

import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

import { Container, Row, Col } from "react-bootstrap";
import CourseworkCards from "./CourseworkCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";




function Coursework() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col md={4} className="project-card">
            <CourseworkCards
              
              isBlog={false}
              title="Linear Algebra (18.06)"
              description="Basic subject on matrix theory and linear algebra, emphasizing topics useful in other disciplines, including systems of equations, vector spaces, determinants, eigenvalues, singular value decomposition, and positive definite matrices. Applications to least-squares approximations, stability of differential equations, networks, Fourier transforms, and Markov processes. Uses linear algebra software."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <CourseworkCards
              
              isBlog={false}
              title="Solid State Circuits (6.2092)"
              description="Fosters deep understanding and intuition that is crucial in innovating analog circuits and optimizing the whole system in bipolar junction transistor (BJT) and metal oxide semiconductor (MOS) technologies. Covers both theory and real-world applications of basic amplifier structures, operational amplifiers, temperature sensors, bandgap references. Covers topics such as noise, linearity and stability. Homework and labs give students access to CAD/EDA tools to design and analyze analog circuits. Provides practical experience through lab exercises, including a broadband amplifier design and characterization."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <CourseworkCards
              
              isBlog={false}
              title="Analysis and Design of Digital Integrated Circuits (6.6010)"
              description="Device and circuit level optimization of digital building blocks. Circuit design styles for logic, arithmetic, and sequential blocks. Estimation and minimization of energy consumption. Interconnect models and parasitics, device sizing and logical effort, timing issues (clock skew and jitter), and active clock distribution techniques. Memory architectures, circuits (sense amplifiers), and devices. Evaluation of how design choices affect tradeoffs across key metrics including energy consumption, speed, robustness, and cost. Extensive use of modern design flow and EDA/CAD tools for the analysis and design of digital building blocks and digital VLSI design for labs and design projects."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <CourseworkCards
              
              isBlog={false}
              title="Machine-Motivated Human Vision (9.60)"
              description="Explores how studies of human vision can be motivated by, and enhance the capabilities of, machine-based systems. Considers the twin questions of how the performance of state-of-the-art machine vision systems compares with that of humans, and what kinds of strategies the human visual system uses in tasks where human performance exceeds that of machines."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <CourseworkCards
             
              isBlog={false}
              title="Signal Processing (6.300)"
              description="Fundamentals of signal processing, focusing on the use of Fourier methods to analyze and process signals such as sounds and images. Topics include Fourier series, Fourier transforms, the Discrete Fourier Transform, sampling, convolution, deconvolution, filtering, noise reduction, and compression. Applications draw broadly from areas of contemporary interest with emphasis on both analysis and design."
                         
            />
          </Col>

          <Col md={4} className="project-card">
            <CourseworkCards
              
              isBlog={false}
              title="Emergent Computations Within Distributed Neural Circuits (9.53)"
              description="Addresses the fundamental scientific question of how the human brain still outperforms the best computer algorithms in most domains of sensory, motor and cognitive function, as well as the parallel and distributed nature of neural processing (as opposed to the serial organization of computer architectures/algorithms) required to answer it. Explores the biologically plausible computational mechanisms and principles that underlie neural computing, such as competitive and unsupervised learning rules, attractor networks, self-organizing feature maps, content-addressable memory, expansion recoding, the stability-plasticity dilemma, the role of lateral and top-down feedback in neural systems, the role of noise in neural computing."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <CourseworkCards
              
              isBlog={false}
              title="Principles of Neuroengineering (9.422)"
              description="Covers how to innovate technologies for brain analysis and engineering, for accelerating the basic understanding of the brain, and leading to new therapeutic insight and inventions. Focuses on using physical, chemical and biological principles to understand technology design criteria governing ability to observe and alter brain structure and function. Topics include optogenetics, noninvasive brain imaging and stimulation, nanotechnologies, stem cells and tissue engineering, and advanced molecular and structural imaging technologies."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <CourseworkCards
              
              isBlog={false}
              title="Digital Systems Laboratory (6.2050)"
              description="Lab-intensive subject that investigates digital systems with a focus on FPGAs. Lectures and labs cover logic, flip flops, counters, timing, synchronization, finite-state machines, digital signal processing, communication protocols, and modern sensors. Prepares students for the design and implementation of a large-scale final project of their choice: games, music, digital filters, wireless communications, video, or graphics. Extensive use of System/Verilog for describing and implementing and verifying digital logic designs."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <CourseworkCards
              
              isBlog={false}
              title="Oral Communication (6.UAT)"
              description="Provides instruction in aspects of effective technical oral presentations and exposure to communication skills useful in a workplace setting. Students create, give and revise a number of presentations of varying length targeting a range of different audiences."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <CourseworkCards
              
              isBlog={false}
              title="Cellular Neurophysiology and Computing (9.021)"
              description="Integrated overview of the biophysics of cells from prokaryotes to neurons, with a focus on mass transport and electrical signal generation across cell membrane. First third of course focuses on mass transport through membranes: diffusion, osmosis, chemically mediated, and active transport. Second third focuses on electrical properties of cells: ion transport to action potential generation and propagation in electrically excitable cells. Synaptic transmission. Electrical properties interpreted via kinetic and molecular properties of single voltage-gated ion channels. Final third focuses on biophysics of synaptic transmission and introduction to neural computing."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <CourseworkCards
              
              isBlog={false}
              title="Electromagnetics Waves and Applications (6.2300)"
              description="Analysis and design of modern applications that employ electromagnetic phenomena for signals and power transmission in RF, microwaves, optical and wireless communication systems. Fundamentals include dynamic solutions for Maxwell's equations; electromagnetic power and energy, waves in media, metallic and dielectric waveguides, radiation, and diffraction; resonance; filters; and acoustic analogs. Lab activities range from building to testing of devices and systems (e.g., antenna arrays, radars, dielectric waveguides)"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <CourseworkCards
              
              isBlog={false}
              title="Nanoelectronics and Computing Systems (6.2500)"
              description="Studies interaction between materials, semiconductor physics, electronic devices, and computing systems. Develops intuition of how transistors operate. Topics range from introductory semiconductor physics to modern state-of-the-art nano-scale devices. Considers how innovations in devices have driven historical progress in computing, and explores ideas for further improvements in devices and computing. Students apply material to understand how building improved computing systems requires knowledge of devices, and how making the correct device requires knowledge of computing systems."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <CourseworkCards
              
              isBlog={false}
              title="Electronics Project Laboratory (6.2020)"
              description="Intuition-based introduction to electronics, electronic components and test equipment such as oscilloscopes, meters (voltage, resistance inductance, capacitance, etc.), and signal generators. Emphasizes individual instruction and development of skills, such as soldering, assembly, and troubleshooting. Students design, build, and keep a small electronics project to put their new knowledge into practice."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <CourseworkCards
              
              isBlog={false}
              title="Introduction to EECS via Medical Technology (6.4900)"
              description="Explores biomedical signals generated from electrocardiograms, glucose detectors or ultrasound images, and magnetic resonance images. Topics include physical characterization and modeling of systems in the time and frequency domains; analog and digital signals and noise; basic machine learning including decision trees, clustering, and classification; and introductory machine vision. Labs designed to strengthen background in signal processing and machine learning. Students design and run structured experiments, and develop and test procedures through further experimentation."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <CourseworkCards
              
              isBlog={false}
              title="Analysis and Design of Digital Integrated Circuits (6.6010)"
              description="Device and circuit level optimization of digital building blocks. Circuit design styles for logic, arithmetic, and sequential blocks. Estimation and minimization of energy consumption. Interconnect models and parasitics, device sizing and logical effort, timing issues (clock skew and jitter), and active clock distribution techniques. Memory architectures, circuits (sense amplifiers), and devices. Evaluation of how design choices affect tradeoffs across key metrics including energy consumption, speed, robustness, and cost. Extensive use of modern design flow and EDA/CAD tools for the analysis and design of digital building blocks and digital VLSI design for labs and design projects."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <CourseworkCards
              
              isBlog={false}
              title="Solid-State Circuits (6.2092)"
              description="Fosters deep understanding and intuition that is crucial in innovating analog circuits and optimizing the whole system in bipolar junction transistor (BJT) and metal oxide semiconductor (MOS) technologies. Covers both theory and real-world applications of basic amplifier structures, operational amplifiers, temperature sensors, bandgap references. Covers topics such as noise, linearity and stability. Homework and labs give students access to CAD/EDA tools to design and analyze analog circuits. Provides practical experience through lab exercises, including a broadband amplifier design and characterization."
              
            />
          </Col>
    </Row>
  );
}

export default Coursework;
