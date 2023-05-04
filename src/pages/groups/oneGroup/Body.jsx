
import { useParams } from "react-router";
import Posts from "./Posts";
import Question from "./Questions";
import { useState, useEffect } from "react";
import axios from "axios";

import GroupPosts from "../../posts/GroupPosts";
import Posts from "./Posts";
import Question from "./Questions";
import { useState, useEffect } from "react";
import GroupQuestions from "../../questions/groupQuestions";
import GetCurrentUser from "../../../hooks/getCurrentUser";


function CustTwoTab(props) {
  const user = GetCurrentUser()
  const id = user?._id
  const [ShowTab, setShowTab] = useState("post");
  const [postButtonColor, setPostButtonColor] = useState("#007BED");
  const [quesButtonColor, setQuesButtonColor] = useState("#b8b8b8");
  const [rc, setRc] = useState("#007BED");
  const [qc, setQc] = useState("#c9c9c9");

  const postButton = () => {
    setShowTab("post");
    setPostButtonColor("#007BED");
    setQuesButtonColor("#b8b8b8");
    setRc("#007BED");
    setQc("#c9c9c9");
  };

  const quesButton = () => {
    setShowTab("ques");
    setPostButtonColor("#b8b8b8");
    setQuesButtonColor("#007BED");
    setRc("#c9c9c9");
    setQc("#007BED");
  };

  /////////// read post data

  const [PostList, setPostList] = useState(null);

  const { _id } = useParams();

  //get all groups
  useEffect(() => {
    const response = axios.get(
      `http://localhost:3002/api/post/groups/${_id}/posts`
    );
    setPostList([response.data]);
    console.log([response.data]);
  }, []);

  return (
    <div>
      <div className="pt-5 w-80 items-center pl-4">
        <div className="flex grid-flow-row w-80  bg-gray-00 p-4">
          <div
            className="w-full text-1xl font-bold border-solid border-b-2"
            style={{ color: postButtonColor, borderColor: rc }}
            onClick={postButton}
          >
            Posts
          </div>
          <div
            className="w-full text-1xl font-bold border-solid border-b-2 pl-2"
            style={{ color: quesButtonColor, borderColor: qc }}
            onClick={quesButton}
          >
            Questions
          </div>
        </div>
      </div>


      <div className=" p-0 w-full bg-orange-00 flex flex-col">
        {ShowTab === "post" ? <GroupPosts /> : <GroupQuestions groupData={props.groupName} profileID={id}/>}
        {/* {ShowTab === "post" ? " ": <GroupQuestions groupData={props.groupName}/>} */}

      </div>
    </div>
  );
}

export default CustTwoTab;
