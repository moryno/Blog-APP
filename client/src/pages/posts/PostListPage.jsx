import { useState } from "react";
import FilterComponent from "./components/FilterComponent";
import PostList from "./components/PostList";

const PostListPage = () => {
  const [open, setopen] = useState(false);

  return (
    <main>
      <h1 className="mb-8 text-2xl">Development Blog</h1>
      <button
        onClick={() => setopen((prev) => !prev)}
        className="bg-blue-800 text-sm text-white px-4 py-2 rounded-2xl mb-4 md:hidden"
      >
        {open ? "Close" : "Filter or Search"}
      </button>
      <section className="flex flex-col-reverse md:flex-row gap-8">
        <div className="">
          <PostList />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <FilterComponent />
        </div>
      </section>
    </main>
  );
};

export default PostListPage;
