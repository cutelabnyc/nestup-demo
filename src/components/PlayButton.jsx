import React from "react";

const style = {
    fill: "none",
    stroke: "#fff",
    strokeMiterlimit: 10,
    strokeWidth: "3px"
};

export const PlayButton = () => {
    return (
        <div className="playButton">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.5 31.75">
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Codebox">
                        <polygon style={style} points="24.5 15.88 13 22.52 1.5 29.16 1.5 15.88 1.5 2.6 13 9.24 24.5 15.88" />
                    </g>
                </g>
            </svg>
        </div>
    );
}