import React, { useState, useEffect } from "react";
import { NestupDrum } from "./NestupDrum";
import { OneFourChooser } from "./OneFourChooser";
import { SamplerManager } from "../engine/samplerManager";
import { ActionMenu } from "./ActionMenu";
import { patterns } from "../data/patterns";

export const NestupArea = ({ audioManager, state, dispatch }) => {
    const [samplerManager, setSamplerManager] = useState(null);
    const [oneFourLayout, setOneFourLayout] = useState("one");
    const [presetSequence, setPresetSequence] = useState(-1);
    const [voices, setVoices] = useState(null);
    const [instrumentId, setInstrumentId] = useState(state.instrument);

    function loadWelcome() {
        if (audioManager.state !== "running") {
            audioManager.start();
        }

        const welcome = patterns.find(p => p.title === "Welcome");

        patterns.forEach(p => {
            console.log(p);
        });

        if (!welcome) return;
    
        for (let i = 0; i < 4; i++) {
            let text = "";
            if (i < welcome.pattern.length) {
                text = welcome.pattern[i];
            }
    
            dispatch({
                type: "set_text",
                index: i,
                text
            });
        }
    
        dispatch({
            type: "increment_preset"
        });
    }

    useEffect(() => {
        let newSamplerManager = new SamplerManager(audioManager);
        setSamplerManager(newSamplerManager);
        // if (instrumentId) {
        //     samplerManewSamplerManagernager.setInstrument(instrumentId);
        //     setVoices(newSamplerManager.getVoices());
        // }

        const loc = new URL(window.location.href);
        const encodedState = loc.searchParams.get("state");
        let state = undefined;
        if (encodedState) {
            try {
                state = JSON.parse(atob(encodedState));
            } catch (e) {}
        }

        if (state === undefined) {
            dispatch({
                type: "set_instrument_id",
                id: "basic"
            });
            loadWelcome();
        } else {
            dispatch({
                type: "rehydrate",
                state
            });
        }
    }, []);

    useEffect(() => {
        if (state.presetSequence !== presetSequence)
            setPresetSequence(state.presetSequence);

        if (instrumentId !== state.instrument) {
            setInstrumentId(state.instrument);
            if (samplerManager) {
                samplerManager.setInstrument(state.instrument);
                setVoices(samplerManager.getVoices());
            }
        }
    }, [state]);

    useEffect(() => {
        let hasMultipleText = false;
        for (let i = 0; i < state.sequences.length; i++) {
            if (i > 0 && state.sequences[i].text.length > 0) {
                hasMultipleText = true;
                break;
            }
        }

        setOneFourLayout(hasMultipleText ? "four" : "one");
    }, [presetSequence]);

    const handleIndexSelected = (idx) => {
        setOneFourLayout(idx === 0 ? "one" : "four");
    };

    const handleNoteEvent = (time, note) => {
        if (samplerManager)
            samplerManager.handleNoteEvent(time, note);
    };

    return (
        <div className="nestupArea">
            <div className="vertical-align">
                <h1 className="title">Nestup — A Language for Musical Rhythms</h1>
                <div className="nestup-demo-root">
                    <div className={"code-container"}>
                        <NestupDrum voice={voices ? voices[0] : null} onNote={handleNoteEvent} index={0} big={oneFourLayout === "one"}/>
                        <NestupDrum voice={voices ? voices[1] : null} onNote={handleNoteEvent} index={1} hidden={oneFourLayout === "one"} />
                        <NestupDrum voice={voices ? voices[2] : null} onNote={handleNoteEvent} index={2} hidden={oneFourLayout === "one"} />
                        <NestupDrum voice={voices ? voices[3] : null} onNote={handleNoteEvent} index={3} hidden={oneFourLayout === "one"} />
                    </div>
                </div>
                <ActionMenu />
            </div>
            <OneFourChooser onSelectIndex={handleIndexSelected} selectedIndex={oneFourLayout === "one" ? 0 : 1}/>
        </div>
    );
};
