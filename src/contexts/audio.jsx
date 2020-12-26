import React from "react";
import * as Tone from 'tone';

class AudioManager {
    constructor() {
        this._tone = Tone;
        this._tone.Transport.start();
    }

    get state() {
        return this._tone.context.state;
    }

    async start() {
        return this._tone.start();
    }

    get tone() {
        return this._tone;
    }
}

export const AudioManagerContext = React.createContext(new AudioManager());
