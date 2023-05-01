import React from "react";
import { Route, Routes } from "react-router-dom";
import TestPage from "../pages/Test/test";
import CreateGroup from "../pages/groups/CreateGroup";
import Questions from "../pages/questions/questions";

export default function CustomerRouter() {
  return (
    <Routes>
      <Route path="/test" element={<TestPage />} />
      <Route path="/" element={<TestPage />} />
      <Route path="/questions" element={<Questions />} />

      <Route path="/user/addGroup" element={<CreateGroup />} />
    </Routes>
  );
}
