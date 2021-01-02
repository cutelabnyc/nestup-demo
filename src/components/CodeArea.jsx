import React, { useMemo, useState } from "react";
import CodeMirror from "codemirror/lib/codemirror";
import "codemirror/lib/codemirror.css"
import { useEffect, useRef } from "react";

export const CodeArea = ({ name, onSubmit, audioManager, dispatch, index, initialText }) => {

    const textAreaRef = useRef(null);
    const [codeMirror, setCodeMirror] = useState(null);

    useEffect(
        () => {
            const myCodeMirror = CodeMirror.fromTextArea(textAreaRef.current, {
                indentWithTabs: true,
                lineNumbers: false,
                tabSize: 2
            });

            myCodeMirror.on("keydown", (_instance, event) => {
                if (audioManager.state !== "running") {
                    audioManager.start();
                }
                if (event.shiftKey && event.key === "Enter") {
                    if (onSubmit) onSubmit(myCodeMirror.getValue());
                    event.preventDefault();
                }
            });

            myCodeMirror.on("change", (_instance, _changeObj) => {

                dispatch({
                    type: "set_text",
                    index: index,
                    text: myCodeMirror.getValue()
                });
            });

            setCodeMirror(myCodeMirror);

        }, []
    );

    useEffect(
        () => {
            if (codeMirror) {
                codeMirror.setValue(initialText);
            }
        }, [codeMirror, initialText]
    );

    return (
        <textarea name={ name } ref= { textAreaRef } />
    )
}