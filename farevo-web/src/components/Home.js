import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";
import video from "../Assets/video.mp4";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={4} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> REVANTH KUMAR JILAKARA</strong>
              </h1>
            </Col>

            <Col md={8} style={{ paddingBottom: 20 }}>
              <video
                src={video}
                autoPlay
                loop
                playsInline
                className="img-fluid"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
