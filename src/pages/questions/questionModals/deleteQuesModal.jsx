import React, { useState } from 'react';
import axios from 'axios';
import { API_ENDPOINT } from '../../../config';
import loading from "../../../images/loading.gif"


function DeleteQuestionModal({ data }) {
  const [userID, setUserID] = useState("")
  const [userName, setUserName] = useState("Semora chan")
  const [question, setQuestion] = useState("")
  const [group, setGroup] = useState("")
  const [error, setError] = useState("")
  const [loadingIcon, setLodingIcon] = useState(false)


  async function remove(){
    setLodingIcon(true)
    axios
      .delete(
        `${API_ENDPOINT}/api/question/deleteQuestion?id=${data.userID}`,
      )
      .then(response => {
        console.log('Address deleted successfully')
      })
      .catch(error => {
        console.error('Error deleting address:', error)
      })
      setTimeout(() => {
        data.setUpdate(data.update + 1);
        setLodingIcon(false)
        data.setUpdate(data.update + 1);
        data.setRemoveAnswerModal(false)
      }, 1000);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-gradient-to-br from-cyan-700 to-blue-900 opacity-70" ></div>
      <div className="relative bg-gray-200 rounded-lg w-3/6">
        <h1 className=" text-center pt-4 text-2xl">Remove your Questions</h1>
        <div className="pt-4 bg-no-repeat pb-16 pl-8 pr-8 flex text-xl items-center justify-center w-full">
        {!loadingIcon ? 
          <h1>You are about to delete your question. Keep in mind that this action cannot be undone. You sure about removing?</h1>
          : 
          <img src={loading} width={75} alt="Loading Icon" />
          }
        </div> 
        <div className="flex justify-center px-4 pb-4">
          <button onClick={()=> data.setRemoveAnswerModal(false)} className="px-4 py-2 rounded-md mr-2 text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:bg-gray-600">Go back</button>
          <button onClick={remove} className="px-4 py-2 rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:bg-red-700">Remove Question</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteQuestionModal;