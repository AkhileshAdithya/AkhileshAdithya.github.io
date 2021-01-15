import React, { Component } from 'react'
import { Col, Container, ProgressBar, Row, Nav, Navbar } from 'react-bootstrap'
import '../components/about.css'
import Background from '../components/background'

class About extends Component {
    render() {
        return (
            <div>
                <Background />
                <Navbar expand="md" variant="dark" collapseOnSelect={true}>
                    <a href="https://akhileshadithya.github.io/"><Navbar.Brand>Akhilesh Adithya</Navbar.Brand></a>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <a href="https://akhileshadithya.github.io/about"><div className="navbar-content">About</div></a>
                        <a href="https://akhileshadithya.github.io/projects"><div className="navbar-content">Projects</div></a>
                        <a href="https://akhileshadithya.github.io/books"><div className="navbar-content">Books</div></a>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Container>                
                    <Row>
                        <Col className="about-intro d-flex justify-content-center align-items-center">
                            Hi There, I'm Akhilesh Adithya
                        </Col>
                    </Row>
                    <Row>
                        <Col className="about-title d-flex justify-content-center align-items-center">
                            About
                        </Col>
                    </Row>
                    <Row>
                        <Col className="about-text d-flex justify-content-center align-items-center">
                            I am a full stack web developer proficient in MERN stack, MEVN stack, Three.js and 
                            Scripting in python and JS. I am currently learning AI/ML with tensorflow. I am also an
                            avid reader who loves reading all sorts of books. I'm mainly interested in books of Asian origins.
                        </Col>
                    </Row>
                    <Row>
                        <Col className="about-title d-flex justify-content-center align-items-center">
                            Dev tools
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <Col xs={12} lg={4} className="about-text2 d-flex justify-content-center align-items-center">
                                    HTML/Javascript/CSS
                                </Col>
                                <Col xs={12} lg={8}>
                                    <ProgressBar now={100} />
                                </Col>                            
                            </Row>
                            <Row>
                                <Col xs={12} lg={4} className="about-text2 d-flex justify-content-center align-items-center">
                                    Python
                                </Col>
                                <Col xs={12} lg={8}>
                                    <ProgressBar now={90} />
                                </Col>                            
                            </Row>
                            <Row>
                                <Col xs={12} lg={4} className="about-text2 d-flex justify-content-center align-items-center">
                                    React
                                </Col>
                                <Col xs={12} lg={8}>
                                    <ProgressBar now={90} />
                                </Col>                            
                            </Row>
                            <Row>
                                <Col xs={12} lg={4} className="about-text2 d-flex justify-content-center align-items-center">
                                    Three.js
                                </Col>
                                <Col xs={12} lg={8}>
                                    <ProgressBar now={80} />
                                </Col>                            
                            </Row>
                            <Row>
                                <Col xs={12} lg={4} className="about-text2 d-flex justify-content-center align-items-center">
                                    Node
                                </Col>
                                <Col xs={12} lg={8}>
                                    <ProgressBar now={70} />
                                </Col>                            
                            </Row>
                            <Row>
                                <Col xs={12} lg={4} className="about-text2 d-flex justify-content-center align-items-center">
                                    Java
                                </Col>
                                <Col xs={12} lg={8}>
                                    <ProgressBar now={60} />
                                </Col>                            
                            </Row>
                            <Row>
                                <Col xs={12} lg={4} className="about-text2 d-flex justify-content-center align-items-center">
                                    C++
                                </Col>
                                <Col xs={12} lg={8}>
                                    <ProgressBar now={40} />
                                </Col>                            
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="about-title d-flex justify-content-center align-items-center">
                            Education
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <Col xs={12} lg={3} className="about-year d-flex justify-content-center">
                                    <span className="about-edu-year-inactive">2007-2017</span>
                                </Col>
                                <Col>
                                    <Row className="about-subtitle d-flex justify-content-center align-items-center">
                                        <span className="about-edu-name">Kautilya Vidyalaya, Mysore</span>
                                    </Row>
                                    <Row className="about-text d-flex justify-content-center align-items-center">
                                        I got interested in linux at this point. Started distro hopping and playing with some basic kernel stuff.
                                        Also got introduced to the world of custom roms and rooting in android phones. This sorta gave me the push
                                        to take up computer science as my major.
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} lg={3} className="about-year d-flex justify-content-center">
                                    <span className="about-edu-year-inactive">2017-2019</span>
                                </Col>
                                <Col>
                                    <Row className="about-subtitle d-flex justify-content-center align-items-center">
                                        <span className="about-edu-name">Jnanodaya PU College, Mysore</span>
                                    </Row>
                                    <Row className="about-text d-flex justify-content-center align-items-center">
                                        Nothing of interest happened... /add something later
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} lg={3} className="about-year d-flex justify-content-center">
                                    <span className="about-edu-year-active">2019-2023</span>
                                </Col>
                                <Col>
                                    <Row className="about-subtitle d-flex justify-content-center align-items-center">
                                        <span className="about-edu-name">Birla Institute of Science and Technology, Goa</span>
                                    </Row>
                                    <Row className="about-text d-flex justify-content-center align-items-center">
                                        This was when I was introduced to computer science as well as developement. Some of my seniors were really
                                        helpful and got me on track. This was also when I learnt about FOSS and was influenced by it's ideology. I learnt 
                                        web development and react through the offiial docs. I am currently planning on learning AI/ML  
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default About