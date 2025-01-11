import { useState } from "react";
import FilterComponent from "./components/FilterComponent";
import PostList from "./components/PostList";
import { useSearchParams } from "react-router-dom";
import { getCategoryName } from "../../helpers/common";

const PostListPage = () => {
  const [open, setopen] = useState(false);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <main>
      <h1 className="mb-8 text-4xl font-bold tracking-tight text-gray-900">
        {category ? getCategoryName(category) : "Development Blog"}
      </h1>
      <button
        onClick={() => setopen((prev) => !prev)}
        className="bg-teal-700 text-sm text-white px-4 py-2 rounded-2xl mb-4 md:hidden"
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
