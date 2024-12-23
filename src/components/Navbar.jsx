import { useState } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import Image from "./Image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image
          src="logo.png"
          className="w-8 h-8"
          alt="logo"
          width={32}
          height={32}
        />
        <span>spikelogo</span>
      </Link>
      <div className="md:hidden">
        <div
          className="cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <IoClose size={22} /> : <MdMenu size={22} />}
        </div>
        <div
          className={`w-full h-screen flex flex-col gap-8 font-medium text-lg items-center justify-center absolute top-16 transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>Trending</Link>
          <Link to={"/"}>Most Popular</Link>
          <Link to={"/"}>About</Link>
          <Link to={"/"}>Login</Link>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>Trending</Link>
        <Link to={"/"}>Most Popular</Link>
        <Link to={"/"}>About</Link>
        <Link to={"/"}>Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
