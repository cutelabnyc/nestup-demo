import React, { useState } from "react";
import { CodeArea } from "./CodeArea";
import { RhythmParser, Nestup, ParseError } from "@cutelab/nestup/dist/nestup.bundle";
import { Sequencer } from "./Sequencer";
import { AudioManagerContext } from "../contexts/audio";
import { SharableContext } from "../contexts/sharable"
import { Visualizer } from "./Visualizer";

export const NestupDrum = ({ voice, onNote, index, initialState, hidden, big }) => {

    const [nestup, setNestup] = useState(null);
    const [activeNote, setActiveNote] = useState(-1);
    const [mark, setMark] = useState(null);

    const handleSubmission = (text) => {
        const parser = new RhythmParser();
        let results;
        try {
            try {
                results = parser.parse(text);
            } catch (e) {
                throw new ParseError(e);
            }

            const nextNestup = new Nestup(results);
            setNestup(nextNestup);
            setMark(null);
        } catch (pe) {
            if (pe instanceof ParseError) {
				if (pe.token) {
					const maxSanitizedToken = pe.token === "," ? "##comma##" : pe.token;
                    setMark({
                        line: pe.line - 1,
                        col: pe.col - 1,
                        token: maxSanitizedToken,
                        message: pe.message
                    });
				}
			} else {
				// TODO: Handle the raw error
            }
        }
    };

    const onTriggerNote = (time, note) => {
        setActiveNote(note.index);
        if (onNote) onNote(time, note);
    };

    const clear = () => {
        setNestup(null);
    }

    return (
        <div className={"nestup-drum " + (hidden ? "hidden " : "") + (big ? "big " : "")}>
            <AudioManagerContext.Consumer>
                {value => (
                    <>
                        <p className="voiceLabel">{voice? voice.name : ""}</p>
                        <SharableContext.Consumer>
                            {({state, dispatch}) => 
                                <CodeArea 
                                    name="nestup" 
                                    onSubmit={ handleSubmission } 
                                    audioManager={value} 
                                    state={state} 
                                    dispatch={dispatch} 
                                    index={index}
                                    hidden={hidden}
                                    mark={mark}
                                />
                            }
                        </SharableContext.Consumer>
                        <div className="visualizerContainer">
                            <Visualizer nestup={nestup} activeNoteIndex={activeNote}/>
                            <div className={"clearButton " + ((nestup === null || nestup.beatLength === 0) ? "hidden" : "")}  onClick={clear} >
                                <i className="fas fa-times fa-lg"></i>
                            </div>
                        </div>
                        <Sequencer 
                            note={voice ? voice.note : null}
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
