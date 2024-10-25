import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-1.jpg";
import projImg2 from "../assets/img/project-2.jpg";
import projImg3 from "../assets/img/project-3.jpg";
import projImg4 from "../assets/img/project-4.jpg";
import projImg5 from "../assets/img/project-5.jpg";
import projImg6 from "../assets/img/project-6.jpg";
import projImg7 from "../assets/img/project-7.jpg";
import projImg8 from "../assets/img/project-8.jpg";
import projImg9 from "../assets/img/project-9.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Zapier (Webhook)",
            description: "Communication between different Backends",
            imgUrl: projImg1,
            githuburl:"https://github.com/zaid1303/Zapier-Webhook-"
        },
        {
            title: "Connect U",
            description: "Connect Daily Labour direct to the Client",
            imgUrl: projImg2,
            githuburl:"https://github.com/zaid1303/ConnectU"
        },
        {
            title: "E Wallet",
            description: "Digital Wallet",
            imgUrl: projImg3,
            githuburl:"https://github.com/zaid1303/E-Wallet"
        },
        {
            title: "E Library",
            description: "Digital Library",
            imgUrl: projImg4,
            githuburl:"https://github.com/zaid1303/E-Library"
        },
        {
            title: "Blog Website",
            description: "Read and Publish Blog",
            imgUrl: projImg5,
            githuburl:"https://github.com/zaid1303/blog-with-SQL-database"
        },
        {
            title: "Recipe App",
            description: "Get Recipe of multiple Dishes",
            imgUrl: projImg6,
            githuburl:"https://github.com/zaid1303/Recipe-App"
        },
        {
            title: "Movies App",
            description: "Get knowledge about all Movies",
            imgUrl: projImg7,
            githuburl:"https://github.com/zaid1303/Movies-app"
        },
        {
            title: "Simon Game",
            description: "Play Simon Game",
            imgUrl: projImg8,
            githuburl:"https://github.com/zaid1303/Simon-game"
        },
        {
            title: "First Website",
            description: "Intro Website",
            imgUrl: projImg9,
            githuburl:"https://github.com/zaid1303/My_intro_website"
        }
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>Showcasing a diverse range of projects that highlight my skills in full stack development, from building responsive user interfaces to designing robust backend solutions.</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
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
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}