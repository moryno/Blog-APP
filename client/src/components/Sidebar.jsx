import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import SearchComponent from "./SearchComponent";
import MenuPost from "./MenuPost";
import Categories from "./Categories";
import Popular from "./Popular";

const Sidebar = () => {
  const [searchparams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleFilterChange = (e) => {
    if (searchparams.get("sort") !== e.target.value) {
      setSearchParams({
        ...Object.fromEntries(searchparams.entries()),
        sort: e.target.value,
      });
    }
  };

  const handleCategoryChange = (category) => {
    if (location.pathname === "/posts") {
      if (searchparams.get("category") !== category) {
        setSearchParams({
          ...Object.fromEntries(searchparams.entries()),
          category,
        });
      }
    } else {
      navigate(`/posts?category=${category}`);
    }
  };

  return (
    <div className="px-4 h-max mb-14">
      {location.pathname === "/posts" && (
        <>
          <h1 className="mb-4 text-sm font-medium">Search</h1>
          <SearchComponent />
          <h1 className="mt-8 mb-4 text-sm font-medium">Filter</h1>
          <div className="flex flex-col gap-2 text-sm">
            <label
              htmlFor="latest"
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="sort"
                onChange={handleFilterChange}
                value="newest"
                id="newest"
                className="appearance-none w-4 h-4 border-[1.5px] border-real-700 cursor-pointer rounded-sm checked:bg-real-700"
              />
              Latest
            </label>
            <label
              htmlFor="popular"
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="sort"
                onChange={handleFilterChange}
                value="popular"
                id="popular"
                className="appearance-none w-4 h-4 border-[1.5px] border-real-700 cursor-pointer rounded-sm checked:bg-real-700"
              />
              Most Popular
            </label>
            <label
              htmlFor="trending"
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="sort"
                onChange={handleFilterChange}
                value="trending"
                id="trending"
                className="appearance-none w-4 h-4 border-[1.5px] border-real-700 cursor-pointer rounded-sm checked:bg-real-700"
              />
              Trending
            </label>
            <label
              htmlFor="oldest"
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="sort"
                onChange={handleFilterChange}
                value="oldest"
                id="oldest"
                className="appearance-none w-4 h-4 border-[1.5px] border-real-700 cursor-pointer rounded-sm checked:bg-real-700"
              />
              Oldest
            </label>
          </div>
        </>
      )}
      {/*      MOST POPULAR     */}
      <p className="mt-8 text-gray-500 text-sm font-normal">What&apos;s hot</p>
      <div className="lg:mb-8 sm:py-5 md:py-0 flex gap-2">
        <h1 className="text-lg font-bold tracking-tight text-left text-gray-900 underline underline-offset-8 decoration-teal-700">
          Most Popular
        </h1>
        <div>
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-900 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-700"></span>
          </span>
        </div>
      </div>
      <Popular />

      {/*      CATEGORIES     */}
      <p className="mt-8 text-gray-500 text-sm font-normal">
        Discover by topic
      </p>
      <div className="lg:mb-8 sm:py-5 md:py-0 flex gap-2">
        <h1 className="text-lg font-bold tracking-tight text-left text-gray-900 underline underline-offset-8 decoration-teal-700">
          Categories
        </h1>
      </div>
      <Categories onCategoryChange={handleCategoryChange} />

      {/*      EDITORS PICK     */}
      <p className="mt-8 text-gray-500 text-sm font-normal">
        Chosen by the editor
      </p>
      <div className="lg:mb-8 sm:py-5 md:py-0 flex gap-2">
        <h1 className="text-lg font-bold tracking-tight text-left text-gray-900 underline underline-offset-8 decoration-teal-700">
          Editors Pick
        </h1>
      </div>
      <MenuPost />
    </div>
  );
};

export default Sidebar;
