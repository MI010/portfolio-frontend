import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";

console.log("Main JS loaded"); // debug aid

const rootEl = document.getElementById("root");
createRoot(rootEl).render(<App />);
