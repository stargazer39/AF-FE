import React from "react";
import { Route, Routes } from "react-router-dom";
import TestPage from "../pages/Test/test";

// import CreateGroup from "../pages/groups/CreateGroup";
import Questions from "../pages/questions/userQuestions";

import { FileUpload } from "../pages/examples/file-upload";
import CreatePost from "../pages/posts/CreatePost";
import Posts from "../pages/posts/Posts";
import CreateGroup from "../pages/groups/createGroup/CreateGroup";
import ViewGroups from "../pages/groups/viewGroups/ViewGroups";
import ViewMyGroups from "../pages/groups/viewGroups/ViewMyGroups";
import UpdateGroup from "../pages/groups/updateGroup/UpdateGroup";
import OneGroup from "../pages/groups/oneGroup/OneGroup";
import EditPost from "../pages/posts/EditPost";
import UserPosts from "../pages/posts/UserPosts";
import GroupPosts from "../pages/posts/GroupPosts";

export default function CustomerRouter() {
  return (
    <Routes>
      <Route path="/test" element={<TestPage />} />
      <Route path="/" element={<TestPage />} />

      <Route path="/questions" element={<Questions />} />

      <Route path="/example/file-upload" element={<FileUpload />} />
      <Route path="/addPost" element={<CreatePost />} />
      <Route path="/editPost" element={<EditPost />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/user/posts" element={<UserPosts />} />
      <Route path="/group/posts" element={<GroupPosts />} />


      {/*groups related routes*/}
      <Route path="/user/addGroup" element={<CreateGroup />} />
      {/* <Route path="group/addPost" element={<CreatePost />} /> */}
      <Route path="/user/viewgroups" element={<ViewGroups />} />
      <Route path="/user/viewmygroups" element={<ViewMyGroups />} />
      <Route path="/updateProduct/:_id" element={<UpdateGroup />} />
      <Route path="/singleGroup/:_id" element={<OneGroup />} />
    </Routes>
  );
}
