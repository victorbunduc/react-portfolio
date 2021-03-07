import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import pdf from "../../Assets/Resume.pdf";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
 

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Move Central"
                            content={[
            "Organization skills – as a Mover/Foreman you have to use your organizational skills to plan how to best pack items and arrange them in the moving truck. Communication skills – creating inventory reports requires movers to have good writing and verbal communication skills help them keep the moving team and customers informed."

              ]}
            />
            
            <Resumecontent
              title="Pacific Homework"
              content={[
                "High Presssure sales of Home Improvements products like : Roofs,Patio Covers,Windows based only on a comission base."
              ]}
            />
            <Resumecontent
              title="Global First Limo"
              content={[
                "Luxury Chauffeured Sedan/SUV service in the greater San DIego area.In Addition we can facilitate private,luxury transportation worldwide. Our mission is dedicated in providing luxury transportation with professional chauffeured service to get you to your destination in a safe and efficient manner. We pride ourselves in offering courteous unrelenting first class service."
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Military School Saint-George"
              date="2008-2011"
              content={["Saint-George Military School is an educational institution which prepares candidates for service in the officer corps. It normally provides education in a military environment, the exact definition depending on the country concerned. Three types of academy exist: pre-collegiate-level institutions awarding academic qualifications, university-level institutions awarding bachelor's-degree-level qualifications, and those preparing Officer Cadets for commissioning into the armed services of the state"
              
            ]}
            />
            <Resumecontent
              title="Moldova State Law University"
              date="2011-2015"
              content={["Law school prepares students to understand and work with legal systems by developing their abilities to write and speak persuasively, anticipate consequences, and use creative and analytical problem solving skills. I have been studiyng criminal law which represents the body of law that relates to crime. It proscribes conduct perceived as threatening, harmful, or otherwise endangering to the property, health, safety, and moral welfare of people inclusive of one's self."
          ]}
              />
              
              <h3 className="resume-title">Ranks and Achievements</h3>
              <Resumecontent
                title=""
                content={[
                  ` ${spojRank}`,
                  `  ${hackerrank}`,
                 
                ]}
           
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;