import { instruments } from "../data/instruments";

export class SamplerManager {
    constructor(audioManager) {
        this._audioManager = audioManager;
        this._activeInstrumentId = null;
        this._activeSampler = null;
        this._samplers = {};
    }

    getVoices() {
        if (!this._activeInstrumentId) return null;
        const instrumentData = instruments.find(i => i.id === this._activeInstrumentId);
        if (!instrumentData) return null;
        return instrumentData.voices;
    }

    handleNoteEvent(time, note) {
        if (this._activeSampler) {
            this._activeSampler.triggerAttackRelease(note.note, note.duration, time, note.velocity);
        }
    }

    setInstrument(instrumentId) {
        if (this._activeInstrumentId === instrumentId) return;

        if (this._activeSampler) this._activeSampler.disconnect();
        this._activeInstrumentId = instrumentId;

        let nextSampler = this._samplers[instrumentId];
        if (!nextSampler) {
            const instrumentData = instruments.find(i => i.id === instrumentId);
            if (!instrumentData) return;
            
            nextSampler = new this._audioManager.tone.Sampler({
                urls: instrumentData.urls
            });
            this._samplers[instrumentId] = nextSampler;
        }
        
        if (nextSampler) {
            nextSampler.toDestination();
            this._activeSampler = nextSampler;
        }
    }
}