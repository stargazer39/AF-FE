import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import GetCurrentUser from "../../hooks/getCurrentUser";
import { updateReview } from "../../services/Review";
import Stars from "../Stars";

export default function EditReviewDialog({
  isEditDialogOpen,
  handleCloseEditDialog,
  editData,
  setReviewData,
}) {
  const currentUser = GetCurrentUser();

  const [fullWidth] = useState(true);
  const [maxWidth] = useState("sm");

  const [review, setReview] = useState(editData.review);
  const [rating, setRating] = useState(editData.rating);
  const [reviewError, setReviewError] = useState(false);
  const [ratingError, setRatingError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setReviewError(false);
    setRatingError(false);

    if (review === "") {
      setReviewError(true);
    }
    if (rating === "") {
      setRatingError(true);
    }

    if (review && rating) {
      const data = {
        _id: editData._id,
        review: review,
        rating: rating,
        userID: currentUser._id,
      };
      console.log("edit dataaaaaaaa", data);
      const result = await updateReview(data);
      setReviewData((prev) => {
        const index = prev.findIndex((item) => item._id === editData._id);
        prev[index] = data;
        return [...prev];
      });
      console.log(result);
    }
    handleCloseEditDialog();
  }

  return (
    <React.Fragment>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={isEditDialogOpen}
        onClose={handleCloseEditDialog}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle
          sx={{
            color: "rgb(37 99 235 / 0.9)",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Edit Your Review & Rating
        </DialogTitle>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              onChange={(e) => setReview(e.target.value)}
              label="Review"
              value={review === "" ? editData.review : review}
              helperText="Please enter your review here"
              variant="filled"
              fullWidth
              multiline
              rows={5}
              required
              error={reviewError}
              sx={{ marginTop: 2, marginBottom: 2, display: "block" }}
            />

            <Stars
              stars={rating}
              setStars={setRating}
              onChange={(e) => setRating(e.target.value)}
              value={rating === "" ? editData.rating : rating}
            />
          </DialogContent>
          <DialogActions>
            <Button
              variant="text"
              onClick={handleCloseEditDialog}
              sx={{ backgroundColor: "rgb(37 99 235 / 0.9)", color: "white" }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              variant="contained"
              sx={{ backgroundColor: "rgb(37 99 235 / 0.9)", color: "white" }}
            >
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
}
