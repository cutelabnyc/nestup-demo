import React, { useState, useEffect } from "react";
import { NestupDrum } from "./NestupDrum";
import { SharableContext } from "../contexts/sharable";
import { ShareButton } from "./ShareButton";
import { ExportButton } from "./ExportButton";
import { PatternPicker } from "./PatternPicker";
import { patterns } from "../data/patterns";
import { AudioManagerContext } from "../contexts/audio";
import { OneFourChooser } from "./OneFourChooser";

const loc = new URL(window.location.href);
const encodedState = loc.searchParams.get("state");
let state;
if (encodedState) {
	try {
		state = JSON.parse(atob(encodedState));
	} catch (e) {}
}

export const NestupArea = ({ audioManager }) => {
    const [sampler, setSampler] = useState(null);
    const [appPatterns, setPatterns] = useState(state);
    const [oneFourLayout, setOneFourLayout] = useState("one");

    const onPick = (pattern) => {
        setPatterns({
            sequences: pattern.map(p => { return { text: p }})
        });
    };

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

    const handleIndexSelected = (idx) => {
        setOneFourLayout(idx === 0 ? "one" : "four");
    }

    return (
        <div className="nestupArea">
            <div className="vertical-align">
                <div className="nestup-demo-root">
                    <div className={"code-container"}>
                        <NestupDrum note={"C1"} sampler={sampler} index={0} initialState={appPatterns} big={oneFourLayout === "one"}/>
                        <NestupDrum note={"D1"} sampler={sampler} index={1} initialState={appPatterns} hidden={oneFourLayout === "one"} />
                        <NestupDrum note={"F#1"} sampler={sampler} index={2} initialState={appPatterns} hidden={oneFourLayout === "one"} />
                        <NestupDrum note={"D2"} sampler={sampler} index={3} initialState={appPatterns} hidden={oneFourLayout === "one"} />
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
            <OneFourChooser onSelectIndex={handleIndexSelected}/>
        </div>
    );
};
