import React, {useState, useEffect, useRef} from "react";

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
    let str = 150 / path.length;
    return `rgb(${str}, ${str}, ${str})`;
}

export const Visualizer = ({ nestup, activeNoteIndex }) => {

    const canvasRef = useRef(null);

    useEffect(() => {

        if (canvasRef.current) {

            const ctx = canvasRef.current.getContext('2d');

            // Clear
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

            ctx.fillStyle = "rgb(255, 255, 255, 255)";

            if (nestup) {
                const events = nestup.onOffEvents();

                // Events come in on/off pairs
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

                    ctx.fillStyle = color;
                    ctx.fillRect(nt1 * ctx.canvas.width, 0, (nt2 - nt1) * ctx.canvas.width, ctx.canvas.height);
                    
                    ctx.strokeStyle = "rgb(255, 255, 255, 255)";

                    ctx.beginPath();
                    if (startTime !== 0) {
                        ctx.moveTo(nt1 * ctx.canvas.width, 0);
                        ctx.lineTo(nt1 * ctx.canvas.width, ctx.canvas.height);
                        // ctx.stroke();
                    }

                    // if (endTime !== 1.0) {
                    //     ctx.moveTo(nt2 * ctx.canvas.width, 0);
                    //     ctx.lineTo(nt2 * ctx.canvas.width, ctx.canvas.height);
                    //     ctx.stroke();
                    // }

                    ctx.stroke();
                }
            }
        }

    }, [nestup, activeNoteIndex]);

    return <canvas className="nestup-visualizer" ref={canvasRef} />;
};
