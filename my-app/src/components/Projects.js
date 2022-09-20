import React from "react"
import { Container, Tab, Nav, Col, Row } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"
import 'animate.css'
import TrackVisibility from "react-on-screen"

export const Projects = () => {
    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ]

    return (
    <section className="project" id="project">
        <Container>
        <Row>
            <Col size={12}>
            <TrackVisibility>
                {({ isVisible }) => 
                <div className={isVisible ? "animate_animated animate_slideInUp" : ""} >
                <h2>Projects</h2>
                <p>Fusce lorem urna, tristique ut nunc vel, consectetur dictum velit. Vivamus tincidunt urna quis quam faucibus, ut lacinia mi faucibus. Aenean id vulputate sem, a laoreet mi. Sed ac ligula nulla. </p>
                </div>}
            </TrackVisibility>
                <Tab.Container id="projects-tabs" defaultActiveKey="first" >
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                    </Nav>
                    <Tab.Pane eventKey="first" >
                        <Row>
                            {
                                projects.map((project, index) => {
                                return (
                                    <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section" >
                        <p>Fusce lorem urna, tristique ut nunc vel, consectetur dictum velit. Vivamus tincidunt urna quis quam faucibus, ut lacinia mi faucibus. Aenean id vulputate sem, a laoreet mi. Sed ac ligula nulla.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third" >
                        <p>Fusce lorem urna, tristique ut nunc vel, consectetur dictum velit. Vivamus tincidunt urna quis quam faucibus, ut lacinia mi faucibus. Aenean id vulputate sem, a laoreet mi. Sed ac ligula nulla.</p>
                    </Tab.Pane>
                </Tab.Container>
            </Col>
        </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} />
    </section>
    )
}