import React, { useEffect, useState } from "react";
import { CodeArea } from "./CodeArea";
import { RhythmParser, Nestup } from "@cutelab/nestup/dist/nestup.bundle";
import { Sequencer } from "./Sequencer";
import { AudioManagerContext } from "../contexts/audio";
import { SharableContext } from "../contexts/sharable"
import { Visualizer } from "./Visualizer";

export const NestupDrum = ({ note, sampler, index, initialState, hidden, big }) => {

    const [nestup, setNestup] = useState(null);
    const [activeNote, setActiveNote] = useState(-1);

    const handleSubmission = (text) => {
        const parser = new RhythmParser();
        let results;
        try {
            results = parser.parse(text);
            const nextNestup = new Nestup(results);

            setNestup(nextNestup);
        } catch (e) {
            // TODO: mark the parse error
            // throw new ParseError(e);
        }
    };

    const onTriggerNote = (noteIndex) => { setActiveNote(noteIndex) };

    const clear = () => {
        setNestup(null);
    }

    useEffect(() => {
        let initialText = "";

        if (initialState && initialState.sequences && initialState.sequences[index] && initialState.sequences[index].text) {
            if (initialState.sequences[index].text.length) {
                initialText = `${initialState.sequences[index].text}`;
            }
        }

        handleSubmission(initialText);
        
    }, [ initialState ]);

    let initialText = "";

    if (initialState && initialState.sequences && initialState.sequences[index] && initialState.sequences[index].text) {
        if (initialState.sequences[index].text.length) {
            initialText = `${initialState.sequences[index].text}`;
        }
    }

    return (
        <div className={"nestup-drum " + (hidden ? "hidden " : "") + (big ? "big " : "")}>
            <AudioManagerContext.Consumer>
                {value => (
                    <>
                        <SharableContext.Consumer>
                            {({state, dispatch}) => 
                                <CodeArea 
                                    name="nestup" 
                                    onSubmit={ handleSubmission } 
                                    audioManager={value} 
                                    state={state} 
                                    dispatch={dispatch} 
                                    index={index}
                                    initialText={initialText}
                                />
                            }
                        </SharableContext.Consumer>
                        <div className="visualizerContainer">
                            <Visualizer nestup={nestup} activeNoteIndex={activeNote}/>
                            <button className="clearButton" onClick={clear} hidden={nestup === null || nestup.beatLength === 0} >Clear</button>
                        </div>
                        <Sequencer 
                            sampler={sampler} 
                            note={note}
                            audioManager={value} 
                            nestup={nestup}
                            onTriggerNote={onTriggerNote}
                        /> 
                    </>
                )}
            </AudioManagerContext.Consumer>
        </div>
    );
};
