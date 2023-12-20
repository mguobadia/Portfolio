import React from "react";

import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

import { Container, Row, Col } from "react-bootstrap";
import SkillSetCards from "./SkillSetCards";
import Particle from "../Particle";
import circuit from "../../Assets/About/Skillsets/circuitdesign.png";
import digitalcircuit from "../../Assets/About/Skillsets/digitalcircuit.png";
import soldering from "../../Assets/About/Skillsets/soldering.png";
import microcontroller from "../../Assets/About/Skillsets/microcontroller.png";
import data from "../../Assets/About/Skillsets/data.png";
import cad from "../../Assets/About/Skillsets/cad.png";





function SkillSet() {
  return (
    <Row style={{ justifyContent: "center" }}>
      <Col md={4} className="project-card">
        <SkillSetCards
          
          imgPath = {circuit}
          title="Circuit Design"
          description = "Engaged in the creation of schematics through the application of pre-calculated parameters and the selection of circuit components, culminating in the development of functional prototypes tailored to address specific needs."
          items = {[
             "Designed a library of integrated circuits in Cadence Allegro that are IBMs Z Mainframe Cards with IBM Internship",
             "Designed a light-wave communicator and color organ circuit within Electronic Projects Laboratory",
             "Designed RFID amplifier circuit for SplitBit Project within Electromagnetic Fields and Energy class",
             "Designed a broadband amplifier with 2N3904 and 2N3906 BJTs"
            ]}
        />
      </Col>

      <Col md={4} className="project-card">
        <SkillSetCards
          
          imgPath = {digitalcircuit}
          title="FPGA Digital Design"
          description = "Engaged in the creation of schematics through the application of pre-calculated parameters and the selection of circuit components, culminating in the development of functional prototypes tailored to address specific needs."
          items = {[
             "Programmed Xilinx FPGA to perform a variety of different functions in VERILOG, from receiving ethernet packets to video processing within Digital Systems Laboratory",
             "Designed an augmented reality-camera system utilizing a Xilinx FPGA within Digital Systems Laboratory"
            ]}
        />
      </Col>

      <Col md={4} className="project-card">
        <SkillSetCards
          
          imgPath = {soldering}
          title="Soldering and Test Equipment"
          description = "Practiced soldering conductive connections in electronic devices and tested connectivity utilizing multimeter, oscilloscope, or logic analyzer."
          items = {[
            "Soldered connections on AttentivU Glasses, and EEG Headset within Motorola Group in Media Lab",
            "Taught and reviewed soldering mechanics to high school students creating underwater rovers within NSLC",
            "Soldered and tested connections on measurement electrodes within Jasanoff Lab",
            "Utilized Osilloscope to conduct Frequency Response Analysis on broadband amplifier circuit"
          ]}
          
        />
      </Col>

      <Col md={4} className="project-card">
        <SkillSetCards
          
          imgPath = {microcontroller}
          title="Embedded Device Programming"
          description = "Designed and tested functionality of systems utilizing Raspberry Pi and Arduino microcontrollers."
          items = {[
            "Tested automatic-updating functionality in Linux Yocto-OS for home-lighting system using a Rasperry Pi 3+ within Signify R&D ",
            "Designed gyrpscopic functionality with VR System for mice using Arduino Nano within MIT PILM",
            "Created a prototype for XYZ-stationery phone case utilzing Arduino Uno"
          ]}
          
        />
      </Col>

      <Col md={4} className="project-card">
        <SkillSetCards
          
          imgPath = {data}
          title="Data Analysis"
          description = "Gathered and analyzed large samples of data within software packages."
          items = {[
            "Analyzed MEG Data, gathered from UCL Neuroscience Reseacrh Lab, utilizing lasso-regression ML model in MATLAB within MIT PILM",
            "Learned PCA, neural network construction, and Fourier transform data analysis techniques in Python within signal processing and neural computation courses",
            "Designed MATLAB scripts and analyzed retrieved data for emitting voltage-pulses for in-vitro experimentation in frog-nerves within neurophysiology course"
          ]}
        />
      </Col>

      <Col md={4} className="project-card">
        <SkillSetCards
          
          imgPath = {cad}
          title="SPICE/CAD/EE Software Tools"
          description = "Created circuit schematics, layouts and testbenches with the aid of software tools such Vivado, SPICE etc"
          items = {[
            "Synthesized and routed PicoRV32 IMC CPU with Intel 16nm PDK 1024x36 bit SRAM",
            "Designed, tested, and constructed layout that passed DRC/LVS checks for CMOS NAND Gate utilizing Xilinx Vivado Software",
            "Simulated broadband amplifier design utilizing SPICE software"
            
          ]}
          
        />
      </Col>
        

          
    </Row>
  );
}

export default SkillSet;
