import "./resume.scss";
import NavBar from "../../components/NavBar/NavBar";
import PDF from "../../assets/Resume_Chan Young_Ji.pdf"
import { FaFilePdf } from "react-icons/fa";

const ResumePage = () =>
{
    return(
        <div className="page-wrap">
            <NavBar />
            <div className="resume-wrap">

                <div className="pdf-icon">
                    <a href={PDF} download="Resume_Chan Young_Ji.pdf">
                        <FaFilePdf size={30}/>
                        <text>Download My Resume (PDF file)</text>
                    </a>
                </div>

                <div className="profile">
                    <div className="subheader">Profile</div>
                    <div className="textbox">
                        Senior in Computer Science & Engineering with a passion for turning creative ideas into
                        practical applications. Proficient in programming and software development in multiple
                        languages such as Python, Java, C++, and more. Additionally, experienced in handling
                        hardware through electrical engineering courses and robotics club. <br/>
                        Strong leadership skills gained from leading a college club committee and military background.
                    </div>
                </div>

                <div className="exp">
                    <div className="subheader">Experience</div>
                    <div className="exp-wrap">
                        <div className="left-wrap">
                            <div className="time"> {/*Undergraduate Research*/}
                                2024 - Present
                                <br /><text>Jul</text>
                            </div>
                            <div className="time"> {/*KSEA YG Leader*/}
                                2023 - Present
                                <br /><text>Mar</text>
                            </div>
                            <div className="time"> {/*LA*/}
                                2023 - 2024
                                <br /><text>Sep Apr</text>
                            </div>
                            <div className="time"> {/*ROKA*/}
                                2021 - 2023
                                <br /><text>Jul Jan</text>
                            </div>
                            <div className="time"> {/*ROKA*/}
                                2018
                                <br /><text>Jun-Jul</text>
                            </div>
                        </div>
                        <div className="division-line"></div>
                        <div className="right-wrap">
                            <div className="description">
                                Undergraduate Research (C2Rust)
                                <br /><text>@ UCI</text>
                            </div>
                            <div className="description">
                                KSEA UCI Youth Group Leader
                                <br /><text>@ a Student Organization in UCI</text>
                            </div>
                            <div className="description">
                                Informatics & Computer Science Learning Assistant
                                <br /><text>@ UCI</text>
                            </div>
                            <div className="description">
                                Lance Corporal (KOR) / Sergeant (US)
                                <br /><text>@ Republic of Korea Army (ROKA)</text>
                            </div>
                            <div className="description">
                            Engineer Student
                                <br /><text>@ Bluestamp Engineering</text>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="skills">
                    <div className="subheader">Skills</div>
                    <div className="grid-wrap">
                        <div>Python<div className="bar-70">70%</div></div>
                        <div>Java  <div className="bar-80">80%</div></div>
                        <div>C++   <div className="bar-60">60%</div></div>
                        <div>JS, React/React Native, HTML, SCSS 
                                   <div className="bar-80">80%</div></div>
                        <div>Rust  <div className="bar-60">60%</div></div>

                        <div>Figma/Photoshop/Illustrator<div className="bar-70">70%</div></div>
                        <div>LISP/Prolog                <div className="bar-60">60%</div></div>
                        <div>Verilog/VHDL               <div className="bar-60">60%</div></div>
                        <div>Arduino/Microchip Studio   <div className="bar-80">80%</div></div>
                        <div>Microsoft Office Suite (Word/Excel)
                                                        <div className="bar-80">80%</div></div>
                    </div>
                </div>

                <div className="interests">
                    <div className="subheader">Interests</div>
                    <ul className="textlist">
                        <li>Actively acquiring proficiency in new coding languages and platforms <br />
                            (currently experimenting ReactJS and Rust)</li>
                        <li>Developing video games (using RPG Maker XP or Unity)</li>
                        <li>Watching movies and reading books (mainly novels)</li>
                        <li>Traveling around the world with family (or friends)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ResumePage