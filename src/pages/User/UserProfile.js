// import React, { useEffect, useState } from "react";
// import Navbar from "../../components/Navbar/Navbar";
// import PostPanel from "../../components/PostPanel/PostPanel";
// import ProgressPanel from "../../components/ProgressPanel/ProgressPanel";
// import Avatar from "@mui/material/Avatar";
// import { getUser } from "../../services/User";
// import jwt_decode from "jwt-decode";
// import EditUserDialog from "./EditUserDialog";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { userActions } from "../../Store/user-slice";

// const UserProfile = () => {
//   const userdata = jwt_decode(localStorage.getItem("token")).data;
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [postData, setPostData] = useState([]);
//   const [user, setUser] = useState(userdata);
//   console.log("userdata", userdata);
//   const [isOpen, setIsOpen] = useState(false);
//   const [profilePic, setProfilePic] = useState(userdata.photo_url);
//   const [coverPic, setCoverPic] = useState(userdata.cover_photo_url);
//   const [username, setUsername] = useState(userdata.username);

//   const handleOpen = () => {
//     setIsOpen(!isOpen);
//   };

//   // getUser({email: user.email}).then((res) => {
//   //   setUSER(res.data.data)
//   // })
//   useEffect(() => {
//     getUser({ email: user.email }).then((res) => {
//       setProfilePic(res.data.data.photo_url);
//       setUsername(res.data.data.username);
//       setCoverPic(res.data.data.cover_photo_url);
//       setUser(res.data.data);
//     });
//   }, []);

//   useEffect(() => {
//     dispatch(userActions.replaceSelectedUser({ selectedUser: userdata }));
//   }, [dispatch, userdata]);

//   console.log(profilePic);
//   return (
//     <div>
//       <Navbar />
//       <div className="flex flex-col px-28">
//         <div className=" relative flex">
//           {coverPic ? (
//             <img src={coverPic} alt="Cover" className="h-[20rem] w-[85rem]" />
//           ) : (
//             <div className="h-[20rem] w-[85rem] bg-slate-600">
//               {/* <img
//               src="https://images.unsplash.com/photo-1521117184087-0bf82f2385ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
//               alt="Cover image"
//               className="h-[20rem] w-[85rem]"
//             /> */}
//             </div>
//           )}
//           <div className="absolute h-24 w-24 bg-blue-400 -bottom-5 left-8">
//             {profilePic ? (
//               <div>
//                 {console.log}
//                 <Avatar
//                   alt="Profile Picture"
//                   src={profilePic}
//                   sx={{ width: 100, height: 100 }}
//                   variant="square"
//                 />
//               </div>
//             ) : (
//               <Avatar
//                 alt="Profile Picture"
//                 src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
//                 sx={{ width: 100, height: 100 }}
//                 variant="square"
//               />
//             )}
//           </div>
//         </div>
//         <div className="h-7 w-full mt-10 flex justify-between">
//           <span className="text-2xl font-inter font-bold">@{username}</span>
//           <button
//             className="bg-[#1976D2] text-white p-2 flex text-center items-center rounded-sm"
//             onClick={() => handleOpen()}
//           >
//             Edit Profile
//           </button>
//           <EditUserDialog
//             isDialogOpened={isOpen}
//             handleCloseDialog={() => setIsOpen(false)}
//             user={user}
//           />
//         </div>
//       </div>
//       <br></br>
//       <hr className="bg-black h-1" />
//       <div className=" flex px-28 mt-7 ">
//         <div className=" flex w-full ">
//           <div className="">
//             <ProgressPanel />
//           </div>
//           <div className="flex-[2] ml-10  ">
//             <PostPanel />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;

import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Navbar/Footer";
import PostPanel from "../../components/PostPanel/PostPanel";
import ProgressPanel from "../../components/ProgressPanel/ProgressPanel";
import FriendsPanel from "../../components/FriendsPanel/FriendsPanel"; // New component
import UserInfoPanel from "../../components/UserInfoPanel/UserInfoPanel"; // New component
// import PhotosPanel from "../../components/PhotosPanel/PhotosPanel"; // New component
import Avatar from "@mui/material/Avatar";
import { getUser } from "../../services/User";
import jwt_decode from "jwt-decode";
import EditUserDialog from "./EditUserDialog";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../../Store/user-slice";

