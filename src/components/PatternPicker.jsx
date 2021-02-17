import React from "react";
import { patterns } from "../data/patterns";

export const PatternPicker = ({ audioManager, dispatch }) => {

    const handlePick = (patterns) => {
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

        dispatch({
            type: "increment_preset"
        });
    }
    
    const patternElts = patterns.map((p, idx) => {
        return (
            <p key={idx} className="pattern-elt" onClick={() => { handlePick(p.pattern) }}>{p.title}</p>
        )
    });

    return (
        <div className="picker bm-item-list">
            {patternElts}
        </div>
    );
}
