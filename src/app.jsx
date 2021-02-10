import React, { useState, useEffect } from "react";
import { NestupDrum } from "./components/NestupDrum";
import "./style/nestup-demo.css";
import "./style/sidebar.css";
import { SharableContext } from "./contexts/sharable";
import { ShareButton } from "./components/ShareButton";
import { ExportButton } from "./components/ExportButton";
import Sidebar from './components/Sidebar';

// kick - C2
// snare - C#2
// hihat - D2
// cowbell - D#2 

export const App = ({ audioManager, initialState }) => {

    const [sampler, setSampler] = useState(null);

    useEffect(() => {
        const createSampler = async () => {

            const nextSampler = new audioManager.tone.Sampler({
                urls: {
                    C1: "https://freesound.org/data/previews/248/248142_3667999-lq.mp3",
                    ["D1"]: "https://freesound.org/data/previews/387/387186_7255534-lq.mp3",
                    ["F#1"]: "https://freesound.org/data/previews/397/397042_4357738-lq.mp3",
                    ["D2"]: "https://freesound.org/data/previews/99/99766_29308-lq.mp3"
                }
            }).toDestination();

            setSampler(nextSampler);
        }
        createSampler();
    }, []);

    return (
        <div className="App" id="outer-container">
            <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
            <div id="page-wrap">
                <div className="vertical-align">
                    <div className="nestup-demo-root">
                        <div className="code-container">
                            <NestupDrum note={"C1"} sampler={sampler} index={0} initialState={initialState} />
                            <NestupDrum note={"D1"} sampler={sampler} index={1} initialState={initialState} />
                            <NestupDrum note={"F#1"} sampler={sampler} index={2} initialState={initialState} />
                            <NestupDrum note={"D2"} sampler={sampler} index={3} initialState={initialState} />
                        </div>
                    </div>
                    <SharableContext.Consumer>
                        { ({ state }) => 
                            <div className="footer">
                                <ShareButton state={state} />
                                <ExportButton state={state} />
                            </div> }
                    </SharableContext.Consumer>
                </div>
            </div>
        </div>
    );
};
