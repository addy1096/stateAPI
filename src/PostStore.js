import React, { useState } from "react";

import { createContext } from "use-context-selector";

const PostStore = createContext();

export const PostStoreProvider = ({ children }) => {
  const [postList, setPostList] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);

  return (
    <PostStore.Provider
      value={{ postList, setPostList, setSelectedPostId, selectedPostId }}
    >
      {children}
    </PostStore.Provider>
  );
};

export default PostStore;
