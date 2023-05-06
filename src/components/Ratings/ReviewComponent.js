/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import EditReviewDialog from "./EditReviewDialog";
import DeleteReviewDialog from "./DeleteReviewDialog";
import Chip from "@mui/material/Chip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ListItemIcon, ListItemText } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import jwt_decode from "jwt-decode";
import Star from "../Star";

export default function ReviewComponent({ data, setReviewData }) {
  console.log("dataaaaaa", data);

  const currentUser = jwt_decode(localStorage.getItem("token")).data;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    setAnchorEl(null);
    setIsEditOpen(!isEditOpen);
  };

  const handleDelete = () => {
    console.log("handle delete called");
    setAnchorEl(null);
    setIsDeleteOpen(!isDeleteOpen);
  };

  console.log("currentUseremail :");
  return (
    <>
      <DeleteReviewDialog
        deleteData={data}
        isDeleteDialogOpen={isDeleteOpen}
        handleCloseDeleteDialog={setIsDeleteOpen}
        setReviewData={setReviewData}
      />
      <EditReviewDialog
        editData={data}
        isEditDialogOpen={isEditOpen}
        handleCloseEditDialog={handleEdit}
        setReviewData={setReviewData}
      />

      <Card
        elevation={10}
        sx={{
          width: 360,
          height: 500,
          "--Card-radius": (theme) => theme.vars.radius.xs,
          backgroundColor: "#FFFFFF",
          marginTop: "10px",
          marginRight: "20px",
          marginBottom: "10px",
          marginLeft: "20px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", pb: 1.5, gap: 1 }}>
          <Box
            sx={{
              position: "relative",
              "&:before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                m: "-2px",
                borderRadius: "50%",
                background:
                  "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
              },
            }}
          >
            <Avatar
              size="sm"
              src="/static/logo.png"
              sx={{
                p: 0.5,
                border: "2px solid",
                borderColor: "background.body",
              }}
            />
          </Box>
          <Typography fontWeight="lg">{data.username}</Typography>

          <IconButton
            variant="plain"
            color="neutral"
            size="sm"
            sx={{ ml: "auto" }}
          >
            {currentUser._id === data.userID ? (
              <MoreHorizIcon
                sx={{
                  float: "right",
                  cursor: "pointer",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
                onClick={handleClick}
              />
            ) : null}
            <Menu
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={handleEdit}>
                <ListItemIcon>
                  <ModeEditIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Edit</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleDelete}>
                <ListItemIcon>
                  <DeleteIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Delete</ListItemText>
              </MenuItem>
            </Menu>
          </IconButton>
        </Box>
        <hr />
        <CardOverflow>
          <Star stars={data.rating} />
          {Date(data.created_at).toString().slice(3, 15)}
        </CardOverflow>
        <CardOverflow>{data.review}</CardOverflow>

        <Typography fontWeight="sm">
          Last updated At:{Date(data.edited_at).toString().slice(3, 15)}
        </Typography>
        <CardOverflow sx={{ p: "var(--Card-padding)", display: "flex" }}>
          <Chip
            label={data.rating}
            sx={{
              margin: 1,
              color: "primary.light",
              fontWeight: "bold",
            }}
          />
        </CardOverflow>
      </Card>
      <br />
    </>
  );
}
