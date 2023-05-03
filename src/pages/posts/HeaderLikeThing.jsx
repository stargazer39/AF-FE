import React from "react";
import { BsPen } from "react-icons/bs";
import { RiQuestionnaireLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function HeaderLikeThing({ setType }) {
  const navigate = useNavigate();
  return (
    <div className="w-full min-w-500px flex flex-row border p-5 border-gray-400 mb-10">
      <span
        className="flex flex-row text-lg flex-1 justify-center"
        onClick={() => setType("post")}
      >
        <BsPen size={24} /> <span className="px-4">Post</span>
      </span>
      <span
        className="flex flex-row text-lg flex-1 justify-center"
        onClick={() => setType("question")}
      >
        <RiQuestionnaireLine size={24} />{" "}
        <span className="px-4">Questions</span>
      </span>
      <span></span>
    </div>
  );
}

export default HeaderLikeThing;
