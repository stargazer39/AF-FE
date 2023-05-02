import { Link } from "react-router-dom";
import GetCurrentUser from "../../../hooks/getCurrentUser";

const FollowingGroups = ({ groupsFollow }) => {
  const currentUser = GetCurrentUser();
  return (
    <div class="grid grid-cols-4 gap-4 py-4 px-8 ">
      {groupsFollow &&
        groupsFollow.map((group) => (
          <>
            {group.followersUserId.includes(currentUser && currentUser._id) ? (
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <Link to={`/singleGroup/${group._id}`}>
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
              </div>
            ) : null}
          </>
        ))}
    </div>
  );
};

export default FollowingGroups;
