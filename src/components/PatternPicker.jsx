import React from "react";
import { patterns } from "../data/patterns";

export const PatternPicker = ({ audioManager, dispatch }) => {

    const handlePick = ({ pattern: patterns, instrument }) => {
        if (audioManager.state !== "running") {
            audioManager.start();
        }

        for (let i = 0; i < 4; i++) {
            let text = "";
            if (i < patterns.length) {
                text = patterns[i];
            }

            dispatch({
                type: "set_text",
                index: i,
                text
            });
        }

        if (instrument) {
            dispatch({
                type: "set_instrument_id",
                id: instrument
            });
        }

        dispatch({
            type: "increment_preset"
        });
    }
    
    const patternElts = patterns.map((p, idx) => {
        return (
            <p key={idx} className="pattern-elt" onClick={() => { handlePick(p) }}>
                {p.title}
                {!!p.instrument ? <i className="fab fa-itunes-note"></i> : null}
            </p>
        )
    });

    return (
        <div className="picker">
            {patternElts}
        </div>
    );
}
