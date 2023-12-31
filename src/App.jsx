import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./charts/ChartjsConfig";
// Import pages
import Dashboard from "./pages/Dashboard";
import Login from "./Login/Login";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/admin" element={<Dashboard />} />
        <Route exact path="/adminlogin" element={<Login/>} />
      </Routes>
    </>
  );
}

export default App;
