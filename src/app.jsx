import React from "react";
import "./style/sidebar.css";
import { AudioManagerContext } from "./contexts/audio";
import { LeftMenu } from "./components/LeftMenu";
import { NestupArea } from "./components/NestupArea";
import "./style/nestup-demo.css";

// kick - C2
// snare - C#2
// hihat - D2
// cowbell - D#2 

export const App = ({ audioManager, initialState }) => {
    return (
        <div className="App">
            <LeftMenu />
            <AudioManagerContext.Consumer>
                {value => <NestupArea audioManager={value} /> }
            </AudioManagerContext.Consumer>
        </div>
    )  
};
