import "./style.css";
import React from "react";
import { createRoot } from "react-dom/client";

import { signal } from "@preact/signals-react";

import Component from "./Component.jsx";

import signalCount from "./store.js";

import { Main } from "./BundledComponent.js";

const Counter = () => {
	return React.createElement(
		"button",
		{ onClick: () => signalCount.value++ },
		`Signal Count: ${signalCount}`
	);
};

const App = () => {
	return React.createElement("div", { className: "container" }, [
		React.createElement("h1", null, "Hello World"),
		React.createElement(
			"p",
			null,
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum?"
		),
		React.createElement("ul", null, [
			React.createElement("li", null, "Item 1"),
			React.createElement("li", null, "Item 2"),
			React.createElement("li", null, "Item 3"),
		]),
		React.createElement(Counter, null, null),
		React.createElement(Component, null, null),
		React.createElement(Main, null, null),
	]);
};

const root = createRoot(document.getElementById("app"));
root.render(React.createElement(App));
