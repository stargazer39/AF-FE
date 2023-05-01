import Posts from "./Posts";
import Question from "./Questions";
import { useState, useEffect } from "react";

function CustTwoTab(props) {
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

  const [GroupList, setGroupList] = useState(null);

  //get all groups
  useEffect(() => {
    fetch("http://localhost:3002/api/group/getGroups")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setGroupList(data);
      });
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
      <div className=" p-0 w-full bg-orange-00">
        {ShowTab == "post" ? (
          <Posts groups={GroupList} />
        ) : (
          <Question />
        )}
      </div>
    </div>
  );
}

export default CustTwoTab;