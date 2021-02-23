import React from "react";
import { AudioManagerContext } from "./contexts/audio";
import { LeftMenu } from "./components/LeftMenu";
import { NestupArea } from "./components/NestupArea";
import { SharableContext } from "./contexts/sharable";

export const App = ({ audioManager, initialState }) => {
    return (
        <div className="App">
            <LeftMenu />
            <AudioManagerContext.Consumer>
                {value => 
                    <SharableContext.Consumer>
                        {({state, dispatch}) => <NestupArea audioManager={value} state={state} dispatch={dispatch} />}
                    </SharableContext.Consumer>
                }
            </AudioManagerContext.Consumer>
        </div>
    )  
};
