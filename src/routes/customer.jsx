import React from "react";
import { Route, Routes } from "react-router-dom";
import TestPage from "../pages/Test/test";
import CreateGroup from "../pages/groups/CreateGroup";
import { FileUpload } from "../pages/examples/file-upload";
import CreatePost from "../pages/posts/CreatePost";
import Posts from "../pages/posts/Posts";

export default function CustomerRouter() {
  return (
    <Routes>
      <Route path="/test" element={<TestPage />} />
      <Route path="/" element={<TestPage />} />
      <Route path="/example/file-upload" element={<FileUpload />} />
      <Route path="/addPost" element={<CreatePost />} />
      <Route path="/posts" element={<Posts />} />

      <Route path="/user/addGroup" element={<CreateGroup />} />
      {/* <Route path="group/addPost" element={<CreatePost />} /> */}
    </Routes>
  );
}
