import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";
import video from "../Assets/video.mp4";
import farevoLogo from "../Assets/Abhiyanthlogo2.png"

function Home() {
  const videoRef = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasPlayed && videoRef.current) {
        const vid = videoRef.current;
        vid.muted = false;
        vid.play().then(() => {
          setHasPlayed(true);
        }).catch(err => {
          console.warn("Play failed:", err);
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasPlayed]);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={4} className="home-header">
              <h1 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>
              <h1 className="heading-name">
                We are <strong className="main-name"> Team Farevo</strong>
              </h1>
            </Col>

            <Col md={8} style={{ paddingBottom: 20 }}>
              <video
                ref={videoRef}
                src={video}
                loop
                playsInline
                controls
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
