import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hardik Maisuria</span> from{" "}
            <span className="purple">Tempe, AZ, USA.</span>
            <br /><br />
            <ul>
            <li>I am currently employed as a <span className="purple">Research Aide</span> at{" "}
            <span className="purple">DynamiCog Lab</span> and{" "}
            <span className="purple">Embodied Games Lab.</span>
            <br /></li>
              <li>I am in my final semester of a Master's in Computer Science from Arizona State University.</li>
              <li>I have completed my Undergrad in Computer Science and Engineering from Nirma University, India.</li>
              
            </ul>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket and Volleyball
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring and making new Food Dishes
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to use tech to make a change!"{" "}
          </p>
          <footer className="blockquote-footer">Hardik M.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
