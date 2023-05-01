import React, { useState, useRef, useEffect } from "react";
import { genRandFileName } from "./../../utils/random";
import { uploadFile } from "../../firebase";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { RiImageAddLine } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import "./newProduct.css";

function CreatePost() {
  const [userId, setUserID] = useState("1");
  const [groupId, setGroupID] = useState("1");
  const [contentText, setContentText] = useState("");
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState([]);
  const [selectedfile, setSelectedfile] = useState(null);
  const [selectedfileIndex, setSelectedfileIndex] = useState(-1);
  const [imagesList, setimagesList] = useState([]);
  const [imagesUrlList, setImagesUrlList] = useState([]);
  const [loading, setLoading] = useState(false);
  const myRefname = useRef(null);
  const [message, setMessage] = useState("");

  function handleChange(e) {
    console.log(e.target.files);

    let temUrlparr = [...imagesUrlList];
    temUrlparr.unshift(URL.createObjectURL(e.target.files[0]));
    setImagesUrlList(temUrlparr);

    let temparr = [...imagesList];
    temparr.unshift(e.target.files[0]);
    setimagesList(temparr);

    setSelectedfile(URL.createObjectURL(e.target.files[0]));
    setSelectedfileIndex(0);
  }

  const handleClick = () => {
    myRefname.current.click();
  };

  function imgClicked(index) {
    setSelectedfile(imagesUrlList[index]);
    setSelectedfileIndex(index);
  }

  function imgRemoveClicked() {
    let temparr = [...imagesUrlList];
    temparr.splice(selectedfileIndex, 1);
    if (temparr.length === 0) {
      setSelectedfile(null);
      setSelectedfileIndex(-1);
    } else {
      setSelectedfile(temparr[0]);
      setSelectedfileIndex(0);
    }

    setImagesUrlList(temparr);

    let tempUrlarr = [...imagesUrlList];
    tempUrlarr.splice(selectedfileIndex, 1);

    setimagesList(tempUrlarr);
  }

  async function sendData(e) {
    e.preventDefault();

    setLoading(true);
    setMessage("loading...");
    let newArray = imagesList.map((image) =>
      uploadFile(image, genRandFileName(), "test")
    );

    let fileDetails = await Promise.all(newArray);

    const newItem = {
      userId,
      groupId,
      contentText,
      images: fileDetails,
      likes,
      comments,
    };
    console.log(newItem);

    fetch("http://localhost:3002/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMessage("successful");
      })
      .catch((err) => {
        console.log(err);
        setMessage("failed");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="relative w-full pt-20">
      <span className="ml-80 pt-20 mb-10 text-3xl font-bold">Create post</span>
      {/* image upload and inputs set */}
      <div className="w-full flex flex-wrap 2xl:flex-row  justify-center  ">
        {/* image upload */}
        <div className=" w-[600px] m-8 flex flex-row ">
          {/* selected image */}
          <div
            className={
              "relative w-[330px] h-[415px] overflow-hidden ml-14 border-2 flex flex-row justify-center items-center " +
              (selectedfileIndex === -1 ? "border-dashed" : "border-solid")
            }
          >
            {selectedfileIndex !== -1 && (
              <img
                src={selectedfile}
                className={
                  "w-[330px]" + (selectedfileIndex === -1 ? "hidden" : "inline")
                }
                alt="selected cloath"
              />
            )}
            <span
              onClick={imgRemoveClicked}
              className={
                "absolute top-2 right-2 bg-gray-50/75 rounded-sm cursor-pointer hover:bg-gray-50 " +
                (selectedfileIndex === -1 ? "hidden" : "block")
              }
            >
              <IoCloseSharp
                className={selectedfileIndex === -1 ? "hidden" : "block"}
                color="black"
              />
            </span>
            <span
              className={
                "text-zinc-500 " +
                (selectedfileIndex === -1 ? "block" : "hidden")
              }
            >
              Selected image will be displayed here
            </span>
          </div>

          {/* image list */}
          <div className="h-[470px] w-[134px] flex flex-col">
            <div
              className={
                " h-[268px] w-[134px] snap-y overflow-x-hidden mb-2 mx-5 ml-5" +
                (selectedfileIndex === -1
                  ? "overflow-y-hidden overflow-hidden"
                  : "overflow-y-scroll")
              }
            >
              {imagesUrlList.map((imgItem, index) => (
                <div
                  key={index}
                  onClick={() => imgClicked(index)}
                  className="mb-5 w-[130px] hover:cursor-pointer  flex flex-row items-center overflow-hidden"
                >
                  <img src={imgItem} alt={index + " items"} />{" "}
                </div>
              ))}
            </div>

            <div
              className="hover:cursor-pointer mx-5 mt-2 w-[130px] h-[130px] border-dashed border-2 flex flex-col justify-center items-center"
              onClick={handleClick}
            >
              <input
                ref={myRefname}
                className="hidden"
                type="file"
                accept="image/png, image/jpeg"
                onChange={handleChange}
              />
              <RiImageAddLine color="gray" className="h-10 w-10" />
              <span className="text-sm text-zinc-500">Add New Image</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="mb-6">
              <label
                for="first_name"
                class="block ml-2 mb-2 text-gray-900 dark:text-gray-300 font-bold text-md"
              >
                Description
              </label>
              <textarea
                type="text"
                id="first_name"
                class=" border-b-2 align-middle border-gray-300 text-gray-900  rounded-lg focus:outline-none block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:outline-none text-md"
                placeholder="Description"
                onChange={(e) => setContentText(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex flex-row">
            <input
              onClick={(e) => sendData(e)}
              type="submit"
              value={"Create"}
              className="bg-red-600 text-white h-10 w-[200px] cursor-pointer hover:bg-red-700 mr-10 mt-10 mb-20 font-bold"
            />

            <Link
              to={"../stocks"}
              className="bg-black h-10 w-[200px] hover:cursor-pointer hover:bg-black/90 flex flex-row justify-center items-center mr-10 mt-10 mb-20 text-white font-bold text-center"
            >
              CANCLE
            </Link>
          </div>
          {message}
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
