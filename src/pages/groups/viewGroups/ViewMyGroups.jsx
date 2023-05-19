import React, { useEffect, useState } from "react";
import MyGroups from "./MyGroups";
import ButtonGroup from "./ButtonGroup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FollowingGroups from "./FollowingGroups";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Navbar/Footer";
import { API_ENDPOINT } from "../../../config";

function ViewMyGroups() {
  const [GroupList, setGroupList] = useState(null);

  const history = useNavigate();

  //get all groups
  useEffect(() => {
    fetch(`${API_ENDPOINT}/api/group/getGroups`)
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
      .delete(`${API_ENDPOINT}/api/group/deleteGroup/${_id}`)
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
      <Navbar />
      <ButtonGroup />
      <h4 class="mb-2 text-2xl font-medium leading-tight text-primary px-9 mt-6">
        {" "}
        My Groups
      </h4>
      <hr />
      <div className="">
        {GroupList && (
          <MyGroups groups={GroupList} handleDelete={handleDelete} />
        )}
        <h4 class="mb-2 text-2xl font-medium leading-tight text-primary px-9 mt-9 pt-4">
          {" "}
          My Followings
        </h4>
        <hr />
        {GroupList && <FollowingGroups groupsFollow={GroupList} />}
      </div>

      <Footer />
    </div>
  );
}

export default ViewMyGroups;
