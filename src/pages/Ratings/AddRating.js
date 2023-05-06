import React, { useState } from "react";
import Button from "@mui/material/Button";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import AddReviewDialog from "../../components/Ratings/AddReviewDialog";

export default function AddRating({ setRatingData }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="add-post">
      <AddReviewDialog
        isDialogOpened={isOpen}
        handleCloseDialog={() => setIsOpen(false)}
        setRatingData={setRatingData}
      />
      <Button
        fullWidth
        size="large"
        variant="outlined"
        onClick={() => handleOpen()}
        sx={{
          height: 50,
          backgroundColor: "rgb(37 99 235 / 0.9)",
          color: "white",
          fontFamily: "Roboto",
        }}
      >
        Add Review & Rating
      </Button>
    </div>
  );
}
