import React from "react";
import * as Tone from 'tone';

class AudioManager {
    constructor() {
        this._tone = Tone;
    }

    get state() {
        return this._tone.context.state;
    }

    get transport() {
        return this._tone.Transport;
    }

    async start() {
        return this._tone.start();
    }

    get tone() {
        return this._tone;
    }

    async play() {
        await this.start();
        return this._tone.Transport.start();
    }

    async stop() {
        this._tone.Transport.stop();
        this._tone.Transport.position = "0:0:0";
    }
}

export const AudioManagerContext = React.createContext(new AudioManager());
