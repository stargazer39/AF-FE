import React, { useState } from 'react';
import axios from 'axios';
import { API_ENDPOINT } from '../../../config';

function DeleteAnswerModal({ data }) {
  const [userID, setUserID] = useState("")
  const [userName, setUserName] = useState("Semora chan")
  const [question, setQuestion] = useState("")
  const [group, setGroup] = useState("")
  const [error, setError] = useState("")

//   function validation(){
//     if (!question) {
//       setError("You need to ask something to continue. Duh!")
//     }else {
//       setError(null)
//       add()
//     }
//   }

  async function remove(){
    axios
      .put(
        `${API_ENDPOINT}/api/question/deleteAnswer?id=${data.userID}&answerId=${data.answerID}`,
      )
      .then(response => {
        console.log('Address deleted successfully')
      })
      .catch(error => {
        console.error('Error deleting address:', error)
      })
      setTimeout(() => {
        data.setUpdate(data.update + 1);
      }, 500);
      data.setRemoveAnswerModal(false)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-gradient-to-br from-cyan-700 to-blue-900 opacity-70" ></div>
      <div className="relative bg-gray-200 rounded-lg w-3/6">
        <h1 className=" text-center pt-4 text-2xl">Remove your Answer {data.userID + "  " + data.answerID}</h1>
        <div className="pt-4 pb-4 pl-8 pr-8">
        </div> 
        <div className="flex justify-end px-4 pb-4">
          <button onClick={()=> data.setRemoveAnswerModal(false)} className="px-4 py-2 rounded-md mr-2 text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:bg-gray-600">Go back</button>
          <button onClick={remove} className="px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:bg-blue-700">Remove Answer</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteAnswerModal;