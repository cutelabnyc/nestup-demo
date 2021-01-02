export function makeInititalSharableState(nestupCount) {
    const sequences = new Array(nestupCount);
    for (let i = 0; i < nestupCount; i++) {
        sequences[i] = { text: [] };
    }

    return { sequences };
}

export function sharableReducer(state, action) {

    switch (action.type) {
        case "set_text":
            const { index, text } = action;

            const newSequences = state.sequences.slice();
            newSequences[index] = Object.assign({}, newSequences[index], { text });
            const newState = Object.assign({}, state, { sequences: newSequences });
            console.log(newState);

            return newState;

        default:
            return state;
    }
}
