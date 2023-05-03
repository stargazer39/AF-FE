import React, { useState, useEffect } from "react";
import Navbar from "./../../../components/Navbar/Navbar";

import { useParams } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";

function OneGroup() {
  const [Group, setGroup] = useState([]);

  const { _id } = useParams();

  //get all groups
  useEffect(() => {
    fetch(`http://localhost:3002/api/group/getOneGroup/${_id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setGroup([data]);
      });
  }, []);

  return (
    <div>
      <Navbar />
      {Group && <Header group={Group} />}
      {/* {console.log(Group[0]?.groupName)} */}
      <Body groupName={Group[0]?.groupName} />
    </div>
  );
}

export default OneGroup;
