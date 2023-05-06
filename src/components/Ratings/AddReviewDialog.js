import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import GetCurrentUser from "../../hooks/getCurrentUser";
import { createReview } from "../../services/Review";
import Star from "../Star";
import Stars from "../Stars";

export default function AddReviewDialog({
  isDialogOpened,
  handleCloseDialog,
  setReviewData,
}) {
  const currentUser = GetCurrentUser();

  const [fullWidth] = useState(true);
  const [maxWidth] = useState("sm");

  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [reviewError, setReviewError] = useState(false);
  const [ratingError, setRatingError] = useState(false);

  const handleClose = () => {
    handleCloseDialog(false);
  };

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
      const reviewContent = {
        review: review,
        rating: rating,
        userID: currentUser._id,
        username: currentUser.username,
        photo_url: currentUser.photo_url,
      };
      const result = await createReview(reviewContent);
      console.log(result);
      setReviewData((prev) => [reviewContent, ...prev]);
      handleCloseDialog(false);
      window.location.reload();
    }
  }
  return (
    <React.Fragment>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={isDialogOpened}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle
          sx={{ color: "#3d5631ec", textAlign: "center", fontWeight: "bold" }}
        >
          Add Your Review
        </DialogTitle>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <DialogContent>
            {/* user component */}
            <TextField
              onChange={(e) => setReview(e.target.value)}
              label="Review"
              helperText="Please enter your review here"
              variant="filled"
              fullWidth
              multiline
              rows={5}
              required
              error={reviewError}
              sx={{ marginTop: 2, marginBottom: 2, display: "block" }}
            />
            <Stars stars={rating} setStars={setRating} />
          </DialogContent>
          <DialogActions>
            <Button
              variant="text"
              onClick={handleClose}
              type="Submit"
              sx={{ backgroundColor: "rgb(37 99 235 / 0.9)", color: "white" }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              variant="contained"
              sx={{ backgroundColor: "rgb(37 99 235 / 0.9)", color: "white" }}
            >
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
}
