import React from "react";
import { ShareModal } from "./ShareModal";
import { SharableContext } from "../contexts/sharable";

export const Overlay = ({onClick}) => {
    return (
        <div className="overlay" onClick={onClick}>
            <SharableContext.Consumer>
                {({ state }) => {
                    return <ShareModal state={state}/>
                }}
            </SharableContext.Consumer>
        </div>
    );
}