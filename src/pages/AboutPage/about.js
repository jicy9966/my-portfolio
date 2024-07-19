import "./about.scss";
import NavBar from "../../components/NavBar/NavBar";
import { BsGithub } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const AboutPage = () =>
{
    return(
        <div className="page-wrap">
            <NavBar />
            <div className="about-wrap">
                <div className="left-wrap">
                    <div className="title">About Myself</div>
                    <div className="copyright">© Chan Young Ji, 2024</div>
                </div>
                <div className="division-line"></div>
                <div className="right-wrap">
                    <div className="textbox">
                        <text>Hello, my name is Chan Young Ji (or simply Chan).</text><br />
                        <text>I'm a South Korean developer living in Irvine, CA.</text><br />
                        <text>Currently studying at UC Irvine as a CSE major.</text><br />
                        <text>I'm studying and do both frontend and backend.</text><br />
                        <text>Check my GitHub to view my coding projects.</text><br />
                        <a href="https://github.com/jicy9966" target="blank" className="middle-icon">
                            <BsGithub size={40}/>
                        </a>
                        <text>Fluent in English, fluent in Korean.</text><br />
                        <text>View my resume.</text><br />
                        <Link to="/resume" className="arrow-icon">
                            <FaArrowRight size={20}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;