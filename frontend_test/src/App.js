import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Detail from "./views/Detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
