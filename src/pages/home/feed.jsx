import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import FeedQuestions from "../questions/feedQuestions";
import GetCurrentUser from "../../hooks/getCurrentUser";



function Feed() {

const user = GetCurrentUser();
const userID = user?._id

  return (
    <div className="App">
      <body>
        <Navbar />
        {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
{/*  PUT THAT TABS SELECTOR THINGY */}



        <div className=" rounded-lg  mt-8">
          <FeedQuestions groupData={""} profileID={userID}/>
        </div>
      </body>
    </div>
  );
}

export default Feed;
