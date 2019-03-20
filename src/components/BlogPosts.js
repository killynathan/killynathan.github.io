import React from "react";
import blogPosts from "../blogPosts.json";

const BlogPosts = () => {
  console.log(blogPosts, "!!");
  return (
    <div style={{ marginTop: 10, height: 800 }}>
      {blogPosts.map(blogPost => (
        <div style={{ marginBottom: 16 }}>
          <p
            style={{
              color: "rgb(215, 218, 220)",
              fontSize: 18,
              fontWeight: "bold",
              display: "inline-block",
              marginRight: 10,
              marginBottom: 5
            }}
          >
            {blogPost.title}
          </p>
          <p
            style={{
              color: "rgb(215, 218, 220)",
              fontSize: 14,
              color: "rgb(129, 131, 132)",
              display: "inline-block"
            }}
          >
            {blogPost.date}
          </p>
          <p style={{ color: "rgb(215, 218, 220)" }}>{blogPost.body}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
