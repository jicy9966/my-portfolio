import React from "react";
import TypewriterComponent from "typewriter-effect";

function Type()
{
    return(
        <TypewriterComponent 
            options={{strings: ["Full Stack Developer.", 
                                "Software Engineer.", 
                                "Computer Science & Engineering Student.", 
                                "Learning Assistant.",
                                "Passionate Gamer."], 
                                autoStart: true, loop: true, deleteSpeed: 50, }}
        />
    );
}

export default Type;