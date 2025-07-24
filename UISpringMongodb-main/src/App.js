import React from "react";
import "./App.css"; // Import a global stylesheet for UI enhancements
import { CssBaseline } from "@mui/material"; // Use Material UI baseline for consistent styling
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Feed, Dashboard, Create } from "./pages";
import ErrorBoundary from "./pages/ErrorBoundary"; // Import ErrorBoundary

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employer">
            <Route path="/employer/dashboard" element={<Dashboard />} />
            <Route path="/employer/create" element={<Create />} />
          </Route>
          <Route path="/employee/feed" element={<Feed />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
