import React from "react";

export const PatternPicker = ({ patterns, onPick, audioManager }) => {

    const handlePick = (pattern) => {
        if (audioManager.state !== "running") {
            audioManager.start();
        }

        onPick(pattern)
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