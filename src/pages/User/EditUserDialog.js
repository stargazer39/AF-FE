// import {
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   TextField,
// } from "@mui/material";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { updateUser, deleteUser } from "../../services/User";
// import { uploadFile } from "../../firebase";

// export default function EditUserDialog({
//   isDialogOpened,
//   user,
//   handleCloseDialog,
// }) {
//   const navigate = useNavigate();
//   const [fullWidth] = useState(true);
//   const [maxWidth] = useState("sm");
//   const [file, setFile] = useState("");
//   const [imageURL, setImageURL] = useState(user.photo_url);
//   const [coverImage, setcoverImage] = useState("");
//   const [coverImageURL, setCoverImageURL] = useState(user.cover_photo_url);
//   const [usernameD, setUsernameD] = useState();

//   const handleFileChangeCover = async (e) => {
//     try {
//       const [fileName, url] = await uploadFile(e.target.files[0], "user");
//       setCoverImageURL(url);
//       setcoverImage(e.target.files[0]);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleFileChangeProfile = async (e) => {
//     try {
//       const [fileName, url] = await uploadFile(e.target.files[0], "user");
//       setImageURL(url);
//       setFile(e.target.files[0]);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleClose = () => {
//     handleCloseDialog(false);
//   };
//   async function deleteone() {
//     const result = await deleteUser({ email: user.email });
//     alert(result.data.message);
//     localStorage.removeItem("token");
//     navigate("/login");
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     handleCloseDialog(false);

//     console.log("imageURL", imageURL);
//     console.log("coverImageURL", coverImageURL);

//     const data = {
//       email: user.email,
//       username: usernameD,
//       photo_url: imageURL,
//       cover_photo_url: coverImageURL,
//     };

//     const res = await updateUser(data);
//     console.log("res", res.data);
//     alert(res.data.message);
//     setImageURL(imageURL);
//     setCoverImageURL(coverImageURL);
//     setFile();
//     setcoverImage();
//     window.location.reload();
//   }

//   return (
//     <Dialog
//       open={isDialogOpened}
//       onClose={handleClose}
//       fullWidth={fullWidth}
//       maxWidth={maxWidth}
//     >
//       <DialogTitle>Edit User Profile</DialogTitle>
//       <DialogContent>
//         <DialogContentText>
//           Edit your profile information here.
//         </DialogContentText>
//         <br />
//         <form>
//           <TextField
//             id="email"
//             label="Email"
//             defaultValue={user.email}
//             helperText="This is your email address, unfortunately it cannot be changed."
//             variant="filled"
//             InputProps={{
//               readOnly: true,
//             }}
//           />
//           <TextField
//             margin="dense"
//             id="username"
//             label="Username"
//             fullWidth
//             variant="outlined"
//             onChange={(e) => setUsernameD(e.target.value)}
//           />
//           <br />
//           <br />
//           <Button variant="contained" component="label">
//             Upload Profile Picture
//             <input
//               type="file"
//               onChange={handleFileChangeProfile}
//               accept="/image/*"
//               hidden
//             />
//           </Button>
//           <br />
//           <br />
//           <Button variant="contained" component="label">
//             Upload Cover Photo
//             <input
//               type="file"
//               onChange={handleFileChangeCover}
//               accept="/image/*"
//               hidden
//             />
//           </Button>
//         </form>
//       </DialogContent>
//       <DialogActions>
//         <Button variant="contained" onClick={handleClose}>
//           Cancel
//         </Button>
//         <Button onClick={handleSubmit}>Edit</Button>
//       </DialogActions>
//       <Button onClick={deleteone}>Delete User</Button>
//     </Dialog>
//   );
// }

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateUser, deleteUser } from "../../services/User";
import { uploadFile } from "../../firebase";

export default function EditUserDialog({
  isDialogOpened,
  user,
  handleCloseDialog,
}) {
  const navigate = useNavigate();
  const [fullWidth] = useState(true);
  const [maxWidth] = useState("sm");
  const [file, setFile] = useState("");
  const [imageURL, setImageURL] = useState(user.photo_url);
  const [coverImage, setcoverImage] = useState("");
  const [coverImageURL, setCoverImageURL] = useState(user.cover_photo_url);
  const [usernameD, setUsernameD] = useState();

  const handleFileChangeCover = async (e) => {
    try {
      const [fileName, url] = await uploadFile(e.target.files[0], "user");
      setCoverImageURL(url);
      setcoverImage(e.target.files[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChangeProfile = async (e) => {
    try {
      const [fileName, url] = await uploadFile(e.target.files[0], "user");
      setImageURL(url);
      setFile(e.target.files[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => {
    handleCloseDialog(false);
  };
  async function deleteone() {
    const result = await deleteUser({ email: user.email });
    alert(result.data.message);
    localStorage.removeItem("token");
    navigate("/login");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    handleCloseDialog(false);

    console.log("imageURL", imageURL);
    console.log("coverImageURL", coverImageURL);

    const data = {
      email: user.email,
      username: usernameD,
      photo_url: imageURL,
      cover_photo_url: coverImageURL,
    };

    const res = await updateUser(data);
    console.log("res", res.data);
    alert(res.data.message);
    setImageURL(imageURL);
    setCoverImageURL(coverImageURL);
    setFile();
    setcoverImage();
    window.location.reload();
  }

  return (
    <Dialog
      open={isDialogOpened}
      onClose={handleClose}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
    >
      <DialogTitle>Edit User Profile</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Edit your profile information here.
        </DialogContentText>
        <br />
        <form>
          <TextField
            id="email"
            label="Email"
            defaultValue={user.email}
            helperText="This is your email address, unfortunately it cannot be changed."
            variant="filled"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            margin="dense"
            id="username"
            label="Username"
            fullWidth
            variant="outlined"
            onChange={(e) => setUsernameD(e.target.value)}
          />
          <br />
          <br />
          <Button variant="contained" component="label">
            Upload Profile Picture
            <input
              type="file"
              onChange={handleFileChangeProfile}
              accept="/image/*"
              hidden
            />
          </Button>
          <br />
          <br />
          <Button variant="contained" component="label">
            Upload Cover Photo
            <input
              type="file"
              onChange={handleFileChangeCover}
              accept="/image/*"
              hidden
            />
          </Button>
        </form>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={handleSubmit}>Edit</Button>
      </DialogActions>
      <Button onClick={deleteone}>Delete User</Button>
    </Dialog>
  );
}