const UserProfile = () => {
  const userdata = jwt_decode(localStorage.getItem("token")).data;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [postData, setPostData] = useState([]);
  const [user, setUser] = useState(userdata);
  console.log("userdata", userdata);
  const [isOpen, setIsOpen] = useState(false);
  const [profilePic, setProfilePic] = useState(userdata.photo_url);
  const [coverPic, setCoverPic] = useState(userdata.cover_photo_url);
  const [username, setUsername] = useState(userdata.username);
  const [botMessage, setBotMessage] = useState("");


  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    getUser({ email: user.email }).then((res) => {
      setProfilePic(res.data.data.photo_url);
      setUsername(res.data.data.username);
      setCoverPic(res.data.data.cover_photo_url);
      setUser(res.data.data);
    });
  }, []);

  useEffect(() => {
    dispatch(userActions.replaceSelectedUser({ selectedUser: userdata }));
  }, [dispatch, userdata]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBotMessage(
        "🤖 Hi, welcome to the user profile!\n How Can I help you?"
      );
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  console.log(profilePic);

  return (
    <div>
      <Navbar />
      {botMessage && (
        <div
          className="fixed bottom-10 right-10 flex items-center justify-between bg-blue-500 text-white p-3 rounded-lg shadow-lg w-auto transition-all ease-in-out duration-500 animate-bounce"
          style={{ minWidth: "fit-content" }}
        >
          <span className="mr-2 text-lg">🤖</span>
          <span className="font-semibold">{botMessage}</span>
        </div>
      )}
      <div className="flex flex-col px-4 md:px-12 lg:px-28">
        <div className=" relative flex">
          {coverPic ? (
            <img
              src={coverPic}
              alt="Cover"
              className="h-[20rem] w-full md:w-[85rem] object-cover"
            />
          ) : (
            <div className="h-[20rem] w-full md:w-[85rem] bg-slate-600"></div>
          )}
          <div className="absolute h-24 w-24 bg-blue-400 -bottom-5 left-8">
            {profilePic ? (
              <div>
                <Avatar
                  alt="Profile Picture"
                  src={profilePic}
                  sx={{ width: 100, height: 100 }}
                  variant="square"
                />
              </div>
            ) : (
              <Avatar
                alt="Profile Picture"
                src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                sx={{ width: 100, height: 100 }}
                variant="square"
              />
            )}
          </div>
        </div>
        <div className="h-7 w-full mt-10 flex justify-between">
          <span className="text-2xl font-inter font-bold">@{username}</span>
          <div>
            <button
              className="bg-[#1877F2] text-white py-1 px-3 mx-1 rounded-md text-sm font-semibold hover:bg-[#166fe5]"
              onClick={() => handleOpen()}
            >
              Edit Profile
            </button>
            <button className="border border-[#1877F2] text-[#1877F2] py-1 px-3 mx-1 rounded-md text-sm font-semibold hover:bg-[#edf0f5]">
              Follow
            </button>
          </div>
          <EditUserDialog
            isDialogOpened={isOpen}
            handleCloseDialog={() => setIsOpen(false)}
            user={user}
          />
        </div>
      </div>
      <br></br>
      <hr className="bg-black h-1" />

      <div className="flex px-28 mt-7">
        <div className="w-3/12">
          <UserInfoPanel user={user} /> {/* New component */}
        </div>
        <div className="w-6/12 ml-10">
          <PostPanel />
        </div>
        <div className="w-3/12 ml-10">
          <FriendsPanel /> {/* New component */}
        </div>
      </div>
      <div className="px-28 mt-7">{/* <PhotosPanel /> New component */}</div>
      <Footer />
    </div>
  );
};

export default UserProfile;
