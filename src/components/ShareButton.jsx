import React from "react";

export const ShareButton = ({ state }) => {

    const handleClick = () => {
        let currentLocation = new URL(window.location.href);
        let encodedState = btoa(Buffer.from(JSON.stringify(state), "utf8"));
        currentLocation.search = `state=${encodedState}`;

        window.location = currentLocation.href;
    }

    return <button className="share-button" onClick={handleClick}>Share</button>;
}