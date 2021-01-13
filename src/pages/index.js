import React from "react"
import { Link } from "gatsby"

import Image from '../components/Image'

import '../components/index.css'

import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub'
import {AiFillInstagram} from '@react-icons/all-files/ai/AiFillInstagram'
import {AiFillMail} from '@react-icons/all-files/ai/AiFillMail'
import {FaPhoneAlt} from '@react-icons/all-files/fa/FaPhoneAlt'
import {AiFillLinkedin} from '@react-icons/all-files/ai/AiFillLinkedin'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from "../components/background"
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap"

const IndexPage = () => (
  <React.Fragment>
    <Layout>
      <SEO title="Homepage" description="Akhilesh Adithya is Student | Web Designer | Developer" />
      <Background />
      <Container fluid style={{height: `100vh`}}>
      <Navbar expand="md" variant="dark" collapseOnSelect={true}>
        <Link to="/"><Navbar.Brand>Akhilesh Adithya</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Link to="/about"><div className="navbar-content">About</div></Link>
            <Link to="/projects"><div className="navbar-content">Projects</div></Link>
            <Link to="/books"><div className="navbar-content">Books</div></Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        <Row>
          <Col className="home-name d-flex justify-content-center align-items-center" style={{height: `55vh`}}>
            Akhilesh Adithya
          </Col>
        </Row>
        <Row>
          <Col className="home-title d-flex justify-content-center align-items-end" style={{height: `20vh`}}>
            Student | Web Designer | Developer
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center align-items-center"style={{height: `7vh`}}>
            <a href="https://github.com/AkhileshAdithya" className="home-icons" target="_blank" rel="noreferrer" aria-label="Github link"><AiFillGithub color="white" title="" size="4vh"/></a>
            <a href="https://www.linkedin.com/in/akhilesh-adithya-445b661b0/" className="home-icons" rel="noreferrer" target="_blank" aria-label="Linkedin link"><AiFillLinkedin color="white" title="" size="4vh"/></a>
            <a href="https://www.instagram.com/akhilesh_adithya/" className="home-icons" target="_blank" rel="noreferrer" aria-label="Instagram link"><AiFillInstagram color="white" title="" size="4vh"/></a>
            <a href="mailto:akhileshadithya311@gmail.com" className="home-icons" target="_blank" rel="noreferrer" aria-label="Maillink"><AiFillMail color="white" title="" size="4vh"/></a>
            <a href="tel:7676407154" className="home-icons" target="_blank" rel="noreferrer" aria-label="Phone link"><FaPhoneAlt color="white" title="" size="3vh"/></a>            
          </Col>
        </Row>
      </Container>
    </Layout>
  </React.Fragment>
)

export default IndexPage
