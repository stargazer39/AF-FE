import React from "react";
import AddAnswerModal from "../questionModals/addAnswer";
import { useState } from "react";
import GetCurrentUser from "../../../hooks/getCurrentUser";
import DeleteQuestionModal from "../questionModals/deleteQuesModal";
import ModifyAnsModal from "../questionModals/modifyAnswer";
import bg from "../../../images/pp.png"


export function QuestionBox({ data }) {
  const currentUser = GetCurrentUser();
  const showButton = true;
  const [addAnswerModal, setAddAnswerModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)

  const date = new Date(data.date);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

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
    <div className="p-6  rounded-md rounded " style={{ backgroundImage: `url(${bg})` , backgroundColor: "rgba(0, 195, 255, 0.562)" }}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-gray-500 text-xl font-bold">By: {data.name}</h2>
        </div>
        <div>
          <p className="text-gray-500">{formattedDate}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-700 text-xl font-bold">{data.question}</p>
      </div>
      <div className="flex justify-between mt-10">
       <div className="text-gray-900 text-xl">
         Total Answers : {data.count}
       </div>
       <div>        
       {data.userId == data.Tid && (
        
        <button
          className="px-4 mr-2 py-2 text-black-500 bg-red-400  rounded hover:text-white hover:bg-red-500"
          onClick={()=> setDeleteModal(true)}
        >
          Remove
        </button>
        )}
        <button
          className="mr-2 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-800"
          onClick={()=> {setAddAnswerModal(true)}}
        >
          Answer This Question
        </button>
       </div>
        
      </div>
      {deleteModal && (<DeleteQuestionModal data={data2props} />)}
      {addAnswerModal && (<AddAnswerModal data={dataProps} />)}
    </div>
  );
}