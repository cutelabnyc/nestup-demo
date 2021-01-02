import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import { AudioManagerContext } from "./contexts/audio";
import { SharableProvider } from "./contexts/sharable";
import url from "url";

const loc = new URL(window.location.href);
const encodedState = loc.searchParams.get("state");
let state;
if (encodedState) {
	try {
		state = JSON.parse(atob(encodedState));
	} catch (e) {}
}

ReactDOM.render(
	<SharableProvider>
		<AudioManagerContext.Consumer>
			{value => <App audioManager={value} initialState={state} />}
		</AudioManagerContext.Consumer>
	</SharableProvider>,
	document.getElementById("root")
);
