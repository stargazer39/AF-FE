import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ViewGroups() {
  const [GroupList, setGroupList] = useState([]);

  //pop up search on 'discover groups' button click
  const [showSearchBar, setShowSearchBar] = useState(false);

  //get all products
  const data = async () => {
    const response = await axios.get(
      "http://localhost:3002/api/group/getGroups"
    );
    setGroupList(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div>
      <div class="px-6 pt-24 pb-2 flex items-center">
        <div className="pr-25">
          <Link to="/user/addgroup">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-5 inline-block"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              &nbsp; Create a Group
            </span>
          </Link>
        </div>
        <button
          test-id="button"
          onCliick={() => {
            setShowSearchBar(true);
          }}
        >
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 inline-block"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            &nbsp; Discover Groups
          </span>
        </button>
      </div>
      <div class="grid grid-cols-4 gap-4 py-4 px-8">
        {GroupList.map((group) => (
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              class="w-full"
              src="images/inst.jpg"
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{group.groupName}</div>
              <p class="text-gray-700 text-base">{group.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewGroups;
