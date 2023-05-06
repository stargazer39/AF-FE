import React, { useEffect, useState } from "react";
import AddReview from "./AddRating";
import StarRatingsChart from "../../components/Bars";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import ReviewComponent from "../../components/Ratings/ReviewComponent";
import { readAllReview } from "../../services/Review";
import Loading from "../../components/Loading/Loading";
import jwt_decode from "jwt-decode";
import "./style.css";
import Navbar from "../../components/Navbar/Navbar";

const Index = () => {
  const currentUser = jwt_decode(localStorage.getItem("token")).data;
  const [reviewData, setReviewData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    readAllReview()
      .then((res) => {
        setReviewData(res);
        setFilterData(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading loading={loading} />;
  } else if (error) {
    return <div>Error</div>;
  } else {
    return (
      <>
        <Navbar />
        <br />
        <Container>
          <Grid container justifyContent="center" alignItems="center">
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
              }}
            >
              Reviews & Ratings
            </Typography>
            {/* <AddReview setReviewData={setReviewData} /> */}
          </Grid>
          <Grid container justifyContent="right" alignItems="right">
            <AddReview setReviewData={setReviewData} />
          </Grid>
          <br />
          <Grid container justifyContent="center" alignItems="center">
            <StarRatingsChart
              starCounts={{
                Total: [10, 43, 32, 91, 40],
                "Last Year": [0, 29, 8, 32, 25],
                "Last Month": [0, 4, 0, 7, 5],
              }}
              width={500}
              height={200}
            />
          </Grid>

          <Grid item md={3} zeroMinWidth>
            <Grid
              item
              container
              direction="row"
              spacing={6}
              alignItems="center"
              justifyContent="center"
              sx={{
                marginTop: "10px",
                marginRight: "10px",
              }}
            >
              <ReviewSection
                reviewData={reviewData}
                setReviewData={setReviewData}
              />
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
};
const ReviewSection = ({ reviewData, setReviewData }) => {
  console.log("postData IN MY POSTS SECTION:::", reviewData);
  return (
    <>
      {reviewData.map((data) => (
        <ReviewComponent data={data} setReviewData={setReviewData} />
      ))}
    </>
  );
};

export default Index;
