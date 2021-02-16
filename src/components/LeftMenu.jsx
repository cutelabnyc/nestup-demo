import React, { useState } from "react";
import { Presets } from "./Presets";
import { Instruments } from "./Instruments";
import { Cheat } from "./Cheat";
import { About } from "./About";

export const LeftMenu = () => {

    const [selectedIndex, setSelectedIndex] = useState(0);

    let viewArea;
    switch (selectedIndex) {
        case 0:
            viewArea = <Presets />
            break;
        case 1:
            viewArea = <Instruments />
            break;
        case 2:
            viewArea = <Cheat />
            break;
        default:
            viewArea = <About />
            break;
    }

    return (
        <div className="leftMenu">
            <div className="menuHeader">
                <p
                    className={"chooser " + (selectedIndex === 0 ? "selected" : "")}
                    onClick={() => setSelectedIndex(0)}
                >Presets</p>
                <p>|</p>
                <p
                    className={"chooser " + (selectedIndex === 1 ? "selected" : "")}
                    onClick={() => setSelectedIndex(1)}
                >Instruments</p>
                <p>|</p>
                <p
                    className={"chooser " + (selectedIndex === 2 ? "selected" : "")}
                    onClick={() => setSelectedIndex(2)}
                >Cheat</p>
                <p>|</p>
                <p
                    className={"chooser " + (selectedIndex === 3 ? "selected" : "")}
                    onClick={() => setSelectedIndex(3)}
                >About</p>
            </div>
            {viewArea}
        </div>
    )
};
