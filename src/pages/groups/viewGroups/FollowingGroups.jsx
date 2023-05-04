import { Link } from "react-router-dom";
import GetCurrentUser from "../../../hooks/getCurrentUser";
import axios from "axios";


const FollowingGroups = ({ groupsFollow }) => {

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { groupActions } from "../../../Store/group-slice";

const FollowingGroups = ({ groupsFollow }) => {
  const [stat, useStat] = useState([]);
  const { _id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(_id);

  //get current user
  const currentUser = GetCurrentUser();

  //remove followers
  const removeFollower = (_id) => {
    const data = {
      followersUserId: currentUser._id,
    };

    function refresh() {
      window.parent.location = window.parent.location.href;
    }

    axios
      .patch(`http://localhost:3002/api/group/removeFollows/${_id}`, data)
      .then(() => {
        alert("deleted Successfully!!");
        console.log(_id);
        refresh();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  function groupClicked(group) {
    dispatch(groupActions.replaceSelectedGroup({ selectedGroup: group }));
    navigate(`/singleGroup/${group._id}`);
  }

  return (
    <div class="grid grid-cols-4 gap-4 py-4 px-8 ">
      {groupsFollow &&
        groupsFollow.map((group) => (
          <>
            {group.followersUserId.includes(currentUser && currentUser._id) ? (

              <div class="max-w-sm flex flex-col justify-between rounded overflow-hidden shadow-lg">
                
                <Link to={`/singleGroup/${group._id}`}>

              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <div onClick={() => groupClicked(group)}>

                  <img
                    class="w-full h-60"
                    src={group.groupIcon[1]}
                    alt="Group icon"
                  />

                </Link>
                
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">{group.groupName}</div>
                  <p class="text-gray-700 text-base">{group.description}</p>
                </div>
                <>
                {currentUser && currentUser._id !== group.adminId ?(
                  <button
                  type="button"
                  onClick={() => {
                    removeFollower(group._id);
                  }}
                  class="text-gray-900 w-full bg-red-500 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm px-5 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Leave

                </div>
                <button type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                    />
                  </svg>

                </button>
                ):<>
                <button
                  type="button"
                  disabled
                  onClick={() => {
                    removeFollower(group._id);
                  }}
                  class="text-gray-900 w-full bg-red-500 opacity-40 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm px-5 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Leave
                </button>
                </>}
                </>
              </div>
            ) : null}
          </>
        ))}
    </div>
  );
};

export default FollowingGroups;
