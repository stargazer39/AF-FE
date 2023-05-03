import React, { useEffect, useState } from "react";
import GroupCard from "./GroupCard";
import ButtonGroup from "./ButtonGroup";
import ViewMyGroups from "./ViewMyGroups";
import SearchBar from "./SearchBar";

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
      <SearchBar />
      <h4 class="mb-2 text-2xl font-medium leading-tight text-primary px-9 mt-9 pt-4">
        {" "}
        All Groups
      </h4>
      <hr />
      {GroupList && <GroupCard groups={GroupList} />}
    </div>
  );
}

export default ViewGroups;
