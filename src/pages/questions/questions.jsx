import React, { useState, useRef } from "react";
import axios from "axios";
import { QuestionBox } from "./questionBox";
import { AnswerBox } from "./answerBox";

function Questions() {
    const QuestionData = {
        name: "semora zenz",
        date: "April 30, 2023",
        description:
          "Lorem ipsum dolg elit. Sed euismod, arcu eu vestibulum blandit, diam turpis scelerisque mi, ut malesuada risus nunc eget ex.",
      };
        const AnswerData = {
        name: "semora zenz",
        date: "April 30, 2023",
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
    </div>
  );
}

export default Questions;
