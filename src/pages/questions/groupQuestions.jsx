import React, { useState, useRef } from "react";
import axios from "axios";
import { QuestionBox } from "./ques&ansBox/questionBox";
import { AnswerBox } from "./ques&ansBox/answerBox";
import { useEffect } from "react";
import AddQuestionModal from "./questionModals/addQuestion";


function GroupQuestions({groupData, profileID}) {
  const [questions, setQuestions] = useState([])
  const [quesModal, setQuesModal] = useState(false)
  const [userID , setUserID] = useState("")
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
    }, [update])

    var QuestionData
    var AnswerData

  return (
    // remove this to take it out from center 
    <>
     <button onClick={()=> setQuesModal(true)} className="px-4 py-2 rounded-md mr-2 text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:bg-gray-600">Add Question</button>
      {questions.map(ques => (
        <div className="flex flex-col w-5/6">

        <div className="bg-blue-300/40">
            <QuestionBox data={QuestionData={name: ques.UserName, date: ques.createdAt, question: ques.Question, userId: userID, id: ques._id , setUpdate: setUpdate, update: update}} />
        </div>
        {ques.Answers.map(ans => (
          <div className="bg-gray-100 ">
              <AnswerBox data={AnswerData = {answerPID: ans.answerPersonID, name: ans.answerPersonName, answer: ans.answer, userId: userID, answerID: ans._id, id: ques._id, setUpdate: setUpdate, update: update }} />
          </div>
        ))}
        </div>
      ))}
      {quesModal && (<AddQuestionModal groupData={group} setAddQuestionModal={setQuesModal} updater={updater}/>)}
    </>
  );
}

export default GroupQuestions;
