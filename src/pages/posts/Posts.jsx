import React, { useEffect, useState } from "react";
import Post from "./Post";
import HeaderLikeThing from "./HeaderLikeThing";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userId, setUserID] = useState("1");

  useEffect(() => {
    fetch(`http://localhost:3002/api/post/users/${userId}/posts`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, [userId]);

  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col w-[600px] self-center">
        <HeaderLikeThing />
        {posts?.length > 0 ? (
          posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })
        ) : { loading } ? (
          <div>loading...</div>
        ) : (
          <div>no posts</div>
        )}
      </div>
    </div>
  );
}

export default Posts;
