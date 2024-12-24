import { Link } from "react-router-dom";
import SearchComponent from "../../../components/SearchComponent";

const FilterComponent = () => {
  return (
    <div className="px-4 h-max sticky top-8">
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
            value="newest"
            id="newest"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800"
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
            value="popular"
            id="popular"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800"
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
            value="trending"
            id="trending"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800"
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
            value="oldest"
            id="oldest"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800"
          />
          Oldest
        </label>
      </div>
      <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
      <div className="flex flex-col gap-2 text-sm">
        <Link to="" className="underline">
          All
        </Link>
        <Link to="" className="underline">
          Web Design
        </Link>
        <Link to="" className="underline">
          Development
        </Link>
        <Link to="" className="underline">
          Databases
        </Link>
        <Link to="" className="underline">
          Search Engines
        </Link>
        <Link to="" className="underline">
          Marketing
        </Link>
      </div>
    </div>
  );
};

export default FilterComponent;
