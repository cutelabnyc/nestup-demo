import React, { useState, useRef, useEffect } from "react";

export const DraggableNumber = ({ state, dispatch, audioManager }) => {

    const [inputValue, setInputValue] = useState(parseFloat(state.tempo).toFixed(2));
    const [draggingPointerId, setDraggingPointerId] = useState(null);
    const inputRef = useRef(null);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    useEffect(() => {
        if (!draggingPointerId) {
            if (audioManager.transport.bpm.value !== state.tempo) {
                audioManager.transport.bpm.value = state.tempo;
                setInputValue(parseFloat(state.tempo).toFixed(2));
            }
        }
    }, [state]);

    const doUpdateTempo = (iv) => {
        const oldTempo = state.tempo;
        const candidateTempo = Number.parseFloat(iv);
        if (!isNaN(candidateTempo)) {
            const newTempo = Math.min(300, Math.max(10, candidateTempo));
            setInputValue(parseFloat(newTempo).toFixed(2));
            audioManager.transport.bpm.value = newTempo;
            dispatch({
                type: "set_tempo",
                tempo: newTempo
            });
        } else {
            setInputValue(oldTempo);
        }
    }

    const handleSubmit = (event) => {
        doUpdateTempo(inputValue);
        event.preventDefault();
        if (inputRef.current) inputRef.current.blur();
    };

    const handlePointerDown = (event) => {
        if (inputRef.current) {
            inputRef.current.setPointerCapture(event.pointerId);
            setDraggingPointerId(event.pointerId);
        }
    };

    const handlePointerMove = (event) => {
        if (!!event.pointerId && event.pointerId === draggingPointerId) {
            const newTempo = state.tempo - event.movementY / 4;
            doUpdateTempo(newTempo);
        } 
    };

    const handlePointerUp = (event) => {
        if (draggingPointerId) {
            if (inputRef.current) {
                inputRef.current.releasePointerCapture(event.pointerId);
                setDraggingPointerId(null);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="draggableNumberForm">
            <input
                className="tempoInput"
                type="number"
                step="0.01"
                onChange={handleChange}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                value={inputValue}
                ref={inputRef}
                name="tempo"
            />
            <input type="submit" style={{display: "none"}}/>
        </form>
    )
};
