import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shaik Abdulgani </span>
            from <span className="purple"> Guntur, India.</span>
            <br />
            I am currently employed as a software developer at Infosys.
            <br />
            I have completed Bachelors of Technology(B.Tech) in Electrical and Electronics Engineering at R.V.R & JC Colleage of Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Abdulgani</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
