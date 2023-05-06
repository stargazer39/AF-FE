import React from "react";
import "./FriendsPanel.css";
import Avatar from "@mui/material/Avatar";

const FriendsPanel = () => {
  const dummyFriends = [
    {
      id: 1,
      name: "John Doe",
      profilePic: "https://example.com/images/john_doe.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      profilePic: "https://example.com/images/jane_smith.jpg",
    },
    {
      id: 3,
      name: "Michael Brown",
      profilePic: "https://example.com/images/michael_brown.jpg",
    },
    // Add more dummy friends if needed
  ];

  return (
    <div className="friends-panel">
      <h2>Friends</h2>
      <div className="friends-list">
        {dummyFriends.map((friend) => (
          <div key={friend.id} className="friend-item">
            <Avatar
              alt={friend.name}
              src={friend.profilePic}
              sx={{ width: 48, height: 48 }}
            />
            <p className="friend-name">{friend.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsPanel;
