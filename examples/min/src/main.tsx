import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import { storeContext, store } from "./store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* 如果不用inject的话，Provider可有可无 */}
    {/* <storeContext.Provider value={store}> */}
    <App />
    {/* </storeContext.Provider> */}
  </React.StrictMode>
);
