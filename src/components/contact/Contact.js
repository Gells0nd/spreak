import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../../assets/img/contact-img.svg';
import TrackVisibility from 'react-on-screen';

import './Contact.css';
import 'animate.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>{({ isVisible }) => <img src={contactImg} alt="Contact Us" />}</TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              <Row>
                <div className="text">
                  <h2>About this project</h2>
                  <p>
                    This project was created on React.js technology using small third-party libraries, like react-icons.
                    For styling, react-bootstrap and pure css are used here. The design of this portfolio is taken from
                    YouTube, and modified inside
                  </p>
                </div>
              </Row>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
