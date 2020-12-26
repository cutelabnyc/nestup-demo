import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import { AudioManagerContext } from "./contexts/audio";

ReactDOM.render(
	<AudioManagerContext.Consumer>
		{value => <App audioManager={value} />}
	</AudioManagerContext.Consumer>,
	document.getElementById("root")
);
