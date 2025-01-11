import { Link } from "react-router-dom";
import moment from "moment";
import Image from "../../../components/Image";

const PostListItem = ({ post }) => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-8">
      <div className="md:hidden xl:block xl:w-1/3">
        <Image
          src={post.cover || "postImg.jpeg"}
          alt={post.title || "This is post cover"}
          width="735"
          className="rounded-lg shadow-md object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to={`/${post.slug}`} className="text-4xl font-semibold">
          {post.title}
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Author</span>
          <Link
            to={`/posts?author=${post.author.username}`}
            className="text-teal-700"
          >
            {post.author.username}
          </Link>
          <span>on</span>
          <Link
            to={`/posts?category=${post.category}`}
            className="text-teal-700 capitalize"
          >
            {post.category}
          </Link>
          <span>{moment(post.createdAt).fromNow()}</span>
        </div>
        <p>{post.description}</p>
        <Link to={`/${post.slug}`} className="underline text-teal-700 text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
