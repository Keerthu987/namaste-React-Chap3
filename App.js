import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, "Hello");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); 