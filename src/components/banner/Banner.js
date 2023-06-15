import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';

import sharp1 from '../../assets/img/color-sharp.png';
import headerImg from '../../assets/img/banner-img.svg';

import './Banner.css';
import 'animate.css';

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ['FrontEnd Developer', 'Junior FrontEnd Developer'];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const linkStyles = {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '20px',
    display: 'block',
  };

  const sharp1Styles = {
    position: 'absolute',
    left: '0px',
    top: '0px',
    zIndex: '-1000',
    maxHeight: '900px',
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className={'animate__animated animate__fadeIn'}>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                {`Hi! I'm Nick!`}{' '}
                <span
                  className="txt-rotate"
                  dataPeriod="1000"
                  data-rotate='[ "FrontEnd Developer", "Junior FrontEnd Developer" ]'
                >
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <img src={sharp1} alt="sharp" style={sharp1Styles} />
              <p>
                Hi! I am 18 years old, I am a self-taught programmer who loves challenges and is ready to take on any
                interesting projects. The main goal is continuous development, career growth
              </p>
              <a style={linkStyles} href="https://career.habr.com/gells0nd/" target={'_blank'}>
                Get Resume <ArrowRightCircle style={{ fontSize: '30px' }} size={25} />
              </a>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className={'animate__animated animate__zoomIn'}>
              <img src={headerImg} alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
