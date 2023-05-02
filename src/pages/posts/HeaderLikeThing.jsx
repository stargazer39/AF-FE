import React from "react";
import { BsPen } from "react-icons/bs";
import { RiQuestionnaireLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function HeaderLikeThing() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-row border p-5 border-gray-400 ">
      <span
        className="flex flex-row text-lg flex-1 justify-center"
        onClick={() => navigate("/addPost")}
      >
        <BsPen size={24} /> <span className="px-4">Post</span>
      </span>
      <span className="flex flex-row text-lg flex-1 justify-center">
        <RiQuestionnaireLine size={24} />{" "}
        <span className="px-4">Questions</span>
      </span>
      <span></span>
    </div>
  );
}

export default HeaderLikeThing;
