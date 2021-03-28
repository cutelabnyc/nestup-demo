import React, { useState } from "react";
import CodeMirror from "codemirror/lib/codemirror";
import "codemirror/lib/codemirror.css";
import * as markSelection from "codemirror/addon/selection/mark-selection";
import { useEffect, useRef } from "react";

export const CodeArea = ({ name, onSubmit, audioManager, state, dispatch, index, initialText, hidden, mark }) => {

    const textAreaRef = useRef(null);
    const [codeMirror, setCodeMirror] = useState(null);
    const [presetSequence, setPresetSequence] = useState(-1);
    const [parseAnimate, setParseAnimate] = useState(false);

    const handleParseClicked = () => {
        if (onSubmit && codeMirror) {
            onSubmit(codeMirror.getValue());
        }
        setParseAnimate(true);
    };

    useEffect(
        () => {
            const myCodeMirror = CodeMirror.fromTextArea(textAreaRef.current, {
                indentWithTabs: true,
                lineNumbers: false,
                tabSize: 2,
                styleSelectedText: true
            });

            myCodeMirror.on("keydown", (_instance, event) => {
                if (audioManager.state !== "running") {
                    audioManager.start();
                }
                if (event.shiftKey && event.key === "Enter") {
                    if (onSubmit) {
                        event.preventDefault();
                        setParseAnimate(true);
                        onSubmit(myCodeMirror.getValue());
                    }
                }
            });

            myCodeMirror.on("change", (_instance, _changeObj) => {

                dispatch({
                    type: "set_text",
                    index: index,
                    text: myCodeMirror.getValue()
                });
            });

            myCodeMirror.on("drop", (_editor, ev) => {
                const data = ev.dataTransfer.getData("text/plain");
                if (data && data.length) {
                    myCodeMirror.setValue(data);
                    ev.preventDefault();
                }
            });

            setCodeMirror(myCodeMirror);

        }, []
    );

    useEffect(
        () => {
            if (state.presetSequence !== presetSequence)
                setPresetSequence(state.presetSequence)
        }, [state]
    );

    useEffect(
        () => {
            const text = state.sequences[index].text;
            if (codeMirror) {
                codeMirror.setValue(text);
                onSubmit(text);
                codeMirror.refresh();
            }
        }, [presetSequence]
    );

    useEffect(
        () => {
            if (codeMirror)
                codeMirror.refresh();
        }, [hidden]
    );

    useEffect(
        () => {
            if (!mark && codeMirror) {
                const marks = codeMirror.getAllMarks();
                marks.forEach(m => m.clear());
            }
            else if (codeMirror) {
                const { token, col, line } = mark;
                // If there's a token, mark it
                if (token) {
                    const parsedToken = (token === "##comma##" ? "," : token);
                    codeMirror.markText({line, ch: col}, {line, ch: col + parsedToken.length}, { className: "errortext" });
                }
    
                // Otherwise mark the whole line
                else {
                    const lineText = codeMirror.getLine(line);
                    codeMirror.markText({line, ch: 0}, {line, ch: lineText.length}, { className: "errortext" });
                }
    
                // const errorBox = document.getElementsByClassName("errorBox")[0];
                // errorBox.textContent = message;
                // errorBox.hidden = false;
            }
        }, [mark]
    );

    return (
        <div className="codeFrame">
            <div className="codeMirrorSizer" >
                <textarea name={ name } ref= { textAreaRef } />
            </div>
            <div className="codeFrameFooter">
                <div className={"errorBox " + (!!mark ? "active" : "")}>{mark ? mark.message : ""}</div>
                <div 
                    className={"parseButton " + (parseAnimate ? "blinkparse" : "")}
                    onClick={handleParseClicked}
                    onAnimationEnd={() => {
                        setParseAnimate(false);
                    }}
                >Parse</div>
            </div>
        </div>
    )
}