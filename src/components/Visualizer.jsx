import React, {useRef} from "react";
import useResizeAware from 'react-resize-aware';

const hc_colors = [
	[230, 25, 75],
	[60, 180, 75],
	[255, 225, 25],
	[0, 130, 200],
	[245, 130, 48],
	[145, 30, 180],
	[70, 220, 220],
	[240, 50, 230],
	[210, 245, 60],
	[0, 128, 128],
	[170, 110, 40],
	[128, 0, 0],
	[128, 128, 0],
	[0, 0, 128]
];

function colorForPath(path) {
    let str = 220 / path.length;
    return `rgb(${str}, ${str}, ${str})`;
}

export const Visualizer = ({ nestup, activeNoteIndex }) => {

    let hspacing = 1;
    let vspacing = 1;
    const [resizeListener, sizes] = useResizeAware();
    hspacing /= Math.max(sizes.width, 1) / 100;
    vspacing /= Math.max(sizes.height, 1) / 100;

    let svgElements = [];
    if (nestup) {
        const events = nestup.onOffEvents();
        for (let i = 0; i < events.length; i += 2) {
            let startEvent = events[i];
            let endEvent = events[i + 1];
            let startTime = startEvent.time;
            let endTime = endEvent.time;
            let path = startEvent.path;
            let nt1 = startTime;
            let nt2 = endTime;
            let color = colorForPath(path);
            if (activeNoteIndex === i)
                color = "rgb(255, 255, 255, 255)";
            let width = Math.max(0, 100 * (nt2 - nt1) - 2 * hspacing);
            let height = Math.max(0, 100 - 2 * vspacing);

            svgElements.push(
                <rect
                    x={`${nt1 * 100 + hspacing}%`}
                    y={`${vspacing}%`}
                    width={`${width}%`}
                    height={`${height}%`}
                    stroke={"rgb(255, 255, 255, 255)"}
                    fill={color}
                    key={i}
                    rx={5}
                    ry={5}
                    className={"beatrect " + (activeNoteIndex === i ? "beatblink" : "")}
                />
            );
        }
    }

    return (
        <div className="nestupVisualizerWrapper">
            {resizeListener}
            <svg className="nestup-visualizer">{svgElements}</svg>
        </div>
    );
};
