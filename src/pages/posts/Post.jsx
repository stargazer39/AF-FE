import React, { useEffect, useRef, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./post.css";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { MdOutlineMoreHoriz } from "react-icons/md";
import useDebounce from "../../hook/debounce";
import { Lightbox } from "react-modal-image";
import { useNavigate } from "react-router-dom";
import { orderActions } from "../../Store/post-slice";
import { useSelector } from "react-redux";
import DeletePostModal from "./DeletePostModal";
import { useIsOverflow } from "../../hook/useIsOverflow";
import { API_ENDPOINT } from "../../config";
import moment from "moment";

function Post({ post, setDeleteCount }) {
  const ref = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isOverflow = useIsOverflow(ref);
  const user = useSelector((state) => state.user).currentUser;
  const [innerPost, setInnerPost] = useState(post);
  const debouncedValue = useDebounce(innerPost || {}, 1000);
  const [seeMore, setSeeMore] = useState(false);
  const [changed, setChanged] = useState(false);
  const [selectedImage, setSelectedImage] = useState(undefined);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const postId = post._id;
  const userId = user?._id;
  const isCurrentUser = post.userId === user?._id;
  const timeElapsed = moment(post.timePosted).fromNow();

  console.log("post", post);
  useEffect(() => {
    // update post
    if (Object.keys(debouncedValue).length > 0 && changed) {
      fetch(`${API_ENDPOINT}/api/post/posts/${postId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(debouncedValue),
      })
        .then((response) => response.json())
        .then((data) => {
          setInnerPost(data);
          setChanged(false);
        })
        .catch((error) => console.error(error));
    }
  }, [debouncedValue, postId]);

  function handleLikeClick() {
    if (!!userId) {
      setChanged(true);
      const updatedPost = { ...innerPost };
      const updateLike = { ...updatedPost.like };
      if (userId in updatedPost.like) {
        delete updateLike[userId];
        setInnerPost({ ...updatedPost, like: updateLike });
      } else {
        updateLike[userId] = 1;
        setInnerPost({ ...updatedPost, like: updateLike });
      }
    } else {
      alert("Please login to react");
    }
  }

  function handleDislikeClick() {
    if (userId) {
      setChanged(true);
      const updatedPost = { ...innerPost };
      const updateDisLike = { ...updatedPost.disLike };
      if (userId in updatedPost.disLike) {
        delete updateDisLike[userId];
        setInnerPost({ ...updatedPost, disLike: updateDisLike });
      } else {
        updateDisLike[userId] = 1;
        setInnerPost({ ...updatedPost, disLike: updateDisLike });
      }
    } else {
      alert("Please login to react");
    }
  }

  function handleImageClick(image) {
    setSelectedImage(image);
  }

  function closePreview() {
    setSelectedImage(undefined);
  }

  function handleEditClick() {
    dispatch(orderActions.replaceSelectedPost({ post: innerPost }));
    navigate("/editPost");
  }

  const imageUrl =
    post?.photoUrl || "https://img.freepik.com/free-icon/user_318-159711.jpg";
  return (
    <div className="mt-14 ">
      <div className="border-2 border-gray-300 border-b-0 p-3">
        <div className="mb-4 flex flex-row items-center">
          <div className="h-12 w-12 border-2 border-gray-300 rounded-full mr-5 overflow-hidden ">
            <img src={imageUrl} alt="user" className="h-full w-full" />
          </div>
          <div className="flex flex-col flex-grow">
            <span className="font-bold">
              {post?.userName || "unknown user"}
            </span>
            <span className="text-xs">{timeElapsed}</span>
          </div>
          {isCurrentUser && (
            <div className="relative z-10">
              <MdOutlineMoreHoriz
                onClick={() =>
                  setIsOptionsOpen((isOptionsOpen) => !isOptionsOpen)
                }
                size={24}
              />
              {isOptionsOpen && (
                <div className="w-[300px] h-[130px] bg-white shadow-2xl absolute right-5 top-5 flex flex-col">
                  <span
                    onClick={() => {
                      handleEditClick();
                      setIsOptionsOpen(false);
                    }}
                    className="p-5 border-b-2 border-gray-500 border-opacity-30 hover:bg-slate-300"
                  >
                    Edit
                  </span>
                  <span
                    onClick={() => {
                      setShowDeleteModal(true);
                      setIsOptionsOpen(false);
                    }}
                    className="p-5 hover:bg-slate-300"
                  >
                    Delete
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
        <div
          className={`w-full text-lg ${seeMore ? "" : "line-clamp-2"}`}
          ref={ref}
        >
          {post.contentText}{" "}
        </div>
        <div
          className="cursor-pointer text-lg font-bold"
          onClick={() => setSeeMore((seeMore) => !seeMore)}
        >
          {seeMore ? "see less..." : isOverflow ? "See more..." : undefined}
        </div>
      </div>
      {post?.images?.length > 0 && (
        <div className="border-2 border-gray-300 border-b-0">
          <Slide
            transitionDuration={200}
            autoplay={post?.images?.length > 1}
            arrows={post?.images?.length > 1}
          >
            {post.images.map((image) => (
              <div
                key={image[0]}
                onClick={() => handleImageClick(image)}
                className="each-slide-effect"
              >
                <div style={{ backgroundImage: `url(${image[1]})` }}></div>
              </div>
            ))}
          </Slide>
        </div>
      )}
      <div className="flex flex-row p-3 border-2 border-gray-300">
        <div
          className="flex flex-row items-center text-3xl"
          onClick={handleLikeClick}
        >
          <span className="text-lg mr-2">
            {Object.keys(innerPost?.like).length ?? 0}
          </span>
          {userId in innerPost.like ? (
            <AiFillLike className="text-blue-600" size={24} />
          ) : (
            <AiOutlineLike size={24} />
          )}
        </div>
        <div
          className="flex flex-row items-center text-3xl ml-5"
          onClick={handleDislikeClick}
        >
          <span className="text-lg mr-2">
            {Object.keys(innerPost?.disLike).length ?? 0}
          </span>
          {userId in innerPost.disLike ? (
            <AiFillDislike className="text-blue-600" size={24} />
          ) : (
            <AiOutlineDislike size={24} />
          )}
        </div>
      </div>
      {/* image preview */}
      {selectedImage && (
        <Lightbox
          medium={selectedImage[1]}
          alt={selectedImage[0]}
          onClose={closePreview}
        />
      )}
      {showDeleteModal && (
        <DeletePostModal
          setShowDeleteModal={setShowDeleteModal}
          postId={postId}
          setDeleteCount={setDeleteCount}
        />
      )}
    </div>
  );
}

export default Post;
