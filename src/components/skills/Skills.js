import Carousel from 'react-multi-carousel';
import colorSharp from '../../assets/img/color-sharp2.png';

import html from '../../assets/img/html.svg';
import css from '../../assets/img/css.svg';
import js from '../../assets/img/js.svg';
import react from '../../assets/img/react.svg';
import bootstrap from '../../assets/img/bootstrap.svg';
import tailwind from '../../assets/img/tailwind.svg';
import scss from '../../assets/img/scss.svg';
import git from '../../assets/img/git.svg';
import vscode from '../../assets/img/vscode.svg';
import github from '../../assets/img/github.svg';

import './Skills.css';
import 'react-multi-carousel/lib/styles.css';

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>I always try to develop and constantly learn new technologies and maintain my code quality</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={html} alt="html" />
                </div>
                <div className="item">
                  <img src={css} alt="css" />
                </div>
                <div className="item">
                  <img src={js} alt="js" />
                </div>
                <div className="item">
                  <img src={react} alt="react" />
                </div>
                <div className="item">
                  <img src={bootstrap} alt="bootstrap" />
                </div>
                <div className="item">
                  <img src={tailwind} alt="tailwind" />
                </div>
                <div className="item">
                  <img src={scss} alt="scss" />
                </div>
                <div className="item">
                  <img src={git} alt="git" />
                </div>
                <div className="item">
                  <img src={vscode} alt="vscode" />
                </div>
                <div className="item">
                  <img src={github} alt="github" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      {/* eslint-disable-next-line */}
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

export default Skills;
