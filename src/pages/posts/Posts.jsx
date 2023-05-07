import React, { useEffect, useState } from "react";
import Post from "./Post";
import HeaderLikeThing from "./HeaderLikeThing";
import { API_ENDPOINT } from "../../config";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userId, setUserID] = useState("1");
  const [groupId, setGroupId] = useState("1");

  useEffect(() => {
    fetch(`${API_ENDPOINT}/api/post/groups/${groupId}/posts`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, [groupId]);

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
