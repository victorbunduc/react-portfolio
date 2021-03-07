import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Victor Bunduc </span>
            from <span className="purple"> San Diego,CA</span>
            <br />Born in Eastern Europe in a country named Republic of Moldova.
            <br />I am a person with good communication skills, I speak 3 languages : English , Romanian , Russian .I can easily communicate clearly and effectively in many mediums: by email, verbally, with lists and phone messages, on the phone, and with body language.
            <br />Also , i'm confident by saying that i am an Honest person, if i made a mistake!? I don't cover it up, i admit it, and learn not to do it again.
            <br />My work Ethic represents simple tasks: Always on Time, I do what i was hired to do ,I meet targets and deadlines and work to the best of my ability.
            <br />When it comes to the Flexibility i always react quickly to changing business conditions and can change gears and adapt as required.
            <br />About my Determination and Persistence i'll add that given by Employer a challenging goal i will do everything needed to make it achievable.The key is to be able to work hard and keep moving forward when i encounter obstacles.


            <br />
            <br />
            Apart from coding, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Exercise.
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Work on cars.
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Travelling.
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Victor Bunduc</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
