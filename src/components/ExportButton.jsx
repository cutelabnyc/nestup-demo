import React from "react";
import * as midiWriter from "midi-writer-js";
import FileSaver from "file-saver";
import { RhythmParser, Nestup } from "@cutelab/nestup/dist/nestup.bundle";

function writeNestupsAsMidi(nestups, pitches, ticks) {

    let lastTrack;
    let pairs = nestups.map((nestup, idx) => [nestup, pitches[idx]]);
    pairs.sort((a, b) => b[0].beatLength - a[0].beatLength);

    // let maxBeatLength = nestups.reduce((acc, cur) => Math.max(acc, cur.beatLength), 0);

    pairs.forEach(([nestup, pitch]) => {
        // Assume 4 beats to one measure
        const track = new midiWriter.Track();
        const scale = nestup.beatLength / 4;
        const midiLikeEvents = nestup.onOffEvents(ticks * scale);
    
        let tickCounter = 0;
        let noteStartTick = 0;
        midiLikeEvents.forEach((event) => {
    
            if (event.on) {
                noteStartTick = event.time;
            }
    
            else {
                const duration = (event.time) - noteStartTick;
                const wait = noteStartTick - tickCounter;
    
                track.addEvent(new midiWriter.NoteEvent({
                    pitch: pitch,
                    duration: "T" + duration,
                    wait: "T" + wait
                }));
    
                tickCounter += (wait + duration);
            }
        });

        if (lastTrack) {
            lastTrack.mergeTrack(track);
        } else {
            lastTrack = track;
        }
    });

    if (lastTrack) {
        const write = new midiWriter.Writer(lastTrack);
        const midiFileData = write.buildFile();
        const blob = new Blob([midiFileData], {type: "audio/midi;charset=binary"});
        FileSaver.saveAs(blob, "nestup.mid");
        // write.saveMIDI(outfile);
    }
}

export const ExportButton = ({ state }) => {

    const handleClick = () => {
        try {
            const nestups = state.sequences.map(({ text }) => {
                const parser = new RhythmParser();
                const results = parser.parse(text);
                return new Nestup(results);
            });

            writeNestupsAsMidi(nestups, ["C2", "D2", "F#2", "D3"], 512);

        } catch (e) { 
            console.error("Export failed");
            console.error(e);
        }
    }

    return <button className="export-button" onClick={handleClick}>Save</button>
}
