import React from "react";
import { createRoot } from "react-dom/client";
import SgfCaseStudyPreviewPage from "../imports/SgfCaseStudyPreviewPage";
import "../styles/globals.css";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <SgfCaseStudyPreviewPage />
    </React.StrictMode>
  );
} else {
  // eslint-disable-next-line no-console
  console.error("Root element not found: ensure index.html has an element with id=\"root\".");
}
