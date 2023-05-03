import React, { useEffect, useState } from "react";
import GroupCard from "./GroupCard";
import ButtonGroup from "./ButtonGroup";
import ViewMyGroups from "./ViewMyGroups";
import FollowingGroups from "./FollowingGroups";

function ViewGroups() {
  const [GroupList, setGroupList] = useState(null);

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
      <ButtonGroup />
      <h4 class="mb-2 mt-0 text-2xl font-medium leading-tight text-primary px-9 mt-6"> My Groups</h4>
      <hr/>
      <ViewMyGroups/>
      <h4 class="mb-2 mt-0 text-2xl font-medium leading-tight text-primary px-9 mt-9 pt-4"> My Followings</h4>
      <hr/>
      {GroupList && <FollowingGroups groupsFollow={GroupList} />}
      <h4 class="mb-2 mt-0 text-2xl font-medium leading-tight text-primary px-9 mt-9 pt-4"> All Groups</h4>
      <hr/>
      {GroupList && <GroupCard groups={GroupList} />}
    </div>
  );
}

export default ViewGroups;
