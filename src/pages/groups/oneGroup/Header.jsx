import React, { useState } from "react";
import { useParams } from "react-router-dom";
import GetCurrentUser from "../../../hooks/getCurrentUser";
import axios from "axios";

const Header = ({ group }) => {
  const [Following, setFollowing] = useState(false);

  const { _id } = useParams();

  //get current user
  const currentUser = GetCurrentUser();

  const updateGroup = async (e) => {
    e.preventDefault();

    const data = {
      followersUserId: currentUser._id,
    };

    //update the item
    axios.patch(`http://localhost:3002/api/group/addFollows/${_id}`, data);
    setFollowing(true);
  };

  return (
    <>
      <header>
        {group.map((value) => (
          <div
            class="w-full bg-cover"
            style={{
              backgroundImage: `url(${value.groupIcon[1]})`,
              height: "32rem",
              opacity: 0.6,
            }}
          >
            <div class="h-full w-full bg-black bg-opacity-80">
              <div class="text-center">
                <h1 class="text-white text-3xl font-bold uppercase md:text-3xl items-center pt-36">
                  {value.groupName}
                </h1><br/>
                <h2 class="mt-4 px-4 pt-2 text-white text-1xl  font-medium rounded focus:outline-none focus:bg-blue-500">
                  {value.description}
                </h2>
              </div>
              <div className="mt-40 ml-10">
                {Following ? (
                  <button
                    type="button"
                    class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    Following
                  </button>
                ) : (
                  <button
                    onClick={updateGroup}
                    type="button"
                    class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </header>
    </>
  );
};

export default Header;
