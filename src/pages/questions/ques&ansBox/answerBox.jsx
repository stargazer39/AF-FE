import React, { useState } from "react";
import GetCurrentUser from "../../../hooks/getCurrentUser";
import DeleteAnswerModal from "../questionModals/deleteModal";
import ModifyAnsModal from "../questionModals/modifyAnswer";

export function AnswerBox({ data }) {
  const currentUser = GetCurrentUser();
  console.log(currentUser?._id)
  const showButton = true;
  const [deleteModal, setDeleteModal] = useState(false)
  const [modifyModal, setModifyModal] = useState(false)

  const deleteModalData = {
    setRemoveAnswerModal: setDeleteModal,
    userID : data.id,
    answerID : data.answerID,
    setUpdate: data.setUpdate,
    update: data.update
  }
  const modifyData ={
    id: data.id,
    answerID : data.answerID,
    answer : data.answer,
    name : data.name,
    setModifyModal : setModifyModal,
    setUpdate: data.setUpdate,
    update: data.update
  }

  return (
    <div className="p-4 flex flex-col rounded-md">
      <div className="flex">
        <div className="w-2/12 pt-1/2">
            <h4 className="text-xl font-bold">{data.name}</h4>
            {/* <p className="text-gray-500">{data.date}</p> */}
        </div>

        <div className="mt-4 w-9/12">
            <p className="text-gray-700">{data.answer}</p>
        </div>
      </div>
      
      <div className="flex items-end justify-end mt-2 border-b border-gray-200 pb-4">

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
              onClick={()=> setModifyModal(true)}
            >
              Modify
            </button>
          </div>
        )}
      {modifyModal && (<ModifyAnsModal data={modifyData} />)}
      {deleteModal && (<DeleteAnswerModal data={deleteModalData} />)}
      </div>
    </div>
  );
}