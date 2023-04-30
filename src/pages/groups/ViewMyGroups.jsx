/*
    must only show the data of the current user

*/

import React, { useEffect, useState } from "react";
import MyGroups from "../../components/groups/MyGroups";
import ButtonGroup from "../../components/groups/ButtonGroup";
import axios from "axios";

function ViewMyGroups() {
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

  //delete groups
  const handleDelete = (_id) => {
    axios
      .delete(`http://localhost:3002/api/group/deleteGroup/${_id}`)
      .then(() => {
        alert("deleted Successfully!!");
        console.log(_id);
        //history
      })
      .catch((err) => {
        console.log(err.message);
      });

    //refresh()
  };

  return (
    <div>
      <ButtonGroup />
      {GroupList && <MyGroups groups={GroupList} handleDelete={handleDelete} />}
    </div>
  );
}

export default ViewMyGroups;
