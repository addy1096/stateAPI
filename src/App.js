import React from "react";
import "./styles.css";

import PostList from "./PostList";
import PostDetail from "./PostDetail";
import { PostStoreProvider } from "./PostStore";

export default function App() {
  return (
    <div className="App">
      <PostStoreProvider>
        <PostList />
        <PostDetail />
      </PostStoreProvider>
    </div>
  );
}
