import React, { useState, useRef } from "react";
import axios from "axios";
import { QuestionBox } from "./ques&ansBox/questionBox";
import { AnswerBox } from "./ques&ansBox/answerBox";
import { useEffect } from "react";
import AddQuestionModal from "./questionModals/addQuestion";


function Questions({groupData, profileID}) {
  const [questions, setQuestions] = useState([])
  const [quesModal, setQuesModal] = useState(false)
  const [userID , setUserID] = useState(profileID)
  console.log("THios is from m " + userID)
  const [update, setUpdate] = useState(1)
  const group = "noGrp"
  const updater = {
    update : update,
    setUpdate : setUpdate
  }
// 
  useEffect(() => {
      axios
      .get(`http://localhost:3002/api/question/getSingleUserQuestions?userID=${profileID}`)
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
     <button onClick={()=> setQuesModal(true)} className="mb-4 px-4 py-2 rounded-md mr-2 text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:bg-blue-700">Add Question</button>
      {questions.map(ques => (
        <div className="flex flex-col w-6/6 mb-16">

        <div className="">
            <QuestionBox data={QuestionData={count: ques.Answers.length ,name: ques.UserName, date: ques.createdAt, question: ques.Question, userId: userID, id: ques._id , Tid:ques.UserId, setUpdate: setUpdate, update: update}} />
        </div>
        {ques.Answers.map(ans => (
          <div className="">
              <AnswerBox data={AnswerData = {answerPID: ans.answerPersonID ,name: ans.answerPersonName, answer: ans.answer, userId: userID, answerID: ans._id, id: ques._id, setUpdate: setUpdate, update: update }} />
          </div>
        ))}
        </div>
      ))}
       {quesModal && (<AddQuestionModal groupData={group} setAddQuestionModal={setQuesModal} updater={updater}/> ) }
    </>
  );
}

export default Questions;
