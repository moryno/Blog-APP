import { Link, useSearchParams } from "react-router-dom";
import SearchComponent from "./SearchComponent";
import MenuPost from "./MenuPost";

const Sidebar = () => {
  const [searchparams, setSearchParams] = useSearchParams();

  const handleFilterChange = (e) => {
    if (searchparams.get("sort") !== e.target.value) {
      setSearchParams({
        ...Object.fromEntries(searchparams.entries()),
        sort: e.target.value,
      });
    }
  };

  const handleCategoryChange = (category) => {
    if (searchparams.get("category") !== category) {
      setSearchParams({
        ...Object.fromEntries(searchparams.entries()),
        category,
      });
    }
  };
  return (
    <div className="px-4 h-max sticky top-8">
      <h1 className="mb-4 my-8  text-sm font-medium">Search</h1>
      <SearchComponent />
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
      <div className="flex flex-col gap-2 mt-5 mb-14">
        <div className="flex flex-col gap-2">
          <Link
            to=""
            className="px-2 py-1 w-fit text-xs text-white rounded-xl bg-[#ff7857]"
          >
            General
          </Link>
          <Link to="" className=" text-lg font-medium">
            A Journey Through Bohemian Beauty: Exploring the streets of Prague
          </Link>
          <Link className="text-xs flex items-center gap-1">
            <span className="font-medium text-gray-600 text-[13px]">
              Joseph Ownen
            </span>
            <span>-</span>
            <span className="text-gray-700">10.08.2025</span>
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            to=""
            className="px-2 py-1 w-fit text-xs text-white rounded-xl bg-[#ffb14f]"
          >
            Web Design
          </Link>
          <Link to="" className=" font-medium">
            A Journey Through Bohemian Beauty: Exploring the streets of Prague
          </Link>
          <Link className="text-xs flex items-center gap-1">
            <span className="font-medium text-gray-600 text-[13px]">
              Joseph Ownen
            </span>
            <span>-</span>
            <span>10.08.2025</span>
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            to=""
            className="px-2 py-1 w-fit text-xs text-white rounded-xl bg-[#7fb881]"
          >
            Development
          </Link>
          <Link to="" className=" font-medium">
            A Journey Through Bohemian Beauty: Exploring the streets of Prague
          </Link>
          <Link className="text-xs flex items-center gap-1">
            <span className="font-medium text-gray-600 text-[13px]">
              Joseph Ownen
            </span>
            <span>-</span>
            <span>10.08.2025</span>
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            to=""
            className="px-2 py-1 w-fit text-xs text-white rounded-xl bg-[#ff7887]"
          >
            Databases
          </Link>
          <Link className=" font-medium">
            A Journey Through Bohemian Beauty: Exploring the streets of Prague
          </Link>
          <Link className="text-xs flex items-center gap-1">
            <span className="font-medium text-gray-600 text-[13px]">
              Joseph Ownen
            </span>
            <span>-</span>
            <span>10.08.2025</span>
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            to=""
            className="px-2 py-1 w-fit text-xs text-white rounded-xl bg-[#775aec]"
          >
            Search Engines
          </Link>
          <Link to="" className=" font-medium">
            A Journey Through Bohemian Beauty: Exploring the streets of Prague
          </Link>
          <Link className="text-xs flex items-center gap-1">
            <span className="font-medium text-gray-600 text-[13px]">
              Joseph Ownen
            </span>
            <span>-</span>
            <span>10.08.2025</span>
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            to=""
            className="px-2 py-1 w-fit text-xs text-white rounded-xl bg-[#789cff]"
          >
            AI
          </Link>
          <Link to="" className=" font-medium">
            A Journey Through Bohemian Beauty: Exploring the streets of Prague
          </Link>
          <Link className="text-xs flex items-center gap-1">
            <span className="font-medium text-gray-600 text-[13px]">
              Joseph Ownen
            </span>
            <span>-</span>
            <span>10.08.2025</span>
          </Link>
        </div>
      </div>
      <p className="mt-8 text-gray-500 text-sm font-normal">
        Discover by topic
      </p>
      <div className="lg:mb-8 sm:py-5 md:py-0 flex gap-2">
        <h1 className="text-lg font-bold tracking-tight text-left text-gray-900 underline underline-offset-8 decoration-teal-700">
          Categories
        </h1>
      </div>
      <div className="flex flex-wrap gap-5 mt-5 mb-14">
        <Link
          to="/blog?cat=style"
          className="py-2 px-6 rounded-xl text-sm bg-[#ff7857] text-white w-fit"
        >
          General
        </Link>
        <Link
          to="/blog"
          className="py-2 px-6 rounded-xl text-sm bg-[#ffb14f] text-white w-fit"
        >
          Web Design
        </Link>

        <Link
          to="/blog"
          className="py-2 px-6 rounded-xl text-sm bg-[#ff7887] text-white w-fit"
        >
          Databases
        </Link>
        <Link
          to="/blog"
          className="py-2 px-6 rounded-xl text-sm bg-[#775aec] text-white w-fit"
        >
          Search Engines
        </Link>
        <Link
          to="/blog"
          className="py-2 px-6 rounded-xl text-sm bg-[#789cff] text-white w-fit"
        >
          AI
        </Link>
        <Link
          to="/blog"
          className="py-2 px-6 rounded-xl text-sm bg-[#7fb881] text-white w-fit"
        >
          Development
        </Link>
      </div>
      <p className="mt-8 text-gray-500 text-sm font-normal">
        Chosen by the editor
      </p>
      <div className="lg:mb-8 sm:py-5 md:py-0 flex gap-2">
        <h1 className="text-lg font-bold tracking-tight text-left text-gray-900 underline underline-offset-8 decoration-teal-700">
          Editors Pick
        </h1>
      </div>
      <MenuPost />
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
    </div>
  );
};

export default Sidebar;
