import { Link } from "react-router-dom";
import Image from "./Image";

const MenuPost = ({ featured = true, category = null }) => {
  return (
    <div className="flex flex-col gap-8 mt-5 mb-14">
      <div className="flex items-center gap-5">
        <div className="w-1/5 aspect-square relative">
          <Image
            src="postImg.jpeg"
            alt="cover"
            className="w-full h-full rounded-full border border-gray-200 object-cover"
          />
        </div>
        <div className="w-4/5 flex flex-col gap-1">
          <span className="py-[3px] px-2 text-xs rounded-xl text-white bg-[#ff7857] w-fit">
            General
          </span>
          <Link to="" className="text-lg font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Link>
          <Link className="text-xs flex items-center gap-1">
            <span className="font-medium text-gray-600 text-[13px]">
              Joseph Ownen
            </span>
            <span>-</span>
            <span>10.08.2025</span>
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="w-1/5 aspect-square relative">
          <Image
            src="postImg.jpeg"
            alt=""
            className="w-full h-full rounded-full border border-gray-200 object-cover"
          />
        </div>
        <div className="w-4/5 flex flex-col gap-1">
          <span className="py-[3px] px-2 text-xs rounded-xl text-white bg-[#ffb14f] w-fit">
            Web Design
          </span>
          <Link to="" className="text-lg font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Link>
          <Link className="text-xs flex items-center gap-1">
            <span className="font-medium text-gray-600 text-[13px]">
              Joseph Ownen
            </span>
            <span>-</span>
            <span>10.08.2025</span>
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="w-1/5 aspect-square relative">
          <Image
            src="postImg.jpeg"
            alt=""
            className="w-full h-full rounded-full border border-gray-200 object-cover"
          />
        </div>
        <div className="w-4/5 flex flex-col gap-1">
          <span className="py-[3px] px-2 text-xs rounded-xl text-white bg-[#7fb881] w-fit">
            Development
          </span>
          <Link to="" className="text-lg font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Link>
          <Link className="text-xs flex items-center gap-1">
            <span className="font-medium text-gray-600 text-[13px]">
              Joseph Ownen
            </span>
            <span>-</span>
            <span>10.08.2025</span>
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="w-1/5 aspect-square relative">
          <Image
            src="postImg.jpeg"
            alt=""
            className="w-full h-full rounded-full border border-gray-200 object-cover"
          />
        </div>
        <div className="w-4/5 flex flex-col gap-1">
          <span className="py-[3px] px-2 text-xs rounded-xl text-white bg-[#ff7887] w-fit">
            Databases
          </span>
          <Link to="" className="text-lg font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Link>
          <Link className="text-xs flex items-center gap-1">
            <span className="font-medium text-gray-600 text-[13px]">
              Joseph Ownen
            </span>
            <span>-</span>
            <span>10.08.2025</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuPost;
