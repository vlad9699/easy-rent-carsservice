import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"*"} element={<Navigate to={"/"} />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;