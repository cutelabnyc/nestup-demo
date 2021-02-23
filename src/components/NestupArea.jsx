import React, { useState, useEffect } from "react";
import { NestupDrum } from "./NestupDrum";
import { OneFourChooser } from "./OneFourChooser";
import { SamplerManager } from "../engine/samplerManager";
import { ActionMenu } from "./ActionMenu";

const loc = new URL(window.location.href);
const encodedState = loc.searchParams.get("state");
let state;
if (encodedState) {
	try {
		state = JSON.parse(atob(encodedState));
	} catch (e) {}
}

export const NestupArea = ({ audioManager, state, dispatch }) => {
    const [samplerManager, setSamplerManager] = useState(null);
    const [oneFourLayout, setOneFourLayout] = useState("one");
    const [presetSequence, setPresetSequence] = useState(-1);
    const [voices, setVoices] = useState(null);
    const [instrumentId, setInstrumentId] = useState(state.instrument);

    useEffect(() => {
        let newSamplerManager = new SamplerManager(audioManager);
        setSamplerManager(newSamplerManager);
        if (instrumentId) {
            samplerManewSamplerManagernager.setInstrument(instrumentId);
            setVoices(newSamplerManager.getVoices());
        }

        dispatch({
            type: "set_instrument_id",
            id: "basic"
        });
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
            <OneFourChooser onSelectIndex={handleIndexSelected}/>
        </div>
    );
};
