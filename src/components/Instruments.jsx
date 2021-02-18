import React from "react";
import { instruments } from "../data/instruments";

export const Instruments = ({ state, dispatch }) => {

    const handlePick = (id) => {
        dispatch({
            type: "set_instrument_id",
            id
        });
    }

    const instrumentElts = instruments.map((data, idx) => {
        return (
            <p
                key={idx}
                className={"instrument-elt " + (state.instrument === data.id ? "active" : "")}
                onClick={() => { handlePick(data.id) }}
            >{data.name}</p>
        )
    });

    return <div className="picker bm-item-list">{instrumentElts}</div>
}
