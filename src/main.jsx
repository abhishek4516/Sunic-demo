import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App";

import "./styles/global.css";

import ClickSpark from "./components/ClickSpark";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <ClickSpark
      sparkColor="#ff5c5c"
      sparkSize={10}
      sparkRadius={14}
      sparkCount={7}
      duration={400}
    >

      <App />

    </ClickSpark>

  </React.StrictMode>
);