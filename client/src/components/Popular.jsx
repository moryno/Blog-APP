import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { postService } from "../services/post.service";
import { getCategoryName } from "../helpers/common";
import moment from "moment";

const Popular = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["popularPost"],
    queryFn: () =>
      postService.getPosts({
        limit: 5,
        sort: "popular",
      }),
  });
  if (isPending) return <p>Loading...</p>;
  if (!isPending && error) return "An error has occured: " + error.message;

  const popularPosts = data?.posts || [];

  return (
    <div className="flex flex-col gap-2 mt-5 mb-14">
      {popularPosts.map((post) => {
        const COLORS = {
          seo: "#775aec",
          general: "#ff7857",
          "web-design": "#ffb14f",
          development: "#7fb881",
          ai: "#789cff",
          databases: "#ff7887",
        };
        return (
          <div key={post._id} className="flex flex-col gap-2">
            <Link
              to={`/posts?category=${post.category}`}
              className={`px-2 py-1 w-fit text-xs text-white rounded-xl bg-[${
                COLORS[post.category]
              }]`}
            >
              {getCategoryName(post.category)}
            </Link>
            <Link to={`/${post.slug}`} className=" text-lg font-medium">
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
        );
      })}
    </div>
  );
};

export default Popular;
