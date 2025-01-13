import { Link } from "react-router-dom";
import Image from "./Image";
import { postService } from "../services/post.service";
import { useQuery } from "@tanstack/react-query";
import { getCategoryName } from "../helpers/common";
import moment from "moment";

const MenuPost = ({ featured = false, category = null }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["popularPost"],
    queryFn: () =>
      featured
        ? postService.getFeatured()
        : postService.getPosts({
            limit: 4,
            category,
          }),
  });
  if (isPending) return <p>Loading...</p>;
  if (!isPending && error) return "An error has occured: " + error.message;

  const posts = data?.posts || [];

  return (
    <div className="flex flex-col gap-8 mt-5 mb-14">
      {posts.map((post) => {
        const COLORS = {
          seo: "#775aec",
          general: "#ff7857",
          "web-design": "#ffb14f",
          development: "#7fb881",
          ai: "#789cff",
          databases: "#ff7887",
        };
        return (
          <div key={post._id} className="flex items-center gap-5">
            <div className="w-1/5 aspect-square relative">
              <Image
                src={post.cover || "postImg.jpeg"}
                alt={post.title}
                className="w-full h-full rounded-full border border-gray-200 object-cover"
              />
            </div>
            <div className="w-4/5 flex flex-col gap-1">
              <Link
                to={`/posts?category=${post.category}`}
                className={`py-[3px] px-2 text-xs rounded-xl text-white bg-[${
                  COLORS[post.category]
                }] w-fit`}
              >
                {getCategoryName(post.category)}
              </Link>
              <Link to={`/${post.slug}`} className="text-lg font-medium">
                {post.title}
              </Link>
              <Link
                to={`/posts?author=${post.author.username}`}
                className="text-xs flex items-center gap-1"
              >
                <span className="font-medium text-gray-600 text-[13px] underline underline-offset-2">
                  {post.author.username}
                </span>
                <span>-</span>
                <span className="text-gray-700">
                  {moment(post.createdAt).format("D-MM-YYYY")}
                </span>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuPost;
