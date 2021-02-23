import React, { useState } from "react";
import { Overlay } from "./Overlay";

export const ShareButton = ({ state }) => {

    const [overlayVisible, setOverlayVisible] = useState(false);

    const handleOverlayClick = (event) => {
        setOverlayVisible(false);
        event.stopPropagation();
    };

    const handleClick = () => {
        setOverlayVisible(true);
    }

    return (
        <div className="actionButtonContainer" onClick={handleClick}>
            <p>Share</p>
            <i className="fas fa-share"></i>
            {overlayVisible ? <Overlay onClick={handleOverlayClick}/> : null}
        </div>
    );
}