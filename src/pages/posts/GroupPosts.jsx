import React, { useEffect, useState } from "react";
import Post from "./Post";
import HeaderLikeThing from "./HeaderLikeThing";
import PostSearch from "./PostSearch";
import axios from "axios";
import { useSelector } from "react-redux";

function GroupPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const group = useSelector((state) => state.group).selectedGroup;
  const groupId = group?._id;

  useEffect(() => {
    if (!!groupId) {
      setLoading(true);
      fetch(`http://localhost:3002/api/post/groups/${groupId}/posts`)
        .then((response) => response.json())
        .then((data) => setPosts(data))
        .catch((error) => console.error(error))
        .finally(() => {
          setLoading(false);
        });
    }
  }, [groupId]);

  function searchPosts(searchValue) {
    setLoading(true);
    const tempSearchObj = { groupId };
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
        setLoading(false);
      });
  }

  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col w-[600px] self-center">
        <PostSearch searchPosts={searchPosts} />
        {posts?.length > 0 ? (
          posts.map((post) => {
            return <Post key={post._id} post={post} />;
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

export default GroupPosts;
