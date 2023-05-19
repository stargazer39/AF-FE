import React, { useState, useRef } from "react";
import axios from "axios";
import { QuestionBox } from "./ques&ansBox/questionBox";
import { AnswerBox } from "./ques&ansBox/answerBox";
import { useEffect } from "react";
import AddQuestionModal from "./questionModals/addQuestion";
import GetCurrentUser from "../../hooks/getCurrentUser";
import gg from "../../images/noData.png"
import { useNavigate } from "react-router";
import { API_ENDPOINT } from '../../config';

function GroupQuestions({groupData, profileID}) {
  const currentUser = GetCurrentUser()
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([])
  const [quesModal, setQuesModal] = useState(false)
  const [userID , setUserID] = useState(profileID)
  const [update, setUpdate] = useState(1)
  const group = groupData || "noGrp"
  const updater = {
    update : update,
    setUpdate : setUpdate
  }
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
      axios
      .get(`${API_ENDPOINT}/api/question/searchQuestion?question=${searchTerm}&group=${group}`)
      .then(response => {
        setQuestions(response.data)
      })
      .catch(error => {
        console.log(error)
      })


    }, [update, group, update])

    var QuestionData
    var AnswerData

  return (
    // remove this to take it out from center 
    <>

    
   
    <div className="flex flex-col items-center w-full">
      <div className=" w-4/6 flex justify-between">
          <div>
          <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="border-2 border-blue-500 rounded-3xl p-2 w-96"
            />
            <button onClick={()=> setUpdate(update+1)} className="bg-blue-500 text-white rounded-3xl w-24 p-2 ml-2">
              Search
            </button>
          </div>
          <button onClick={()=> setQuesModal(true)} className="mb-8 w-48 px-4 py-2 rounded-md mr-2 text-white bg-blue-500 hover:bg-blue-600 focus:outline-none hover:scale-110 ease-in duration-100 focus:bg-blue-700">Add Question</button>
      
      
      </div>

        {questions.length < 1 && (
          <div className="flex mt-24 mb-48 flex-col items-center w-full" >
           <h1 className="text-2xl text-blue-600">Be the first to add a question</h1> 
          <img src={gg} width={400} alt="no Data" />
          </div>
        )}

        {questions.map(ques => (
          <div className="flex flex-col w-4/6 mb-16">

          <div className="bg-blue-300/40">
              <QuestionBox data={QuestionData={count: ques.Answers.length, name: ques.UserName, date: ques.createdAt, question: ques.Question, userId: userID, Tid:ques.UserId , id: ques._id , setUpdate: setUpdate, update: update}} />
          </div>
          {ques.Answers.map(ans => (
            <div className="">
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
