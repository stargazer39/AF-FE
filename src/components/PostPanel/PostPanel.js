import * as React from "react";
import { useState } from "react";
import GetCurrentUser from "../../hooks/getCurrentUser";
import UserPosts from "../../pages/posts/UserPosts";
import HeaderLikeThing from "../../pages/posts/HeaderLikeThing";
import Questions from "../../pages/questions/questions";

const PostPanel = () => {
  const user = GetCurrentUser();
  const [type, setType] = useState("post");

  const [isOpen, setIsOpen] = useState(false);
  const [addQuestionModal, setAddQuestionModal] = useState(false);

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
      <HeaderLikeThing setType={setType} />
      {type === "post" ? <UserPosts /> : "Questions"}

      <br />
      <Questions profileID={user?._id} />
    </>
  );
};

export default PostPanel;
