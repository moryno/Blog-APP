import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { postService } from "../services/post.service";
import { getCategoryName } from "../helpers/common";
import moment from "moment";
import SkeletonComponent from "../lib/Skeleton/Skeleton";

const Popular = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["popularPost"],
    queryFn: () =>
      postService.getPosts({
        limit: 5,
        sort: "popular",
      }),
  });

  if (!isPending && error) return "An error has occured: " + error.message;

  const popularPosts = data?.posts || [];

  return (
    <div className="flex flex-col gap-2 mt-5 mb-14">
      {isPending &&
        Array(5)
          .fill(0)
          .map((i) => <SkeletonComponent key={i} />)}
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
              <span className="font-medium text-[13px] underline underline-offset-2">
                {post.author.username}
              </span>
              <span>-</span>
              <span>{moment(post.createdAt).format("D-MM-YYYY")}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Popular;
