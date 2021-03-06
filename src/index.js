import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import { SharableProvider } from "./contexts/sharable";
import "./style/nestup-demo.css";
import "./style/sidebar.css";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/brands";

ReactDOM.render(
	<SharableProvider>
		<App />
	</SharableProvider>,
	document.getElementById("root")
);
