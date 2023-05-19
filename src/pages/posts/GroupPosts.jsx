import React, { useEffect, useState } from "react";
import Post from "./Post";
import PostSearch from "./PostSearch";
import axios from "axios";
import { BsPen } from "react-icons/bs";
import { useNavigate, useParams } from "react-router";
import gg from "../../images/noData.png";
import { API_ENDPOINT } from "../../config";

function GroupPosts() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleteCount, setDeleteCount] = useState(0);
  const { _id: groupId } = useParams();

  useEffect(() => {
    if (!!groupId) {
      setLoading(true);
      fetch(`${API_ENDPOINT}/api/post/groups/${groupId}/posts`)
        .then((response) => response.json())
        .then((data) => setPosts(data))
        .catch((error) => console.error(error))
        .finally(() => {
          setLoading(false);
        });
    }
  }, [groupId, deleteCount]);

  function searchPosts(searchValue) {
    setLoading(true);
    const tempSearchObj = { groupId };
    axios
      .get(`${API_ENDPOINT}/api/post/posts/search`, {
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
        <div
          onClick={() => navigate(`/addPost/${groupId}`)}
          className="flex flex-row cursor-pointer self-end w-56 justify-center mb-8 px-4 py-2 rounded-md mr-2 text-white bg-blue-500 hover:bg-blue-600 hover:scale-110 ease-in duration-100 focus:outline-none focus:bg-blue-700"
        >
          Add a new post <BsPen className="h-6 w-6 ml-5" />
        </div>

        <PostSearch searchPosts={searchPosts} />
        {posts?.length > 0 ? (
          posts.map((post) => {
            return (
              <Post
                key={post._id}
                post={post}
                setDeleteCount={setDeleteCount}
              />
            );
          })
        ) : loading ? (
          <div className="flex flex-row w-full justify-center">loading...</div>
        ) : (
          <div className="flex mt-24 mb-48 flex-col items-center w-full">
            <h1 className="text-2xl text-blue-600">
              Be the first to add a post
            </h1>
            <img src={gg} width={400} alt="no Data" />
          </div>
        )}
      </div>
    </div>
  );
}

export default GroupPosts;
