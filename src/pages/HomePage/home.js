import React, { useEffect, useState } from "react";
import "./home.scss";
import NavBar from "../../components/NavBar/NavBar";
import Type from "./typing";
import Icons from "./icons";
import { portrait } from "../../utils/images";

const HomePage = () =>
{
    
    const [greetText, setGreetText] = useState("");
    const currentDate = new Date();

    useEffect(() => 
    {
        let currentHour = currentDate.getHours();
        if ( currentHour < 12 ) setGreetText("Good Morning!")
        else if ( currentHour < 18 ) setGreetText("Good Afternoon!")
        else setGreetText("Good Evening!")
    // eslint-disable-next-line
    }, []);

    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => 
    {
        if (window.innerWidth < 1200) 
        {
            setIsMobile(true);
        } else 
        {
            setIsMobile(false);
        }
    }

    useEffect(() => { window.addEventListener("resize", handleResize)});

    return(
        <div className="page-wrap">
            <NavBar />
            <div className="home-wrap">
                <div className="left-wrap">
                    <div className="greetings">{greetText}</div>
                    <div className="name">I'm Chan Young Ji, a</div>
                    <div className="typewriter"><Type /></div>
                    { 
                        !isMobile ?
                        <div className="desktop">
                            <Icons />
                            <div>© Chan Young Ji, 2024</div>
                        </div>
                        : 
                        <div className="mobile">
                            <Icons />
                            <div>© Chan Young Ji, 2024</div>
                        </div>
                    }
                </div>
                <div className="right-wrap">
                    <div className="portrait">
                        <img src={portrait} alt=" "></img>
                    </div>
                    <div className="gray-block"></div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;