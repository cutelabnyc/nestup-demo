import React, { useEffect, useState } from "react";

const style = {
    fill: "#f1f1f1",
    stroke: "none",
    strokeWidth: "0px"
};

export const PlayButton = ({ audioManager }) => {

    const [playing, setPlaying] = useState(false);
    const [pulsing, setPulsing] = useState(true);

    useEffect(() => {
        setPlaying(audioManager.transport.state === "started");
    }, []);

    audioManager.transport.on("start", () => {
        setPlaying(true)
        setPulsing(false);
    });
    audioManager.transport.on("stop", () => {
        setPlaying(false)
    });

    const handleClick = () => {
        if (audioManager.transport.state === "started") {
            audioManager.stop();
        } else {
            audioManager.play();
        }
    };

    const playSVG = (
        <g id="Layer_2" data-name="Layer 2">
            <g id="Codebox">
                <polygon style={style} points="24.5 15.88 13 22.52 1.5 29.16 1.5 15.88 1.5 2.6 13 9.24 24.5 15.88" />
            </g>
        </g>
    );

    const pauseSVG = (
        <g id="Layer_2" data-name="Layer 2">
            <g id="Codebox">
                <rect style={style} width="7" height="80%" x="2" y="10%"/>
                <rect style={style} width="7" height="80%" x="15" y="10%"/>
            </g>
        </g>
    );

    return (
        <div className={"playButton " + (pulsing ? "pulsing" : "")} onClick={ handleClick }>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.5 31.75">
                {playing ? pauseSVG : playSVG}
            </svg>
        </div>
    );
}