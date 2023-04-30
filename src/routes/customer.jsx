import React from "react";
import { Route, Routes } from "react-router-dom";
import TestPage from "../pages/Test/test";
import CreateGroup from "../pages/groups/CreateGroup";
import ViewGroups from "../pages/groups/ViewGroups";

export default function CustomerRouter() {
  return (
    <Routes>
      <Route path="/test" element={<TestPage />} />
      <Route path="/" element={<TestPage />} />

      <Route path="/user/addGroup" element={<CreateGroup />} />
      <Route path="/user/viewgroups" element={<ViewGroups />} />
    </Routes>
  );
}
