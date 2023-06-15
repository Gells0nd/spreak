import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { BsTelegram, BsGithub } from 'react-icons/bs';
import { ImMail4 } from 'react-icons/im';
import ProjectCard from '../projectCard/ProjectCard';

import projImg1 from '../../assets/img/pro1.png';
import projImg2 from '../../assets/img/pro2.png';
import projImg3 from '../../assets/img/pro3.png';

import './Projects.css';
import 'animate.css';

const stylesForTabs = { cursor: 'pointer' };

const Projects = () => {
  const projects = [
    {
      title: 'Landing for sales',
      description: 'Design & Development',
      imgUrl: projImg1,
    },
    {
      title: 'Designer Portfolio',
      description: 'Development',
      imgUrl: projImg2,
    },
    {
      title: 'Company WebSite',
      description: 'Development',
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div className={'animate__animated animate__fadeIn'}>
              <h2>Projects / Contacts</h2>
              <p>
                At the moment I am doing an internship at the _Self company, below are my projects that I wrote during
                my studies, the first of them is commercial and is still used
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item style={stylesForTabs}>
                    <Nav.Link eventKey="first">Projects</Nav.Link>
                  </Nav.Item>
                  <Nav.Item style={stylesForTabs}>
                    <Nav.Link eventKey="second">About</Nav.Link>
                  </Nav.Item>
                  <Nav.Item style={stylesForTabs}>
                    <Nav.Link eventKey="third">Contacts</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <p>
                      Those projects that are on the first tab are educational, I am always ready to complete a test
                      task, solve problems for algorithms, and pass a technical interview.
                      <br />
                      My main focus was on the quality of development, using dynamic elements.
                      <br />
                      All these projects have their open repositories on github
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <div className="contacts-block">
                      <a href="https://t.me/Gells0nd" target={'_blank'}>
                        <BsTelegram />
                      </a>
                      <a href="https://github.com/Gells0nd" target={'_blank'}>
                        <BsGithub />
                      </a>
                      <a href="mailto:nick71517@gmail.com" target={'_blank'}>
                        <ImMail4 />
                      </a>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
