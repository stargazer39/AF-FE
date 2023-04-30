import React from "react";

const GroupCard = ({ groups }) => {
  return (
    <div class="grid grid-cols-4 gap-4 py-4 px-8">
      {groups.map((group) => (
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
  );
};

export default GroupCard;
