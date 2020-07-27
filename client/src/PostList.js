import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

function PostList() {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const data = await axios
      .get("http://localhost:4002/posts")
      .then((res) => res.data);

    setPosts(data);
    // console.log(data);
     
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        key={post.id}
        className="card m-2"
        style={{
          width: "30%",
          marginBottom: "20px",
        }}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
           
          <CommentList comments = {post.comments}/>
          <CommentCreate postId={post.id}/>
        </div>
      </div>
    );
  });

  return <div className="d-flex flex-row flex-wrap justify-content-start">
      {renderedPosts}
  </div>;
}

export default PostList;
