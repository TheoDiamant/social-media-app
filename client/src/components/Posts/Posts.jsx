import "./Post.scss";
import Post from "../Post/Post";
import { useQuery } from "@tanstack/react-query";
import axios from "axios"
import { makeRequest } from "../../axios";

const Posts = () => {
  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get("/posts").then(res => {
      return res.data
    })
  );

  return (
    <div className="posts">
      {error ? "Something went wrong" : (isLoading ? "loading..." : data.map((post) => (
        <Post post={post} key={post.id} />
      )))}
    </div>
  );
};

export default Posts;
