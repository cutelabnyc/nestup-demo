import React from "react";
import { SharableContext } from "../contexts/sharable";
import { ShareButton } from "./ShareButton";
import { ExportButton } from "./ExportButton";
import { PlayButton } from "./PlayButton";
import { AudioManagerContext } from "../contexts/audio";
import { DraggableNumber } from "./DraggableNumber";

export const ActionMenu = () => {
    return (
                <div className="actionMenu">
                    <AudioManagerContext.Consumer>
                        {value => <PlayButton audioManager={value} />}
                    </AudioManagerContext.Consumer>
                    <AudioManagerContext.Consumer>
                        {audioManager => 
                            <SharableContext.Consumer>
                                {({state, dispatch}) => 
                                    <DraggableNumber audioManager={audioManager} state={state} dispatch={dispatch} />
                                }
                            </SharableContext.Consumer>
                        }
                    </AudioManagerContext.Consumer>
                    <ShareButton />
                    <SharableContext.Consumer>
                        { ({ state }) => <ExportButton state={state} /> }
                    </SharableContext.Consumer>
                    <div>Max for Live</div>
                </div>
    )
}