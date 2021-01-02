import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import { AudioManagerContext } from "./contexts/audio";
import { SharableProvider } from "./contexts/sharable";

ReactDOM.render(
	<SharableProvider>
		<AudioManagerContext.Consumer>
			{value => <App audioManager={value} />}
		</AudioManagerContext.Consumer>
	</SharableProvider>,
	document.getElementById("root")
);
