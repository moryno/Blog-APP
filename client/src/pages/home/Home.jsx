import { useContext } from "react";
import { Link } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import MainCategories from "./components/MainCategories";
import FeaturedPost from "./components/FeaturedPost";
import PostList from "../posts/components/PostList";
import Sidebar from "../../components/Sidebar";
import { ThemeContext } from "../../context/ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main className="mt-4 flex flex-col gap-4">
      <section className="flex gap-2 items-center">
        <Link to="/">Home</Link>
        <BsDot />
        <span className="text-teal-700">Blogs and Articles</span>
      </section>
      <section className="flex items-center justify-between">
        <div>
          <h1
            className={`text-[${
              theme === "light" ? "#1f2937" : "#ddd"
            }] text-2xl md:text-5xl lg:text-6xl font-bold`}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h1>
          <p className="mt-8 text-base md:text-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s
          </p>
        </div>
        <Link to="/compose" className="hidden md:block relative">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="text-lg tracking-widest animate-spin animatedButton"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m-75, 0 a 75, 75 0 1, 1 150, 0 a 75, 75 0 1, 1 -150, 0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write your story .
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your ideas .
              </textPath>
            </text>
          </svg>
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto h-20 w-20 bg-teal-700 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </section>
      <MainCategories />
      <FeaturedPost />
      <section className="flex gap-8">
        <section className="w-full md:w-[70%] 3xl:w-[75%]">
          <h1 className="my-8 text-3xl font-bold tracking-tight text-gray-900">
            Recent Posts
          </h1>
          <PostList />
        </section>
        <section className="hidden md:block w-[30%] 3xl:w-[25%]">
          <Sidebar />
        </section>
      </section>
    </main>
  );
};

export default Home;
