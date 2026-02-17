import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import APP from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <APP />
  </BrowserRouter>,
);
