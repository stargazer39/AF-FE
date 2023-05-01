import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Verify from "../pages/Auth/Verify";
import UserProfile from "../pages/User/UserProfile";
import GetCurrentUser from "../hooks/getCurrentUser";

export default function AuthRouter() {
  const currentUser = GetCurrentUser();
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/user" element={currentUser ? <UserProfile /> : <Login />} />
      <Route path="/verify" element={<Verify />} />
    </Routes>
  );
}
