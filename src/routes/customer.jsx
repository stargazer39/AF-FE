import React from "react";
import { Route, Routes } from "react-router-dom";
import TestPage from "../pages/Test/test";
import CreateGroup from "../pages/groups/createGroup/CreateGroup";
import ViewGroups from "../pages/groups/viewGroups/ViewGroups";
import ViewMyGroups from "../pages/groups/viewGroups/ViewMyGroups";
import UpdateGroup from "../pages/groups/updateGroup/UpdateGroup";
import OneGroup from "../pages/groups/oneGroup/OneGroup";

export default function CustomerRouter() {
  return (
    <Routes>
      <Route path="/test" element={<TestPage />} />
      <Route path="/" element={<TestPage />} />

      {/*groups related routes*/}
      <Route path="/user/addGroup" element={<CreateGroup />} />
      <Route path="/user/viewgroups" element={<ViewGroups />} />
      <Route path="/user/viewmygroups" element={<ViewMyGroups />} />
      <Route path="/updateProduct/:_id" element={<UpdateGroup />} />
      <Route path="/singleGroup/:_id" element={<OneGroup />} />
    </Routes>
  );
}
