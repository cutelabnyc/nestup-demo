import React, { useState, useEffect } from "react";
import { NestupDrum } from "./components/NestupDrum";
import "./style/nestup-demo.css";

// kick - C2
// snare - C#2
// hihat - D2
// cowbell - D#2 

export const App = ({ audioManager }) => {

    const [sampler, setSampler] = useState(null);

    useEffect(() => {
        const createSampler = async () => {

            const nextSampler = new audioManager.tone.Sampler({
                urls: {
                    C2: "https://freesound.org/data/previews/248/248142_3667999-lq.mp3",
                    ["C#2"]: "https://freesound.org/data/previews/387/387186_7255534-lq.mp3",
                    ["D2"]: "https://freesound.org/data/previews/397/397042_4357738-lq.mp3",
                    ["D#2"]: "https://freesound.org/data/previews/99/99766_29308-lq.mp3"
                }
            }).toDestination();

            setSampler(nextSampler);
        }
        createSampler();
    }, []);

    return (
        <div className="vertical-align">
            <div className="nestup-demo-root">
                <div className="code-container">
                    <NestupDrum note={"C2"} sampler={sampler} index={0} />
                    <NestupDrum note={"C#2"} sampler={sampler} index={1} />
                    <NestupDrum note={"D2"} sampler={sampler} index={2} />
                    <NestupDrum note={"D#2"} sampler={sampler} index={3} />
                </div>
            </div>
        </div>
    );
};
