import React, { useState, useEffect } from "react";

const style = {
    fill: "#fff",
    stroke: "none",
    strokeWidth: "0px"
};

const orangeStyle = {
    fill: "#FFA500",
    stroke: "none",
    strokeWidth: "0px"
};

export const OneFourChooser = ({ selectedIndex, onSelectIndex }) => {

    const handleButtonPress = (idx) => {
        setOwnSelectedIndex(idx);
        if (onSelectIndex) onSelectIndex(idx);
    }

    useEffect(() => {
        setOwnSelectedIndex(selectedIndex);
    }, [selectedIndex]);

    const [ownSelectedIndex, setOwnSelectedIndex] = useState(0);

    return (
        <div className="oneFourContainer">
            <div className={"one sideActionButton " + (ownSelectedIndex === 0 ? "selected" : "")} onClick={() => handleButtonPress(0)}>
                One
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27">
                    <g style={(ownSelectedIndex === 0 ? orangeStyle : style)}>
                        <rect width="27" height="27" />
                    </g>
                </svg>
            </div>
            <div className={"four sideActionButton " + (ownSelectedIndex === 1 ? "selected" : "")} onClick={() => handleButtonPress(1)}>
                Four
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27">
                <g style={(ownSelectedIndex === 1 ? orangeStyle : style)}>
                        <rect width="12" height="12" />
                        <rect width="12" height="12" x="15"/>
                        <rect width="12" height="12" y="15"/>
                        <rect width="12" height="12" x="15" y="15"/>
                    </g>
                </svg>
            </div>
        </div>
    )
};
