import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import { AudioManagerContext } from "./contexts/audio";
import { SharableProvider } from "./contexts/sharable";
import url from "url";

ReactDOM.render(
	<SharableProvider>
		<App />
	</SharableProvider>,
	document.getElementById("root")
);
