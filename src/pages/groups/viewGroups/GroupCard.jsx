import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { groupActions } from "../../../Store/group-slice";

const GroupCard = ({ groups }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function groupClicked(group) {
    dispatch(groupActions.replaceSelectedGroup({ selectedGroup: group }));
    navigate(`/singleGroup/${group._id}`);
  }
  return (
    <div class="grid grid-cols-4 gap-4 py-4 px-8 ">
      {groups.map((group) => (
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <div onClick={() => groupClicked(group)}>
            <img
              class="w-full h-60"
              src={group.groupIcon[1]}
              alt="Group icon"
            />
          </div>
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
