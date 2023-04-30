import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import GroupCard from "../../components/groups/GroupCard";

function ViewGroups() {
  const [GroupList, setGroupList] = useState(null);

  //pop up search on 'discover groups' button click
  const [showSearchBar, setShowSearchBar] = useState(false);

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
      {GroupList && <GroupCard groups={GroupList} />}
    </div>
  );
}

export default ViewGroups;
