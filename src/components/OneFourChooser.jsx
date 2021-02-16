import React from "react";

export const OneFourChooser = ({ selectedIndex, onSelectIndex }) => {

    const handleButtonPress = (idx) => {
        if (onSelectIndex) onSelectIndex(idx);
    }

    return (
        <div className="oneFourContainer">
            <button className="one" onClick={() => handleButtonPress(0)}>One</button>
            <button className="four" onClick={() => handleButtonPress(1)}>Four</button>
        </div>
    )
};
