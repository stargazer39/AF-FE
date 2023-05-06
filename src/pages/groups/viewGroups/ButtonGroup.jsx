import React, { useState } from "react";
import { Link } from "react-router-dom";

function ButtonGroup() {

  return (
    <div class="px-6 pt-16 pb-12 pb-2 flex items-center justify-center bg-blue-100">
      <div className="pr-25">
        <Link to="/user/addgroup">
          <span class="inline-block mr-4 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 hover:scale-110 ease-in duration-100 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2">
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
      <Link to = "/user/viewgroups">
        <span class="inline-block bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-full hover:scale-110 ease-in duration-100 px-4 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2">
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
      </Link>
    </div>
  );
}

export default ButtonGroup;
