import React, { useState, useRef } from "react";
import axios from "axios";
import { QuestionBox } from "./ques&ansBox/questionBox";
import { AnswerBox } from "./ques&ansBox/answerBox";
import AddQuestionModal from "./questionModals/addQuestion";

function Questions() {
  const [addQuestionModal, setAddQuestionModal] = useState(false);
    const QuestionData = {
        name: "semora zenz",
        date: "April 30, 2023",
        showButton: "show or true",
        description:
          "Lorem ipsum dolg elit. Sed euismod, arcu eu vestibulum blandit, diam turpis scelerisque mi, ut malesuada risus nunc eget ex.",
      };
        const AnswerData = {
        name: "semora zenz",
        date: "April 30, 2023",
        showButton: "show or true",
        description:
            "Lorem ipsumlg elit. Sed euismod, arcu eu vestibulum blandit, diam turpis sclg elit. Sed euismod, arcu eu vestibulum blandit, diam turpis sclg elit. Sed euismod, arcu eu vestibulum blandit, diam turpis sclg elit. Sed euismod, arcu eu vestibulum blandit, diam turpis sc dolg elit. Sed euismod, arcu eu vestibulum blandit, diam turpis scelerisque mi, ut malesuada risus nunc eget ex.",
        };

  return (
    // remove this to take it out from center 
    <div className="flex flex-col w-4/6">

     <div className="bg-amber-300/40">
        <QuestionBox data={QuestionData} />
     </div>
     <div className="bg-gray-100 ">
        <AnswerBox data={AnswerData} />
        <AnswerBox data={AnswerData} />
     </div>

     {addQuestionModal && ( <AddQuestionModal />)}
    
    </div>
  );
}

export default Questions;
