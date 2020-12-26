import React, { useState } from "react";
import { CodeArea } from "./CodeArea";
import { RhythmParser, Nestup } from "@cutelab/nestup/dist/nestup.bundle";
import { Sequencer } from "./Sequencer";
import { AudioManagerContext } from "../contexts/audio";

export const NestupDrum = ({ note, sampler }) => {

    const [nestup, setNestup] = useState(null);

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

    return (
        <div className="nestup-drum">
            <AudioManagerContext.Consumer>
                {value => (
                    <>
                        <CodeArea name="nestup" onSubmit={ handleSubmission } audioManager={value} />
                        <Sequencer 
                            sampler={sampler} 
                            note={note}
                            audioManager={value} 
                            nestup={nestup} 
                        /> 
                    </>
                )}
            </AudioManagerContext.Consumer>
        </div>
    );
};