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
                name: "Snap"
            }
        ],
        urls: {
            C1: "https://nestup.s3.amazonaws.com/soundcloud/248142__dpren__fat-kick.wav",
            D1: "https://nestup.s3.amazonaws.com/soundcloud/387186__alexiero-1__ai-snare-20.wav",
            // You need the ["F#1"] syntax because of the sharp
            ["F#1"]: "https://nestup.s3.amazonaws.com/soundcloud/397042__fairhavencollection__mega-hi-hat-1.wav",
            D2: "https://nestup.s3.amazonaws.com/ProducerSpot-House-Drums/Percussions/House%20Snap%2002.wav"
        }
    },
    {
        id: "edm",
        name: "EDM Kit 01",
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
                name: "Boop"
            }
        ],
        urls: {
            C1: "https://nestup.s3.amazonaws.com/ProducerSpot-EDM-Drums/EDM%20Kicks/edm-kick-01.wav",
            D1: "https://nestup.s3.amazonaws.com/ProducerSpot-EDM-Drums/EDM%20Snares/edm-snare-01.wav",
            ["F#1"]: "https://nestup.s3.amazonaws.com/ProducerSpot-EDM-Drums/EDM%20HiHats/edm-hihat-04.wav",
            D2: "https://nestup.s3.amazonaws.com/ProducerSpot-EDM-Drums/EDM%20Percs/edm-perc-01.wav"
        }
    },
    {
        id: "edm2",
        name: "EDM Kit 02",
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
                name: "Crash"
            }
        ],
        urls: {
            C1: "https://nestup.s3.amazonaws.com/ProducerSpot-EDM-Drums/EDM%20Kicks/edm-kick-04.wav",
            D1: "https://nestup.s3.amazonaws.com/ProducerSpot-EDM-Drums/EDM%20Snares/edm-snare-12.wav",
            ["F#1"]: "https://nestup.s3.amazonaws.com/ProducerSpot-EDM-Drums/EDM%20HiHats/edm-hihat-43.wav",
            D2: "https://nestup.s3.amazonaws.com/ProducerSpot-EDM-Drums/EDM%20Crashes/edm-crash-07.wav"
        }
    },
    {
        id: "edm3",
        name: "EDM Kit 03",
        voices: [
            {
                note: "C1",
                name: "Kick"
            }, 
            {
                note: "D1",
                name: "Clap",
            },
            {
                note: "F#1",
                name: "Low Bongo"
            },
            {
                note: "D2",
                name: "High Bongo"
            }
        ],
        urls: {
            C1: "https://nestup.s3.amazonaws.com/ProducerSpot-EDM-Drums/EDM%20Kicks/edm-kick-05.wav",
            D1: "https://nestup.s3.amazonaws.com/ProducerSpot-EDM-Drums/EDM%20Claps/edm-clap-15.wav",
            ["F#1"]: "https://nestup.s3.amazonaws.com/ProducerSpot-EDM-Drums/EDM%20Percs/edm-perc-31.wav",
            D2: "https://nestup.s3.amazonaws.com/ProducerSpot-EDM-Drums/EDM%20Percs/edm-perc-32.wav"
        }
    },
    {
        id: "piano",
        name: "Grand Piano",
        voices: [
            {
                note: "A2",
                name: "A2"
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
                note: "G3",
                name: "G3"
            }
        ],
        urls: {
            C3: "https://nestup.s3.amazonaws.com/demo-sounds/pno%20med%20[2021-03-28%20140201].wav"
        }
    },
    {
        id: "marimba",
        name: "Marimba",
        volume: -9,
        voices: [
            {
                note: "B2",
                name: "B2"
            }, 
            {
                note: "D3",
                name: "D3",
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
            C3: "https://nestup.s3.amazonaws.com/demo-sounds/marimba%20[2021-03-28%20140200].wav"
        }
    },
    {
        id: "duck synth",
        name: "Duck Synth",
        voices: [
            {
                note: "B2",
                name: "B2"
            }, 
            {
                note: "D3",
                name: "D3",
            },
            {
                note: "F#3",
                name: "F#3"
            },
            {
                note: "A3",
                name: "A3"
            }
        ],
        urls: {
            C3: "https://nestup.s3.amazonaws.com/duckSound.wav"
        }
    },
    {
        id: "knock",
        name: "Knock Knock",
        volume: 6,
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
    },
    {
        id: "808-A",
        name: "808 Kit A",
        voices: [
            {
                note: "C3",
                name: "Kick"
            }, 
            {
                note: "D3",
                name: "Snare",
            },
            {
                note: "F3",
                name: "Clap"
            },
            {
                note: "G3",
                name: "Hat"
            }
        ],
        urls: {
            C3: "https://nestup.s3.amazonaws.com/ProducerSpot-808-Drums/Kicks/808-kick-05.wav",
            D3: "https://nestup.s3.amazonaws.com/ProducerSpot-808-Drums/Snares/808-snare-03.wav",
            F3: "https://nestup.s3.amazonaws.com/ProducerSpot-808-Drums/Claps/808-clap-01.wav",
            G3: "https://nestup.s3.amazonaws.com/ProducerSpot-808-Drums/Hats/808-hat-22.wav",
        }
    },
    {
        id: "House-A",
        name: "House Kit A",
        voices: [
            {
                note: "C3",
                name: "Kick"
            }, 
            {
                note: "D3",
                name: "Organ",
            },
            {
                note: "F3",
                name: "Clap"
            },
            {
                note: "G3",
                name: "Hat"
            }
        ],
        urls: {
            C3: "https://nestup.s3.amazonaws.com/ProducerSpot-House-Drums/Kicks/House%20Kick%2001.wav",
            D3: "https://nestup.s3.amazonaws.com/ProducerSpot-House-Drums/SFX/House%20SFX%2009.wav",
            F3: "https://nestup.s3.amazonaws.com/ProducerSpot-House-Drums/Claps/House%20Clap%2013.wav",
            G3: "https://nestup.s3.amazonaws.com/ProducerSpot-House-Drums/Hats/House%20HiHat%2003.wav",
        }
    },
    {
        id: "House-B",
        name: "House Kit B",
        voices: [
            {
                note: "C3",
                name: "Kick"
            }, 
            {
                note: "D3",
                name: "Tom",
            },
            {
                note: "F3",
                name: "Clap"
            },
            {
                note: "G3",
                name: "Hat"
            }
        ],
        urls: {
            C3: "https://nestup.s3.amazonaws.com/ProducerSpot-House-Drums/Kicks/House%20Kick%2005.wav",
            D3: "https://nestup.s3.amazonaws.com/ProducerSpot-House-Drums/Toms/House%20Tom%2005.wav",
            F3: "https://nestup.s3.amazonaws.com/ProducerSpot-House-Drums/Snares%20&%20Rims/House%20Snare%2021.wav",
            G3: "https://nestup.s3.amazonaws.com/ProducerSpot-House-Drums/Hats/House%20HiHat%2008.wav",
        }
    },
    {
        id: "Hard-A",
        name: "Hard Kit A",
        voices: [
            {
                note: "C3",
                name: "Kick"
            }, 
            {
                note: "D3",
                name: "Snare",
            },
            {
                note: "F3",
                name: "Yelp"
            },
            {
                note: "G3",
                name: "Hat"
            }
        ],
        urls: {
            C3: "https://nestup.s3.amazonaws.com/splice/kick-01.wav",
            D3: "https://nestup.s3.amazonaws.com/splice/snare-01.wav",
            F3: "https://nestup.s3.amazonaws.com/splice/voice-01.wav",
            G3: "https://nestup.s3.amazonaws.com/ProducerSpot-House-Drums/Hats/House%20HiHat%2020.wav",
        }
    },
    {
        id: "Hard-B",
        name: "Hard Kit B",
        voices: [
            {
                note: "C3",
                name: "Kick"
            }, 
            {
                note: "D3",
                name: "Snare",
            },
            {
                note: "F3",
                name: "Tom"
            },
            {
                note: "G3",
                name: "Hat-2"
            }
        ],
        urls: {
            C3: "https://nestup.s3.amazonaws.com/splice/kick-02.wav",
            D3: "https://nestup.s3.amazonaws.com/splice/snare-02.wav",
            F3: "https://nestup.s3.amazonaws.com/ProducerSpot-House-Drums/Toms/House%20Tom%2012.wav",
            G3: "https://nestup.s3.amazonaws.com/ProducerSpot-House-Drums/Hats/House%20HiHat%2012.wav",
        }
    },
    {
        id: "Voices-A",
        name: "Voices",
        voices: [
            {
                note: "C3",
                name: "Ah-1"
            }, 
            {
                note: "G2",
                name: "Ah-2",
            },
            {
                note: "C4",
                name: "Oo-1"
            },
            {
                note: "G4",
                name: "Oo-2"
            }
        ],
        urls: {
            C3: "https://nestup.s3.amazonaws.com/splice/voice-03.wav",
            C4: "https://nestup.s3.amazonaws.com/splice/voice-04.wav"
        }
    }
];
