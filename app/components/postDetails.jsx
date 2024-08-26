import React from "react";
import { Suspense } from "react";
export default async function PostDetailes({ postId }) {
  // from url 
  //copy
//   const postId = params.postId;

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  const post = await response.json();
  //   console.log("===================", params.postId);
  return (
    <div>
        
      <div
        style={{
          width: "100%",
          background: "white",
          padding: "10px",
          borderRadius: "10px",
          color: "black",
          marginTop: "20px",
        }}
      >
        <h1>{post.title}</h1>

        <hr />
        <p>{post.body}</p>
      </div>
    </div>
  );
}
