import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "App development",
                    "Game developement",
                    "Website developement",
                    "Wordpress theme developement",
                    "UI / UX Designing"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                
            }}
        />
    );
}

export default Type;
