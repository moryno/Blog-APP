import { Link } from "react-router-dom";
import Image from "../../../components/Image";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      <div className="md:hidden xl:block xl:w-1/3">
        <Image
          src="postImg.jpeg"
          alt="This is post cover"
          width="735"
          className="rounded-2xl object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Author</span>
          <Link className="text-blue-800">John Doe</Link>
          <span>on</span>
          <Link className="text-blue-800">Web Design</Link>
          <span>10 days ago</span>
        </div>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
        </p>
        <Link to="/text" className="underline text-blue-800 text-sm"></Link>
      </div>
    </div>
  );
};

export default PostListItem;
