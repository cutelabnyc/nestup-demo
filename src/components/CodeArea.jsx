import React from "react";
import CodeMirror from "codemirror/lib/codemirror";
import "codemirror/lib/codemirror.css"
import { useEffect, useRef } from "react";

export const CodeArea = ({ name, onSubmit, audioManager }) => {

    const textAreaRef = useRef(null);

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

        }, []
    );

    return (
        <textarea name={ name } ref= { textAreaRef } />
    )
}