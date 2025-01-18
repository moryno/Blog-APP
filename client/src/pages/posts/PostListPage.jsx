import { useState } from "react";
import PostList from "./components/PostList";
import { useSearchParams } from "react-router-dom";
import { getCategoryName } from "../../helpers/common";
import Sidebar from "../../components/Sidebar";

const PostListPage = () => {
  const [open, setopen] = useState(false);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <main>
      <h1 className="mb-8 text-4xl font-bold tracking-tight">
        {category ? getCategoryName(category) : "Development Blog"}
      </h1>
      <button
        onClick={() => setopen((prev) => !prev)}
        className="bg-teal-700 text-sm text-white px-4 py-2 rounded-2xl mb-4 md:hidden"
      >
        {open ? "Close" : "Filter or Search"}
      </button>
      <section className="flex flex-col-reverse md:flex-row gap-8">
        <div className="w-full md:w-[70%] 3xl:w-[75%]">
          <PostList />
        </div>
        <div
          className={`${
            open ? "block" : "hidden"
          } md:block w-[30%] 3xl:w-[25%]`}
        >
          <Sidebar />
        </div>
      </section>
    </main>
  );
};

export default PostListPage;
