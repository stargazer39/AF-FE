import React from "react";
import { Route, Routes } from "react-router-dom";
import TestPage from "../pages/Test/test";

export default function CustomerRouter() {
  return (
    <Routes>
      <Route path="/test" element={<TestPage />} />
      <Route path="/" element={<TestPage />} />
    </Routes>
  );
}