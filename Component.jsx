import React from "react";
import { signal } from "@preact/signals-react";
import count from "./store.js"

export default function Component() {
	return <button onClick={() => count.value++}>{count}</button>;
}
