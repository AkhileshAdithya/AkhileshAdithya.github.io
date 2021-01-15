import React, { Component } from 'react'

import { Col, Container, Row, Nav, Navbar, Card } from 'react-bootstrap'
import Background from '../components/background'
import Image from '../components/Image'
import SEO from '../components/seo'

import '../components/projects.css'
class Projects extends Component {
    clickHandler = (link) => {
        window.open(link, "_blank")
    }
    render() {        
        this.data = {
            name: ["ColorClock", "Protonmail Theme", "Portfolio Website", "Think Beyond"],
            desc: ["A react app that is themed based on the time converted to hexcode","CSS themes for the popular email provider protonmail.com","A portfolio website made with gatsby and three.js","An e-commerce website made for a startup of a friend"]
        }        
        return (
            <div>
                <SEO title="Projects" description="Akhilesh Adithya's projects" />
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
                <Container className="projects">
                    <Row>
                        <Col className="projects-text d-flex justify-content-center align-items-center">
                            Hi, these are some of the projects I've built
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} lg={6} className="projects-card">
                            <Card className="projects-card-hover" onClick={() => this.clickHandler("https://akhileshadithya.github.io/ColorClock/")}>
                                <Image src="colorclock.png" alt="colorclock" />
                                <Card.Body>
                                    <Card.Title>ColorClock</Card.Title>
                                    <Card.Text>
                                        A react app that is themed based on the time converted to hexcode
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} lg={6} className="projects-card">
                            <Card className="projects-card-hover" onClick={() => this.clickHandler("https://github.com/AkhileshAdithya/ProtonMail-Dark-Themes")}>
                                <Image src="protonmail_theme.png" alt="protonmail_theme" />
                                <Card.Body>
                                    <Card.Title>Protonmail Theme</Card.Title>
                                    <Card.Text>
                                    CSS themes for the popular email provider protonmail.com
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} lg={6} className="projects-card">
                            <Card className="projects-card-hover" onClick={() => this.clickHandler("https://akhileshadithya.github.io/")}>
                                <Image src="portfolio.png" alt="portfolio" />
                                <Card.Body>
                                    <Card.Title>Portfolio Website</Card.Title>
                                    <Card.Text>
                                    A portfolio website made with gatsby and three.js
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} lg={6} className="projects-card">
                            <Card className="projects-card-hover" onClick={() => this.clickHandler("https://thinkbeyond.web.app")}>
                                <Image src="thinkbeyond.png" alt="thinkbeyond" />
                                <Card.Body>
                                    <Card.Title>Think Beyond</Card.Title>
                                    <Card.Text>
                                    An e-commerce website made for a startup of a friend
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Projects
