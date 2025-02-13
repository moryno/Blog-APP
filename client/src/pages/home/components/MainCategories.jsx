import { Link } from "react-router-dom";
import SearchComponent from "../../../components/SearchComponent";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const MainCategories = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`hidden md:flex  rounded-3xl xl:rounded-full p-4 ${
        theme === "light" ? "shadow-lg" : "shadow-2xl"
      } items-center justify-center gap-8`}
    >
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts?category=general"
          className="bg-teal-700 text-white rounded-full px-4 py-2"
        >
          All Posts
        </Link>
        <Link
          to="/posts?category=web-design"
          className="hover:bg-teal-50 rounded-full px-4 py-2"
        >
          Web Design
        </Link>
        <Link
          to="/posts?category=development"
          className="hover:bg-teal-50 rounded-full px-4 py-2"
        >
          Development
        </Link>
        <Link
          to="/posts?category=databases"
          className="hover:bg-teal-50 rounded-full px-4 py-2"
        >
          Databases
        </Link>
        <Link
          to="/posts?category=seo"
          className="hover:bg-teal-50 rounded-full px-4 py-2"
        >
          Search Engines
        </Link>
        <Link
          to="/posts?category=ai"
          className="hover:bg-teal-50 rounded-full px-4 py-2"
        >
          AI
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      <SearchComponent />
    </section>
  );
};

export default MainCategories;
