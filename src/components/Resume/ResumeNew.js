import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import ee_pdf from "../../Assets/About/Resume/Guobadia_Graduate_Electrical_Engineering_Resume_2023_2024.pdf";
import neuro_pdf from "../../Assets/About/Resume/Guobadia_Graduate_Neuroengineering_Resume_2023_2024.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth); // Initialize with the initial width

  useEffect(() => {
    // Update width when the window is resized
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      // Remove the resize event listener when the component unmounts
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Row for buttons */}
        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "20px" }}>
          <Col xs={12} md={6} className="text-center">
            <Button
              variant="primary"
              href={ee_pdf}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download Electrical Engineering CV
            </Button>
          </Col>

          <Col xs={12} md={6} className="text-center">
            <Button 
              variant="primary"
              href={neuro_pdf}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download Neuroengineering CV
            </Button>
          </Col>
        </Row>

        {/* Row for resumes */}
        <Row className="resume">
          <Col xs={12} md={6} className="d-flex justify-content-center mb-3">
            <Document file={ee_pdf}>
              <Page pageNumber={1} scale={width*0.0008} />
            </Document>
          </Col>

          <Col xs={12} md={6} className="d-flex justify-content-center mb-3">
            <Document file={neuro_pdf}>
              <Page pageNumber={1} scale={width*0.0008} />
            </Document>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
