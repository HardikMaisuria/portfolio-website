import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

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
              isBlog={false}
              title="Ask My LLM"
              description="This project involves the development of an advanced Question Answering (QA) system utilizing state-of-the-art Natural Language Processing (NLP) technologies. The system is designed to provide accurate and relevant answers to user queries by leveraging a Transformer-based Large Language Model (LLM) and a Retrieval-Augmented Generation (RAG) pipeline."
              ghLink="https://github.com/HardikMaisuria/Ask-My-LLM-Advanced-Question-Answering-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Dialoguify"
              description="Dialoguify is a state-of-the-art dialogue summarization tool powered by a fine-tuned Large Language Model (LLM) to efficiently summarize conversations between two individuals. Leveraging advanced NLP techniques and reinforcement learning, Dialoguify ensures high-quality, concise summaries while maintaining ethical standards by reducing toxic content."
              ghLink="https://github.com/HardikMaisuria/Dialoguify-GenAI-Powered-Dialogue-Summarizer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Lyrics based Mood Classification"
              description="This project presents an NLP-driven mood classifier for song lyrics, leveraging deep learning techniques to enhance music recommendation systems. The classifier achieves an accuracy of 77.08% using a Convolutional Neural Network (CNN) with word2vec embeddings, outperforming traditional lyric-based models."
              ghLink="https://github.com/HardikMaisuria/Lyrics-based-Mood-Classification"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Advancing Pneumonia Diagnosis through Deep Neural Networks"
              description="This project focuses on leveraging deep learning techniques to improve the diagnosis of pneumonia from chest X-ray images. The main accomplishments and methodologies employed are outlined below."
              ghLink="https://github.com/HardikMaisuria/Advancing-Pneumonia-Diagnosis-through-Deep-Neural-Networks"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
