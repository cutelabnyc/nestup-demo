import React, { useRef, useState } from "react";

export const CheatRow = ({expression, image, onHover}) => {

    const [hover, setHover] = useState(false);
    const expressionRef = useRef(null);
    const [clicked, setClicked] = useState(false);

    const handleMouseOver = () => {
        setHover(true);
        if (onHover) onHover(true);
    }

    const handleMouseOut = () => {
        setHover(false);
        if (onHover) onHover(false);
    }

    const handleClick = () => {
        if (expressionRef.current) {
            expressionRef.current.select();
            document.execCommand("copy");
            setClicked(true);
        }
    };

    return (
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleClick} className={"cheatRow " + (hover ? "highlight" : "")}>
            <textarea type="text" className="exampleExpression" ref={ expressionRef } value={expression} readOnly={true}></textarea>
            <div className="exampleImageCell"><img src={image}></img></div>
            <div className="exampleCopy"> <i className="far fa-copy"></i></div>
            <div className={"cheatCopiedOverlay " + (clicked ? "showCopiedOverlay" : "")}
                onAnimationEnd={() => {
                    setClicked(false);
                }}
            >
                <div>Copied to Clipboard</div>
            </div>
        </div>
    )
}