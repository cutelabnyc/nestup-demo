import React, { useState } from "react";
import { Overlay } from "./Overlay";

export const ShareButton = ({ state }) => {

    const [overlayVisible, setOverlayVisible] = useState(false);

    const handleOverlayClick = () => {
        setOverlayVisible(false);
    };

    const handleClick = () => {
        // let currentLocation = new URL(window.location.href);
        // let encodedState = btoa(Buffer.from(JSON.stringify(state), "utf8"));
        // currentLocation.search = `state=${encodedState}`;

        // window.location = currentLocation.href;

        setOverlayVisible(true);
    }

    return (
        <>
            <button className="share-button" onClick={handleClick}>Share</button>
            {overlayVisible ? <Overlay onClick={handleOverlayClick}/> : null}
        </>
    );
}