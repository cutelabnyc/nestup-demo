import React, {useState, useEffect} from "react";

export const Sequencer = ({ audioManager, nestup, note, onTriggerNote }) => {

    const [part, setPart] = useState(null);

    useEffect(() => {

        if (part) {
            part.dispose();
        }

        if (nestup) {

            const ppq = audioManager.tone.Transport.PPQ;
            const tickLength = (nestup.beatLength * ppq);
            const sequence = nestup.onOffEvents(tickLength);

            const nextSequence = [];
            for (let i = 0; i < sequence.length; i+=2) {
                let on = sequence[i];
                let off = sequence[i + 1];

                const duration = audioManager.tone.Ticks(off.time - on.time);
                const velocity = 0.7 + Math.random() * 0.3;
                const time = audioManager.tone.Ticks(on.time);
                nextSequence.push([time, {duration, velocity, index: i}]);
            }

            const nextPart = new audioManager.tone.Part(((time, noteData) => {
                // the notes given as the second element in the array
                // will be passed in as the second argument
                if (note && onTriggerNote) onTriggerNote(time, Object.assign({}, noteData, { note }));
            }), nextSequence);
            nextPart.loop = true;
            nextPart.loopStart = 0;
            nextPart.loopEnd = audioManager.tone.Ticks(tickLength);
            nextPart.start(0);

            setPart(nextPart);
        }

    }, [nestup, note]);

    

    return null;
};
