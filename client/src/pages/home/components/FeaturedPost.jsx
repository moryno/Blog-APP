import { Link } from "react-router-dom";
import moment from "moment";
import Image from "../../../components/Image";
import { useQuery } from "@tanstack/react-query";
import { postService } from "../../../services/post.service";

const FeaturedPost = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["featuredPost"],
    queryFn: () => postService.getFeatured(),
  });

  if (isPending) return <p>Loading...</p>;
  if (!isPending && error) return "An error has occured: " + error.message;

  const posts = data?.posts;
  if (!posts || posts.length === 0) return;

  return (
    <section className="mt-8 flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <Image
          src={posts[0].cover || "featured1.jpeg"}
          alt={posts[0].title}
          width="895"
          className="rounded-3xl object-cover"
        />
        <div className="flex items-center gap-4">
          <h1 className="flex items-center gap-4">01.</h1>
          <Link
            to={`/posts?category=${posts[0].category}`}
            className="text-blue-800 lg:text-lg"
          >
            {posts[0].category}
          </Link>
          <span className="text-gray-500">
            {moment(posts[0].createdAt).fromNow()}
          </span>
        </div>
        <Link
          to={`/${posts[0].slug}`}
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          {posts[0].title}
        </Link>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {posts[1] && (
          <div className="lg:h-1/3 flex justify-between gap-4">
            <div className=" w-1/3 aspect-video">
              <Image
                src={posts[1].cover || "featured2.jpeg"}
                alt={posts[1].title}
                className="rounded-3xl object-cover w-full h-full"
                width="298"
              />
            </div>

            <div className="w-2/3">
              <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                <h1 className="font-semibold">02.</h1>
                <Link
                  to={`/posts?category=${posts[1].category}`}
                  className="text-blue-800"
                >
                  {posts[1].category}
                </Link>
                <span className="text-gray-500 text-sm">
                  {" "}
                  {moment(posts[1].createdAt).fromNow()}
                </span>
              </div>
              <Link
                to={`/${posts[1].slug}`}
                className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
              >
                {posts[1].title}
              </Link>
            </div>
          </div>
        )}
        {posts[2] && (
          <div className="lg:h-1/3 flex justify-between gap-4">
            <div className=" w-1/3 aspect-video">
              <Image
                src={posts[2].cover || "featured3.jpeg"}
                alt={posts[2].title}
                className="rounded-3xl object-cover w-full h-full"
                width="298"
              />
            </div>

            <div className="w-2/3">
              <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                <h1 className="font-semibold">03.</h1>
                <Link
                  to={`/posts?category=${posts[2].category}`}
                  className="text-blue-800"
                >
                  {posts[2].category}
                </Link>
                <span className="text-gray-500 text-sm">
                  {" "}
                  {moment(posts[2].createdAt).fromNow()}
                </span>
              </div>
              <Link
                to={`/${posts[2].slug}`}
                className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
              >
                {posts[2].title}
              </Link>
            </div>
          </div>
        )}
        {posts[3] && (
          <div className="lg:h-1/3 flex justify-between gap-4">
            <div className=" w-1/3 aspect-video">
              <Image
                src={posts[3].cover || "featured4.jpeg"}
                alt={posts[3].title}
                className="rounded-3xl object-cover w-full h-full"
                width="298"
              />
            </div>

            <div className="w-2/3">
              <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                <h1 className="font-semibold">04.</h1>
                <Link
                  to={`/posts?category=${posts[3].category}`}
                  className="text-blue-800"
                >
                  {posts[3].category}
                </Link>
                <span className="text-gray-500 text-sm">
                  {" "}
                  {moment(posts[3].createdAt).fromNow()}
                </span>
              </div>
              <Link
                to={`/${posts[3].slug}`}
                className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
              >
                {posts[3].title}
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedPost;
