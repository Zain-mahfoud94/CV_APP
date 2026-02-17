import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import APP from "./App.tsx";
import { ErrorBoundary } from "react-error-boundary";

function Fallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary FallbackComponent={Fallback}>
    <BrowserRouter>
      <APP />
    </BrowserRouter>
  </ErrorBoundary>,
);
