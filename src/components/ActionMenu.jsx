import React from "react";
import { SharableContext } from "../contexts/sharable";
import { ShareButton } from "./ShareButton";
import { ExportButton } from "./ExportButton";
import { PlayButton } from "./PlayButton";

export const ActionMenu = () => {
    return (
                <div className="actionMenu">
                    <PlayButton />
                    <div>120 bpm</div>
                    <div>|</div>
                    <ShareButton />
                    <div>|</div>
                    <SharableContext.Consumer>
                        { ({ state }) => <ExportButton state={state} /> }
                    </SharableContext.Consumer>
                    <div>|</div>
                    <div>Max for Live</div>
                </div>
    )
}