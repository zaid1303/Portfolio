import { Col } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

export const ProjectCard = ({ title, description, imgUrl, githuburl }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="movie">
                <div className="proj-imgbx">
                    <img src={imgUrl} height="100px"/>
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </div>
                <div className="download">
                    <a href={githuburl} className="btn">GitHub</a>
                </div>
            </div>
        </Col>
    )
}