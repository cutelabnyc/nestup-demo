export function makeInititalSharableState(nestupCount) {
    const sequences = new Array(nestupCount);
    for (let i = 0; i < nestupCount; i++) {
        sequences[i] = { text: "" };
    }

    return {
        sequences,
        presetSequence: 0,
        instrument: null
    };
}

export function sharableReducer(state, action) {

    let newState;
    switch (action.type) {
        case "set_text":
            const { index, text } = action;

            const newSequences = state.sequences.slice();
            newSequences[index] = Object.assign({}, newSequences[index], { text });
            newState = Object.assign({}, state, { sequences: newSequences });
            return newState;

        case "increment_preset":
            newState = Object.assign({}, state, { presetSequence: (state.presetSequence + 1) });
            return newState;

        case "set_instrument_id":
            const { id } = action;
            newState = Object.assign({}, state, { instrument: id });
            return newState;

        default:
            return state;
    }
}
