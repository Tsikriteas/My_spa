import React from "react";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      {/* Carousel */}
      <Carousel className="carousel-container">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="C:\Windows\System32\my-app\public\images\spa1.jpg"
            alt="Spa Interior"
          />
          <Carousel.Caption>
            <h3>Χαλαρώστε στο Πολυτελές Spa μας</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="C:\Windows\System32\my-app\public\images\spa2.jpg"
            alt="Massage Room"
          />
          <Carousel.Caption>
            <h3>Απολαύστε Μασάζ από Ειδικούς</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="C:\Windows\System32\my-app\public\images\spa3.jpg"
            alt="Hot Tub"
          />
          <Carousel.Caption>
            <h3>Χαλαρώστε στο Υδρομασάζ</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Πληροφορίες */}
      <Container className="mt-5 text-center">
        <Row>
          <Col md={6}>
            <h2>Καλώς ήρθατε στο Luxury Spa</h2>
            <p>
              Αποδράστε από την καθημερινότητα και χαλαρώστε σε ένα περιβάλλον απόλυτης ηρεμίας.
            </p>
          </Col>
          <Col md={6}>
            <h2>Στοιχεία Επικοινωνίας</h2>
            <ul className="list-unstyled">
              <li><FaPhone /> Τηλέφωνο: +30 123 456 789</li>
              <li><FaEnvelope /> Email: info@luxuryspa.com</li>
              <li><FaMapMarkerAlt /> Διεύθυνση: Παραλία 123, Ελλάδα</li>
            </ul>
          </Col>
        </Row>
        <Button variant="primary" size="lg" className="mt-3">Κλείστε Ραντεβού</Button>
      </Container>

      {/* Footer */}
      <div className="footer text-center mt-5">
        <p className="text-muted">© 2025 Luxury Spa. All rights reserved.</p>
      </div>
    </div>
  );
};

export default App;
