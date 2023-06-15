import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../assets/img/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p style={{ fontSize: '18px' }}>&#169; Demidov Nickolay</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
