import React from "react";
import { Suspense } from "react";
import PostDetailes from "../../components/postDetails";
export default async function page({ params }) {
  // from url
  const postId = params.postId;
  const loadingJSX = (
    <div>
      <h1>Loading</h1>
    </div>
  );
  //   console.log("===================", params.postId);
  return (
    <div style={{ padding: "20xp" }}>

      
      <h1>Post Detailes</h1>

      <Suspense fallback={loadingJSX}>
        <PostDetailes postId={postId} />
      </Suspense>
    </div>
  );
}
