// Import necessary modules from React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";
// Import the main App component
import App from "./App";

// Create a root element and render the App component inside it
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Wrap the App component with React.StrictMode to highlight potential issues */}
    <App />
  </React.StrictMode>
);
