import React from "react";
import { BsPen } from "react-icons/bs";
import { RiQuestionnaireLine } from "react-icons/ri";
import { useState } from "react";
import AddQuestionModal from "../questions/questionModals/addQuestion";

function HeaderLikeThing() {
  const [addQuestionModal, setAddQuestionModal] = useState(false);
  return (
    <div className="w-full flex flex-row border p-5 border-gray-400 ">
      <span className="flex flex-row text-lg flex-1 justify-center">
        <BsPen size={24} /> <span className="px-4">Post</span>
      </span>
      <span className="flex flex-row text-lg flex-1 justify-center">
        <RiQuestionnaireLine size={24} />{" "}
        <span className="px-4" onClick={()=>{setAddQuestionModal(true)}}>Questions</span>
      </span>
      <span></span>
      {addQuestionModal && ( <AddQuestionModal setAddQuestionModal={setAddQuestionModal} />)}
    </div>
  );
}

export default HeaderLikeThing;
