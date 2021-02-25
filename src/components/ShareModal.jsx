import React, { useState, useRef } from "react";

function makeShareLink(state) {
    const substate = {
        sequences: state.sequences,
        instrument: state.instrument,
        tempo: state.tempo
    };
    const encodedState = btoa(Buffer.from(JSON.stringify(substate), "utf8"));
    let currentLocation = new URL(window.location.href);
    currentLocation.search = `state=${encodedState}`;
    return currentLocation.href;
}

export const ShareModal = ({ state }) => {

    const [clicked, setClicked] = useState(false);
    const stateRef = useRef(null);

    const handleClick = () => {
        if (stateRef.current) {
            stateRef.current.select();
            document.execCommand("copy");
            setClicked(true);
        }
    }

    return (
        <div className="shareModal" onClick={ (event) => {event.stopPropagation()} }>
            <div className="shareModalRow">
                <input type="text" readOnly value={makeShareLink(state)} ref={stateRef}/>
                <div className="exampleCopy" onClick={handleClick}> <i className="far fa-copy"></i></div>
                <div className={"cheatCopiedOverlay " + (clicked ? "showCopiedOverlay" : "")}
                    onAnimationEnd={() => {
                        setClicked(false);
                    }}
                >
                    <div>Copied to Clipboard</div>
                </div>
            </div>
        </div>
    );
}