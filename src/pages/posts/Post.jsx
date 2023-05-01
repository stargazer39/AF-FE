import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./post.css";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import useDebounce from "../../hook/debounce";

function Post({ post }) {
  const [innerPost, setInnerPost] = useState(post);
  const [seeMore, setSeeMore] = useState(false);
  const debouncedValue = useDebounce(innerPost || {}, 1000);
  const [changed, setChanged] = useState(false);
  const postId = post._id; // Replace with the ID of the post you want to like
  const userId = "4"; // Replace with the ID of the user who is liking the post

  useEffect(() => {
    // update post
    if (Object.keys(debouncedValue).length > 0 && changed) {
      fetch(`http://localhost:3002/api/post/posts/${postId}`, {
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
  }

  function handleDislikeClick() {
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
  }

  return (
    <div className="mt-14 ">
      <div className="border-2 border-gray-300 border-b-0 p-3">
        <div className="mb-4 flex flex-row items-center">
          <div className="h-12 w-12 border-2 border-gray-300 rounded-full mr-5 "></div>
          <span className="font-bold">Nisal Sashmitha</span>
        </div>
        <div className={`w-full text-lg ${seeMore ? "" : "line-clamp-2"}`}>
          {post.contentText}{" "}
        </div>
        <div
          className="cursor-pointer text-lg font-bold"
          onClick={() => setSeeMore((seeMore) => !seeMore)}
        >
          {seeMore ? "see less..." : "See more..."}
        </div>
      </div>
      <div className="border-2 border-gray-300 border-b-0">
        <Slide transitionDuration={200}>
          {post.images.map((image) => (
            <div className="each-slide-effect">
              <div style={{ backgroundImage: `url(${image[1]})` }}></div>
            </div>
          ))}
        </Slide>
      </div>
      <div className="flex flex-row p-3 border-2 border-gray-300">
        <div
          className="flex flex-row items-center text-3xl"
          onClick={handleLikeClick}
        >
          <span className="text-lg mr-2">
            {Object.keys(innerPost?.like).length ?? 0}
          </span>
          <AiOutlineLike size={24} />
        </div>
        <div
          className="flex flex-row items-center text-3xl ml-5"
          onClick={handleDislikeClick}
        >
          <span className="text-lg mr-2">
            {Object.keys(innerPost?.disLike).length ?? 0}
          </span>
          <AiOutlineDislike size={24} />
        </div>
      </div>
    </div>
  );
}

export default Post;
