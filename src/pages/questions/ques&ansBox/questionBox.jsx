import React from "react";
import AddAnswerModal from "../questionModals/addAnswer";
import { useState } from "react";
import GetCurrentUser from "../../../hooks/getCurrentUser";
import DeleteQuestionModal from "../questionModals/deleteQuesModal";
import ModifyAnsModal from "../questionModals/modifyAnswer";

export function QuestionBox({ data }) {
  const currentUser = GetCurrentUser();
  console.log(currentUser?._id)
  const showButton = true;
  const [addAnswerModal, setAddAnswerModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)

  const dataProps ={
    setAnswerModal: setAddAnswerModal,
    answerPersonID: currentUser?._id,
    answerPersonName: currentUser?.username,
    id: data.id,
    setUpdate: data.setUpdate,
    update: data.update
  }
  const data2props = {
    setRemoveAnswerModal: setDeleteModal,
    userID : data.id,
    setUpdate: data.setUpdate,
    update: data.update
  }
  return (
    <div className="p-4  rounded-md">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-gray-500 text-xl font-bold">{data.name}</h2>
        </div>
        <div>
          <p className="text-gray-500">{data.date}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-700 text-xl font-bold">{data.question}</p>
      </div>
      <div className="flex justify-end mt-4">
        {showButton && (
          <div>
          <button
            className="px-4 mr-2 py-2 text-black-500 bg-green-300  rounded hover:text-white hover:bg-gray-400"
            onClick={()=> setDeleteModal(true)}
          >
            Remove
          </button>
          <button
            className="mr-2 px-4 py-2 text-white bg-green-500 rounded hover:bg-red-800"
            onClick={()=> {setAddAnswerModal(true)}}
          >
            Answer This Question
          </button>
          </div>
        )}
      </div>
      {deleteModal && (<DeleteQuestionModal data={data2props} />)}
      {addAnswerModal && (<AddAnswerModal data={dataProps} />)}
    </div>
  );
}