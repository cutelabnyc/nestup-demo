import React from "react";
import * as midiWriter from "midi-writer-js";
import FileSaver from "file-saver";
import { RhythmParser, Nestup } from "@cutelab/nestup/dist/nestup.bundle";

function writeNestupsAsMidi(nestups, pitches, ticks) {

    let lastTrack;
    let pairs = nestups.map((nestup, idx) => [nestup, pitches[idx]]);

    const events = [];
    pairs.forEach(([nestup, pitch]) => {
        const scale = nestup.beatLength / 4;
        const midiLikeEvents = nestup.onOffEvents(ticks * scale);
        midiLikeEvents.forEach((event) => {
            events.push({event, pitch});
        });
    });
    events.sort((a, b) => a.event.time - b.event.time);

    // let maxBeatLength = nestups.reduce((acc, cur) => Math.max(acc, cur.beatLength), 0);
    const track = new midiWriter.Track();

    let noteOnTimes = {};
    let lastEventTime = 0;
    events.forEach(({event, pitch}) => {
        // Assume 4 beats to one measure
    
        if (event.on) {
            track.addEvent(new midiWriter.NoteOnEvent({
                pitch: pitch,
                wait: "t" + (event.time - lastEventTime),
                // duration: "T" + duration,
                // startTick: event.time
            }));

            noteOnTimes[pitch] = event.time;
            lastEventTime = event.time;
        }

        else {
            const noteStartTick = noteOnTimes[pitch];
            const duration = (event.time) - noteStartTick;

            track.addEvent(new midiWriter.NoteOffEvent({
                pitch: pitch,
                // tick: event.time,
                // duration: "T" + duration
                duration: "t" + (event.time - lastEventTime),
            }));

            lastEventTime = event.time;
        }
        // midiLikeEvents.forEach((event) => {
    
        //     if (event.on) {
        //         noteStartTick = event.time;
        //         hasNoteOn = true;
        //     }
    
        //     else {
        //         const duration = (event.time) - noteStartTick;
        //         const wait = noteStartTick - tickCounter;
    
        //         track.addEvent(new midiWriter.NoteOnEvent({
        //             pitch: pitch,
        //             // duration: "T" + duration,
        //             startTick: noteStartTick
        //         }));

        //         track.addEvent(new midiWriter.NoteOffEvent({
        //             pitch: pitch,
        //             tick: event.time,
        //             duration: "T" + duration
        //         }));
    
        //         tickCounter += (wait + duration);
        //         hasNoteOn = false;
        //     }
        // });

        // if (lastTrack) {
        //     lastTrack.mergeTrack(track);
        // } else {
        //     lastTrack = track;
        // }
    });

    if (track) {
        const write = new midiWriter.Writer(track);
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
            throw e
        }
    }

    return (
        <div className="actionButtonContainer" onClick={handleClick}>
            <p>Save</p>
            <i className="fas fa-download"></i>
        </div>
    );
}
