import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import FeedQuestions from "../questions/feedQuestions";
import GetCurrentUser from "../../hooks/getCurrentUser";
import { useState, useEffect } from "react";
import cover from "../../images/cover.png"
import Footer from "../../components/Navbar/Footer";
import { useNavigate } from "react-router";


function Feed() {
const user = GetCurrentUser();
const navigate = useNavigate();
const userID = user?._id

if(!user){
  navigate('/login');
}

const [ShowTab, setShowTab] = useState("post");
  const [postButtonColor, setPostButtonColor] = useState("#007BED");
  const [quesButtonColor, setQuesButtonColor] = useState("#2b2b2b");
  const [rc, setRc] = useState("#007aed55");
  const [qc, setQc] = useState("#f1f1f1");

  const postButton = () => {
    setShowTab("post");
    setPostButtonColor("#007BED");
    setQuesButtonColor("#2b2b2b");
    setRc("#007aed55");
    setQc("#f1f1f1");
  };

  const quesButton = () => {
    setShowTab("ques");
    setPostButtonColor("#2b2b2b");
    setQuesButtonColor("#007BED");
    setRc("#f1f1f1");
    setQc("#007aed55");
  };

  return (
    <div className="App">    
      <body>
        <Navbar />
        {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
        {/* <div className="bg-red-200 mb-8">
          <img src={cover} width="100%" alt="Loading Icon" />
        </div> */}
        <div class="relative bg-red-200 mb-8">
          <img src={cover} class="w-full" alt="Cover" />
          <div class="absolute top-2/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
            <p class="text-blue-900 font-bold text-6xl font-Poppins  ">KNOWLEDGE TO <br />SUCCESS</p>
            <p class="text-blue-900 font-bold text font-Poppins  ">We're here to help you build your future with confidence!</p>
          </div>
        </div>
        <div className="w-full flex justify-center mt-2">
          <div className="flex grid-flow-row w-4/6   pb-10 ">
            <div
              className="w-full text-xl flex items-center justify-center font-bold bg-red-400 p-4 border-solid border-b-4"
              style={{ color: postButtonColor, borderColor: rc , backgroundColor : rc}}
              onClick={postButton}
            >
              Posts
            </div>
            <div
              className="w-full text-xl font-bold flex items-center justify-center p-4 border-solid border-b-4 pl-2"
              style={{ color: quesButtonColor, borderColor: qc,  backgroundColor : qc}}
              onClick={quesButton}
            >
              Questions
            </div>
          </div>
        </div>

        {ShowTab === "post" ? (
          " " // Nisal put yout one here
        ) : (
          <FeedQuestions groupData={""} profileID={userID}/>
        )}

        <Footer />
      </body>
    </div>
  );
}

export default Feed;
