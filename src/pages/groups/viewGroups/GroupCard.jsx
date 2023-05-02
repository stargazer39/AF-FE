import { Link } from "react-router-dom";

const GroupCard = ({ groups }) => {
  return (
    <div class="grid grid-cols-4 gap-4 py-4 px-8 ">
      {groups.map((group) => (
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <Link to={`/singleGroup/${group._id}`}>
            <img class="w-full h-60" src={group.groupIcon[1]} alt="Group icon" />
          </Link>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{group.groupName}</div>
            <p class="text-gray-700 text-base">{group.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GroupCard;
