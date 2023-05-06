import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateUser, deleteUser } from "../../services/User";
import { uploadFile } from "../../firebase";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";

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
      const [fileName, url] = await uploadFile(e.target.files[0], "cover");
      setCoverImageURL(url);
      setcoverImage(e.target.files[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChangeProfile = async (e) => {
    try {
      const [fileName, url] = await uploadFile(e.target.files[0], "profile");
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
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="email"
                label="Email"
                defaultValue={user.email}
                helperText="This is your email address, unfortunately it cannot be changed."
                variant="filled"
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                id="username"
                label="Username"
                fullWidth
                variant="outlined"
                onChange={(e) => setUsernameD(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Profile Picture"
                    height="140"
                    image={imageURL}
                    title="Profile Picture"
                  />
                  <CardContent>
                    <Button
                      variant="contained"
                      component="label"
                      color="primary"
                      startIcon={<i className="fas fa-file-image"></i>}
                      fullWidth
                    >
                      Upload Profile Picture
                      <input
                        type="file"
                        onChange={handleFileChangeProfile}
                        accept="/image/*"
                        hidden
                      />
                    </Button>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Cover Photo"
                    height="140"
                    image={coverImageURL}
                    title="Cover Photo"
                  />
                  <CardContent>
                    <Button
                      variant="contained"
                      component="label"
                      color="primary"
                      startIcon={<i className="fas fa-file-image"></i>}
                      fullWidth
                    >
                      Upload Cover Photo
                      <input
                        type="file"
                        onChange={handleFileChangeCover}
                        accept="/image/*"
                        hidden
                      />
                    </Button>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button color="primary" onClick={handleSubmit}>
          Edit
        </Button>
      </DialogActions>
      <Button
        variant="outlined"
        color="error"
        onClick={deleteone}
        startIcon={<i className="fas fa-trash"></i>}
      >
        Delete User
      </Button>
    </Dialog>
  );
}
