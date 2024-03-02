import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          What i worked on Previous Project
        </p>
        <p style={{ textAlign: "justify" , color:"white"}}>
        <span  className="purple">Project 1:</span>  <span style ={{fontWeight:"bold"}}>SharePoint Online Application for Data Storage and Analytics </span> 
        <br/>
        <span  className="purple"> Developed a secure and user-friendly SharePoint Online application for doctors and medical professionals to store and analyze patient data. </span>
            <br />
            Designed and implemented the application using SharePoint Online functionalities.
              Created intuitive user interface for data entry, retrieval, and visualization.
              Integrated data extraction tools for annual analysis of new product performance.
              Developed reports and dashboards to present key insights and trends.

            <br />
            
            <br />
            <br />
            
          </p>
          
        <p style={{ textAlign: "justify" , color:"white"}}>
        <span  className="purple">Project 2:</span>  <span style ={{fontWeight:"bold"}}>SharePoint Online Application for Internal Document Sharing </span> 
        <br/>
        <span  className="purple">Built a collaborative document sharing platform within SharePoint Online for doctors to securely share medical documents with colleagues.
 </span>
            <br />
            Configured SharePoint Online permissions and security settings for controlled access.
Designed user-friendly document upload, download, and search functionalities.
Implemented version control and audit trails for document history tracking.
Ensured seamless integration with existing healthcare workflows
            <br />
            
            <br />
            <br />
            </p>

      </Container>
    </Container>
  );
}

export default Projects;
