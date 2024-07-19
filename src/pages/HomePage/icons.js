import React, { useEffect, useState } from "react";
import "./home.scss"
import Popup from "reactjs-popup";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { SiKakaotalk } from "react-icons/si";
import { kakao_qrcode } from "../../utils/images";

const Icons = () =>
{
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

    useEffect(() => { window.addEventListener("resize", handleResize)})

    return(
        <div className="icons">
            <a href="https://www.instagram.com/jibrian0906/" target="blank">
                <AiFillInstagram size={isMobile ? 30 : 50}/>
            </a>
            <a href="https://www.linkedin.com/in/chan-young-ji-398a95271/" target="blank">
                <IoLogoLinkedin size={isMobile ? 30 : 50}/>
            </a>
            <a href="https://github.com/jicy9966" target="blank">
                <BsGithub size={isMobile ? 25 : 45}/>
            </a>
            <Popup trigger={<button className="kakao-button"><SiKakaotalk size={isMobile ? 25 : 45}/></button>} modal={true}>
                <div className="kakao-pop">
                    <img src={kakao_qrcode} className="kakao-img" alt=" "></img>
                </div>
            </Popup>
        </div>
    );
}

export default Icons;