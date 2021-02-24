export const instruments = [
    {
        id: "basic",
        name: "Basic Kit",
        voices: [
            {
                note: "C1",
                name: "Kick"
            }, 
            {
                note: "D1",
                name: "Snare",
            },
            {
                note: "F#1",
                name: "Hihat"
            },
            {
                note: "D2",
                name: "Cowbell"
            }
        ],
        urls: {
            C1: "https://freesound.org/data/previews/248/248142_3667999-lq.mp3",
            D1: "https://freesound.org/data/previews/387/387186_7255534-lq.mp3",
            // You need the ["F#1"] syntax because of the sharp
            ["F#1"]: "https://freesound.org/data/previews/397/397042_4357738-lq.mp3",
            D2: "https://freesound.org/data/previews/99/99766_29308-lq.mp3"
        }
    },
    {
        id: "edm",
        name: "EDM Kit",
        voices: [
            {
                note: "C1",
                name: "Kick"
            }, 
            {
                note: "D1",
                name: "Snare",
            },
            {
                note: "F#1",
                name: "Hihat"
            },
            {
                note: "D2",
                name: "Cowbell"
            }
        ],
        urls: {
            C1: "https://freesound.org/data/previews/171/171104_2394245-lq.mp3",
            D1: "https://freesound.org/data/previews/277/277046_2511427-lq.mp3",
            ["F#1"]: "https://freesound.org/data/previews/372/372216_6937596-lq.mp3",
            D2: "https://freesound.org/data/previews/99/99766_29308-lq.mp3"
        }
    },
    {
        id: "piano",
        name: "Grand Piano",
        voices: [
            {
                note: "E3",
                name: "E3"
            }, 
            {
                note: "G3",
                name: "G3",
            },
            {
                note: "B3",
                name: "B3"
            },
            {
                note: "C#4",
                name: "C#4"
            }
        ],
        urls: {
            A3: "https://freesound.org/data/previews/442/442978_9159373-lq.mp3"
        }
    },
    {
        id: "marimba",
        name: "Marimba",
        voices: [
            {
                note: "B2",
                name: "B2"
            }, 
            {
                note: "C3",
                name: "C3",
            },
            {
                note: "E3",
                name: "E3"
            },
            {
                note: "F#3",
                name: "F#3"
            }
        ],
        urls: {
            C3: "https://freesound.org/data/previews/373/373579_2475994-lq.mp3"
        }
    },
    {
        id: "knock",
        name: "Knock Knock",
        voices: [
            {
                note: "C3",
                name: "C3"
            }, 
            {
                note: "D3",
                name: "D3",
            },
            {
                note: "F3",
                name: "F3"
            },
            {
                note: "G3",
                name: "G3"
            }
        ],
        urls: {
            C3: "https://nestup.s3.amazonaws.com/knock-c3.wav",
            D3: "https://nestup.s3.amazonaws.com/knock-d3.wav",
            F3: "https://nestup.s3.amazonaws.com/knock-f3.wav",
            G3: "https://nestup.s3.amazonaws.com/knock-g3.wav"
        }
    },
    {
        id: "glitchyNoisy",
        name: "Glitchy Noisy",
        voices: [
            {
                note: "C3",
                name: "Kick"
            }, 
            {
                note: "D3",
                name: "Long",
            },
            {
                note: "F3",
                name: "Swell"
            },
            {
                note: "G3",
                name: "Chirp"
            }
        ],
        urls: {
            C3: "https://nestup.s3.amazonaws.com/glitchWavs/glitchLow.wav",
            D3: "https://nestup.s3.amazonaws.com/glitchWavs/glitchLong.wav",
            F3: "https://nestup.s3.amazonaws.com/glitchWavs/glitchSwell.wav",
            G3: "https://nestup.s3.amazonaws.com/glitchWavs/glitchChirp.wav"
        }
    }
];
