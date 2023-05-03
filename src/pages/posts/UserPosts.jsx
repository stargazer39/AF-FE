import React, { useEffect, useState } from "react";
import Post from "./Post";
import PostSearch from "./PostSearch";
import axios from "axios";
import { useSelector } from "react-redux";

function UserPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user).selectedUser;
  const userId = user?._id;

  useEffect(() => {
    if (userId) {
      setLoading(true);
      fetch(`http://localhost:3002/api/post/users/${userId}/posts`)
        .then((response) => response.json())
        .then((data) => setPosts(data))
        .catch((error) => console.error(error))
        .finally(() => {
          setLoading(false);
        });
    }
  }, [userId]);

  function searchPosts(searchValue) {
    setLoading(true);
    const tempSearchObj = { userId: user._id };
    axios
      .get("http://localhost:3002/api/post/posts/search", {
        params: { searchValue, tempSearchObj },
      })
      .then((response) => {
        setPosts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => {
        console.log("finally");
        setLoading(false);
      });
  }

  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col w-[600px] self-center">
        <PostSearch searchPosts={searchPosts} />
        {posts?.length > 0 ? (
          posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })
        ) : loading ? (
          <div className="flex flex-row w-full justify-center">loading...</div>
        ) : (
          <div className="flex flex-row w-full justify-center">no posts</div>
        )}
      </div>
    </div>
  );
}

export default UserPosts;
