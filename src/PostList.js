import React, { useContext, useEffect } from "react";
import { useContextSelector } from "use-context-selector";

import PostStore from "./PostStore";

const PostList = () => {
  // const data = useContext(PostStore);
  const postList = useContextSelector(PostStore, (context) => {
    return context.postList;
  });

  const setPostList = useContextSelector(PostStore, (context) => {
    return context.setPostList;
  });

  const setSelectedPostId = useContextSelector(PostStore, (context) => {
    return context.setSelectedPostId;
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((response) => {
        setPostList(response);
      });
  }, []);

  console.log("PostList");

  return (
    <ul>
      {postList.map((postItem) => {
        return (
          <li
            onClick={() => {
              setSelectedPostId(postItem.id);
            }}
            key={postItem.id}
          >
            {postItem.title}{" "}
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;
