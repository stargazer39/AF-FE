import React, { useState, useRef } from "react";
import axios from "axios";
import { QuestionBox } from "./ques&ansBox/questionBox";
import { AnswerBox } from "./ques&ansBox/answerBox";
import { useEffect } from "react";
import AddQuestionModal from "./questionModals/addQuestion";
import GetCurrentUser from "../../hooks/getCurrentUser";


function GroupQuestions({groupData, profileID}) {
  const currentUser = GetCurrentUser()
  const [questions, setQuestions] = useState([])
  const [quesModal, setQuesModal] = useState(false)
  const [userID , setUserID] = useState(profileID)
  const [update, setUpdate] = useState(1)
  const group = groupData || "noGrp"
  const updater = {
    update : update,
    setUpdate : setUpdate
  }

  useEffect(() => {
      axios
      .get(`http://localhost:3002/api/question/getAllQuestions?group=${group}`)
      .then(response => {
        setQuestions(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    }, [update, group])

    var QuestionData
    var AnswerData

  return (
    // remove this to take it out from center 
    <>
    <div className="flex flex-col items-center w-full">
      <div className=" w-4/6 flex justify-end">
          <button onClick={()=> setQuesModal(true)} className="mb-8 w-48 px-4 py-2 rounded-md mr-2 text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:bg-blue-700">Add Question</button>
      </div>
     
        {questions.map(ques => (
          <div className="flex flex-col w-4/6 mb-16">

          <div className="bg-blue-300/40">
              <QuestionBox data={QuestionData={count: ques.Answers.length, name: ques.UserName, date: ques.createdAt, question: ques.Question, userId: userID, Tid:ques.UserId , id: ques._id , setUpdate: setUpdate, update: update}} />
          </div>
          {ques.Answers.map(ans => (
            <div className="bg-gray-100 ">
                <AnswerBox data={AnswerData = {answerPID: ans.answerPersonID, name: ans.answerPersonName, answer: ans.answer, userId: userID, answerID: ans._id, id: ques._id, setUpdate: setUpdate, update: update }} />
            </div>
          ))}
          </div>
        ))}
      </div>
      {quesModal && (<AddQuestionModal groupData={group} setAddQuestionModal={setQuesModal} updater={updater}/>)}
    </>
  );
}

export default GroupQuestions;
