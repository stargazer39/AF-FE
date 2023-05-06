import * as React from "react";
import { useState } from "react";
import GetCurrentUser from "../../hooks/getCurrentUser";
import UserPosts from "../../pages/posts/UserPosts";
import HeaderLikeThing from "../../pages/posts/HeaderLikeThing";
import Questions from "../../pages/questions/userQuestions";
import { useNavigate } from "react-router";

const PostPanel = () => {
  const user = GetCurrentUser();
  const userID = user?._id
  const [type, setType] = useState("post");
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [addQuestionModal, setAddQuestionModal] = useState(false);

  // if(!user){
  //   navigate('/login');
  // }

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

  

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  console.log("user", user);
  return (
    <>
      {/* <Card
        elevation={3}
        sx={{
          minWidth: 300,
          minHeight: 5,
          "--Card-radius": (theme) => theme.vars.radius.xs,
          backgroundColor: "#FFFFFF",
        }}
      >
        <div className="w-full h-full">
          <div className="flex justify-evenly items-center p-5">
            {user ? (
              <img
                src={user.photo_url}
                alt="Profile"
                className="rounded-full h-10 w-10"
              />
            ) : (
              <img
                src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                alt=""
                className="rounded-full h-10 w-10"
              />
            )}

            <input
              className="w-[30rem] h-7 bg-white-400 rounded-md outline-fill p-4"
              placeholder="Ask something..."
            />
          </div>
          <div className="flex justify-center">
            <div className="flex justify-around w-3/5">
              <div
                className="flex"
                onClick={() => {
                  setAddQuestionModal(!addQuestionModal);
                }}
              >
                <HelpOutlineIcon />
                <span>Ask</span>
                {addQuestionModal && (
                  <AddQuestionModal setAddQuestionModal={setAddQuestionModal} />
                )}
              </div>
              {addQuestionModal && ( <AddQuestionModal setAddQuestionModal={setAddQuestionModal} groupData={"noGrp"} />)}
              <div className="h-6 w-0.5 bg-black"></div>
              <div className="flex">
                <RateReviewTwoToneIcon />
                <span>Answer</span>
              </div>
              <div className="h-6 w-0.5 bg-black"></div>
              <div className="flex">
                <CreateIcon onClick={() => handleOpen()} />
                <span>Post</span>
              </div>
            </div>
          </div>
        </div>
      </Card> */}
      <div className="">
        <div className="w-full flex justify-center mt-2">
          <div className="flex grid-flow-row w-full   pb-10 ">
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
          <UserPosts />
        ) : (
          <Questions profileID={userID} />
        )}


        
        {/* {type === "post" ? <UserPosts /> : <Questions profileID={userID} />} */}
      
        <br />
      </div>
     

    </>
  );
};

export default PostPanel;
