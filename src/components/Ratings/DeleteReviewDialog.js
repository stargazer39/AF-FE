import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { deleteReview } from "../../services/Review";

export default function DeleteReviewDialog({
  isDeleteDialogOpen,
  handleCloseDeleteDialog,
  deleteData,
  setReviewData,
}) {
  const [fullWidth] = useState(true);
  const [maxWidth] = useState("sm");

  const handleClose = () => {
    handleCloseDeleteDialog();
  };

  async function handleDelete() {
    console.log("THIS IS THE DELETE DATA::::::", deleteData);
    const result = await deleteReview(deleteData);
    setReviewData((prev) =>
      prev.filter((review) => review._id !== deleteData._id)
    );
    console.log(result);
    handleCloseDeleteDialog();
  }

  return (
    <div>
      <Dialog
        open={isDeleteDialogOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={fullWidth}
        maxWidth={maxWidth}
      >
        <DialogTitle
          sx={{
            margin: 1,
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          <ErrorOutlineIcon
            sx={{ color: "#f44336", fontSize: 40, marginRight: 1 }}
          />
          Are you sure you want to delete this review?
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{
              fontSize: 16,
              fontWeight: 400,
              display: "flex",
            }}
          >
            Your review will be deleted permanently.This action cannot be
            undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{ backgroundColor: "rgb(37 99 235 / 0.9)", color: "white" }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleDelete}
            sx={{ backgroundColor: "rgb(37 99 235 / 0.9)", color: "white" }}
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
