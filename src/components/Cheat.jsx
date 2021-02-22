import React, { useState } from "react";
import cheat01 from "../img/cheat-01.png";
import cheat02 from "../img/cheat-02.png";
import cheat03 from "../img/cheat-03.png";
import cheatScale2 from "../img/cheat-scale2.png";
import cheat04 from "../img/cheat-04.png";
import cheat05 from "../img/cheat-05.png";
import cheat06 from "../img/cheat-06.png";
import cheat07 from "../img/cheat-07.png";
import cheat08 from "../img/cheat-08.png";
import cheat09 from "../img/cheat-09.png";
import cheat10 from "../img/cheat-10.png";

const expressions = [
    "[4]",
    "[[2] [2]]",
    "[3 [2] [3]]",
    "[[] []] [2, 3/7 [] []]",
    "[4] {3}",
    "[4] {3} [4] {5}",
    "[4] {3 (2) {3} }",
    "[4] {3 (2, 2) {5} }",
    "[4 [1] [1] {0} [1]]",
    "[4 [1] [1] _ [1] [1]]",
    "[4 {5 (2) [] _ (3) [] }]"
];

const images = [
    cheat01,
    cheat02,
    cheat03,
    cheatScale2,
    cheat04,
    cheat05,
    cheat06,
    cheat07,
    cheat08,
    cheat09,
    cheat10,
];

const explanations = [
    "One event, 4 beats long",
    "Two events, each 2 beats long",
    "Two events, squeezed into 3 beats. The first will have length 2/5 of 3 beats, and the second will have length 3/5 of 3 beats.",
    "Four events, with the second two events scaled at a ratio of 3:7 to the first two.",
    "Three events, evenly spaced over 4 beats (aka a triplet over 4 beats)",
    "A 3:4 triplet followed by a 5:4 quintuplet",
    "A triplet, where the second event has been itself subdivided into a triplet. A total of 5 note events",
    "A triplet, where the second and third beat have been replaced with a quintuplet over that same time. A total of 6 events",
    "Three equally long notes in the space of 4 beats (aka a triplet), where the second note is a rest",
    "Four notes in the space of four beats, The second note is tied to the third.",
    "Five notes in the space of four beats, where the second note is tied to the third."
];

export const Cheat = () => {

    const [hover, setHover] = useState(-1);

    const handleMouseOver = (idx) => {
        setHover(idx);
    };

    const handleMouseOut = () => {
        setHover(-1);
    }

    const elts = expressions.map((ex, idx) => {
        return (
            <tr key={idx} onMouseOver={() => handleMouseOver(idx)} onMouseOut={handleMouseOut} className={"cheatRow " + (idx === hover ? "highlight" : "")}>
                <td className="exampleExpression">{ex}</td>
                <td className="exampleImageCell"><img src={images[idx]}></img></td>
                <td className="exampleCopy"> <i className="far fa-copy"></i></td>
            </tr>
        )
    });

    return (
        <div className="leftMenuPane">
            <table className="cheatTable">
                <tbody>
                    {elts}
                </tbody>
            </table>
            <div className="cheatExplanation">
                {(hover >= 0) ? explanations[hover] : ""}
            </div>
        </div>
    );
}
