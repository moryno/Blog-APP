import { Link, useNavigate, useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";

import Image from "../../components/Image";
import PostMenuActions from "./components/PostMenuActions";
import Comments from "./components/Comments";
import { postService } from "../../services/post.service";
import MenuPost from "../../components/MenuPost";
import Categories from "../../components/Categories";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Loader from "../../lib/Loader";

const SinglePost = () => {
  const { slug } = useParams();
  const { theme } = useContext(ThemeContext);

  const navigate = useNavigate();

  const { isPending, error, data } = useQuery({
    queryKey: [`post-${slug}`, slug],
    queryFn: () => postService.getPost(slug),
  });

  const handleCategoryChange = (category) => {
    navigate(`/posts?category=${category}`);
  };

  if (isPending) return <Loader />;
  if (!isPending && error) return "An error has occured: " + error.message;
  if (!data) return "Post not found.";

  return (
    <main className="flex flex-col gap-8">
      <section className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            {data.title}
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Author</span>
            <Link className="text-teal-700">{data.author.username}</Link>
            <span>on</span>
            <Link className="text-teal-700">{data.category}</Link>
            <span>{moment(data.createdAt).fromNow()}</span>
          </div>
          <p className="text-gray-500 font-medium">{data.description}</p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image
            src={data.cover || "postImg.jpeg"}
            alt={data.title}
            width="600"
            className="rounded-lg shadow-md"
          />
        </div>
      </section>
      <section className="flex flex-col md:flex-row gap-8">
        <div className="lg:text-lg flex flex-col gap-6 text-justify w-[70%] 3xl:w-[75%]">
          <div
            className={`prose lg:prose-lg sm:px-0 md:px-0 lg:px-0 ${
              theme === "dark"
                ? "prose-dark bg-dark text-dark"
                : "bg-light text-light"
            }`}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data?.content),
            }}
          />
          <div className="flex justify-start">
            <button
              onClick={() => navigate(-1)}
              className="sm:text-sm cursor-pointer bg-teal-700 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded flex items-center"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
              </svg>{" "}
              &nbsp; Back
            </button>
          </div>
          <Comments postId={data._id} />
        </div>
        <div className="px-4 h-max sticky top-8 w-[30%] 3xl:w-[25%]">
          {/*    SIDE PANEL   */}
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Image
                src={data.author.profileImage || "userImg.jpeg"}
                alt={data.author.username}
                width="48"
                height="48"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex flex-col gap-1">
                <Link to="/" className="text-[13px] font-medium">
                  {data.author.username}
                </Link>
                <p className="text-xs text-gray-500 font-medium">
                  {moment(data.createdAt).format("D MMMM YYYY")}
                </p>
              </div>
            </div>
          </div>
          <PostMenuActions post={data} />

          {/*      EDITORS PICK     */}
          <p className="mt-8 text-gray-500 text-sm font-normal">
            Similar topic
          </p>
          <div className="lg:mb-8 sm:py-5 md:py-0 flex gap-2">
            <h1 className="text-lg font-bold tracking-tight text-left text-gray-900 underline underline-offset-8 decoration-teal-700">
              Related Posts
            </h1>
          </div>
          <MenuPost category={data.category} />

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
        </div>
      </section>
    </main>
  );
};

export default SinglePost;
