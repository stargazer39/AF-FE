// // import axios from '../lib/axios'
// import axios from "axios";

// //review create function
// export const createReview = async (reviewContent) => {
//   try {
//     return (
//       await axios.post("http://localhost:3002/api/rating/add", reviewContent)
//     ).data;
//   } catch (err) {
//     console.error(err);
//   }
// };

// //review read function - all review
// export const readAllReview = async () => {
//   try {
//     return (await axios.get("http://localhost:3002/api/rating/get/all-reviews"))
//       .data.data;
//   } catch (err) {
//     console.error(err);
//   }
// };

// //review update function
// export const updateReview = async (reviewContent) => {
//   try {
//     return (
//       await axios.put("http://localhost:3002/api/rating/edit", reviewContent)
//     ).data;
//   } catch (err) {
//     console.error(err);
//   }
// };

// //review delete function
// export const deleteReview = async (reviewContent) => {
//   try {
//     return await axios.delete(
//       `http://localhost:3002/api/rating/delete/${reviewContent._id}`
//     );
//   } catch (err) {
//     console.error(err);
//   }
// };

// import axios from '../lib/axios'
import axios from "axios";
import { API_ENDPOINT } from "../config";

//review create function
export const createReview = async (reviewContent) => {
  try {
    return (await axios.post(`${API_ENDPOINT}/api/rating/add`, reviewContent))
      .data;
  } catch (err) {
    console.error(err);
  }
};

//review read function - all review
export const readAllReview = async () => {
  try {
    return (await axios.get(`${API_ENDPOINT}/api/rating/get/all-reviews`)).data
      .data;
  } catch (err) {
    console.error(err);
  }
};

//review update function
export const updateReview = async (reviewContent) => {
  try {
    return (await axios.put(`${API_ENDPOINT}/api/rating/edit`, reviewContent))
      .data;
  } catch (err) {
    console.error(err);
  }
};

//review delete function
export const deleteReview = async (reviewContent) => {
  try {
    return await axios.delete(
      `${API_ENDPOINT}/api/rating/delete/${reviewContent._id}`
    );
  } catch (err) {
    console.error(err);
  }
};
