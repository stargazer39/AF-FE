/*
    must only show the data of the current user

*/

import React, { useEffect, useState } from "react";
import MyGroups from "../../components/groups/MyGroups";
import ButtonGroup from "../../components/groups/ButtonGroup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ViewMyGroups() {
  const [GroupList, setGroupList] = useState(null);

  const history = useNavigate();

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

  function refresh() {
    window.parent.location = window.parent.location.href;
  }

  //delete groups
  const handleDelete = (_id) => {
    axios
      .delete(`http://localhost:3002/api/group/deleteGroup/${_id}`)
      .then(() => {
        alert("deleted Successfully!!");
        console.log(_id);
        refresh();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <ButtonGroup />
      {GroupList && <MyGroups groups={GroupList} handleDelete={handleDelete} />}
    </div>
  );
}

export default ViewMyGroups;
