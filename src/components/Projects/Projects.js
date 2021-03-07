import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import eeg from "../../Assets/Projects/eeg.gif";
import suicide from "../../Assets/Projects/suicide.png";
import algo from "../../Assets/Projects/algo.png";
import plant from "../../Assets/Projects/plant.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="ToneList"
              description="This website can be used to store your favorite bands and find info like tour dates, videos and similar artists.."
              link="https://github.com/victorbunduc/Tonelist"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Weather Dashboard"
              description="In this app, the user enters the name of a city (either just the city name, or 'city, state') in the search field, then clicks the search button.The app will display the current weather conditions in that city, including temperature, humidity, UV index, and a picture representing whether it is clear, cloudy, raining, etc."
              link="https://victorbunduc.github.io/Weather-Dashboard-App/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Work Day Scheduler"
              description="Makes a calendar to represent the workday: 9AM-5PM.The day is shown in hour time blocks.Each time block is color coded to indicate whether it occurs in the past (gray), present (red) or future (green).Each time block has an input field and 'save' buttons.Appointments can be entered to a specific hour inline, and the 'save' button saves them to local storage."
            link="https://victorbunduc.github.io/Day-Scheduler/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Budget Tracker"
              description="Budget Tracker is a progressive web application that allows users to track their budgets by adding expenses and deposits to their budget through the 'Add/Subtract Funds'buttons. They are able to add a transaction with or without a connection. When a user enters a transaction while offline, these transactions are stored in the indexedDB, and transferred to the database when the user comes back online."
              link="https://salesforcebudget.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eeg}
              isBlog={false}
              title="Student Web Development Portal"
              description="This application allows students to create an account by signing up with an email and a password and then log into the account to access the information about topics and activities that they can mark as 'completed' and the percentage of completion will be displayed in the progress bar."
              link="https://github.com/victorbunduc/project2"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={algo}
              link=""
              title="Blog1"
              site=""
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={plant}
              link=""
              title="Blog2"
              site=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
