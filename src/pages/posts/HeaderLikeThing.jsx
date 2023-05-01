import React from "react";
import { BsPen } from "react-icons/bs";
import { RiQuestionnaireLine } from "react-icons/ri";

function HeaderLikeThing() {
  return (
    <div className="w-full flex flex-row border p-5 border-gray-400 ">
      <span className="flex flex-row text-lg flex-1 justify-center">
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
