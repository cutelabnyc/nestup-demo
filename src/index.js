import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import { SharableProvider } from "./contexts/sharable";

ReactDOM.render(
	<SharableProvider>
		<App />
	</SharableProvider>,
	document.getElementById("root")
);
