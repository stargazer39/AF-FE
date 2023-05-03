import React, { useState, useRef } from "react";
import axios from "axios";
import { QuestionBox } from "./ques&ansBox/questionBox";
import { AnswerBox } from "./ques&ansBox/answerBox";
import { useEffect } from "react";


function Questions({groupData, profileID}) {
  const [questions, setQuestions] = useState([])
  const [userID , setUserID] = useState("")
  const [update, setUpdate] = useState(1)
  const group = groupData || "noGrp"


  useEffect(() => {
    if(!profileID){
      axios
      .get(`http://localhost:3002/api/question/getAllQuestions?group=${group}`)
      .then(response => {
        setQuestions(response.data)
        console.log(response.data)
        console.log(questions)
      })
      .catch(error => {
        console.log(error)
      })
    } else {
      axios
      .get(`http://localhost:3002/api/question/getSingleUserQuestions?userID="${profileID}"`)
      .then(response => {
        setQuestions(response.data)
        console.log(response.data)
        console.log(questions)
      })
      .catch(error => {
        console.log(error)
      })
    }
    
    }, [update])

    var QuestionData
    var AnswerData

  return (
    // remove this to take it out from center 
    <>
      {questions.map(ques => (
        <div className="flex flex-col w-4/6">

        <div className="bg-amber-300/40">
            <QuestionBox data={QuestionData={name: ques.UserName, date: ques.createdAt, question: ques.Question, userId: userID, id: ques._id , setUpdate: setUpdate, update: update}} />
        </div>
        {ques.Answers.map(ans => (
          <div className="bg-gray-100 ">
              <AnswerBox data={AnswerData = {name: ans.answerPersonName, answer: ans.answer, userId: userID, answerID: ans._id, id: ques._id, setUpdate: setUpdate, update: update }} />
          </div>
        ))}
        </div>
      ))}
    </>
  );
}

export default Questions;
