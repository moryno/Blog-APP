import { useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { IoClose } from "react-icons/io5";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchparams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleFilterChange = (sort) => {
    if (location.pathname === "/posts") {
      if (searchparams.get("sort") !== sort) {
        setSearchParams({
          ...Object.fromEntries(searchparams.entries()),
          sort,
        });
      }
    } else {
      navigate(`/posts?sort=${sort}`);
    }
  };

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <p>
          <span className="text-teal-700">S</span>
          <span>pike</span> <span className="text-teal-700">B</span>
          <span>log</span>
        </p>
      </Link>
      <div className="md:hidden">
        <div
          className="cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <IoClose size={22} />
          ) : (
            <MdMenu className="text-teal-700" size={24} />
          )}
        </div>

        <div
          className={`w-full h-screen flex flex-col gap-8 font-medium text-lg items-center justify-center absolute top-16 transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <Link to={"/"}>Home</Link>
          <span
            className="px-3 lg:text-md 2xl:text-lg font-medium text-gray-600 cursor-pointer hover:text-gray-100 hover:bg-teal-500 hover:transition-all hover:py-2 hover:rounded border-transparent"
            onClick={() => handleFilterChange("trending")}
          >
            Trending
          </span>
          <span
            className="px-3 lg:text-md 2xl:text-lg font-medium text-gray-600 cursor-pointer hover:text-gray-100 hover:bg-teal-500 hover:transition-all hover:py-2 hover:rounded border-transparent"
            onClick={() => handleFilterChange("popular")}
          >
            Most Popular
          </span>
          <span
            className="px-3 lg:text-md 2xl:text-lg font-medium text-gray-600 cursor-pointer hover:text-gray-100 hover:bg-teal-500 hover:transition-all hover:py-2 hover:rounded border-transparent"
            onClick={() => handleFilterChange("newest")}
          >
            Latest
          </span>
          <SignedIn>
            <Link
              to="/compose"
              className="px-3 lg:text-md 2xl:text-lg font-medium text-gray-600 cursor-pointer hover:text-gray-100 hover:bg-teal-500 hover:transition-all hover:py-2 hover:rounded border-transparent"
            >
              Compose
            </Link>
          </SignedIn>
          <SignedOut>
            <Link to={"/login"}>Sign in</Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-8 font-medium">
        <Link
          className="px-3 lg:text-md 2xl:text-lg font-medium text-gray-600 cursor-pointer hover:text-gray-100 hover:bg-teal-500 hover:transition-all hover:py-2 hover:rounded border-transparent"
          to={"/"}
        >
          Home
        </Link>
        <span
          className="px-3 lg:text-md 2xl:text-lg font-medium text-gray-600 cursor-pointer hover:text-gray-100 hover:bg-teal-500 hover:transition-all hover:py-2 hover:rounded border-transparent"
          onClick={() => handleFilterChange("trending")}
        >
          Trending
        </span>
        <span
          className="px-3 lg:text-md 2xl:text-lg font-medium text-gray-600 cursor-pointer hover:text-gray-100 hover:bg-teal-500 hover:transition-all hover:py-2 hover:rounded border-transparent"
          onClick={() => handleFilterChange("popular")}
        >
          Most Popular
        </span>
        <span
          className="px-3 lg:text-md 2xl:text-lg font-medium text-gray-600 cursor-pointer hover:text-gray-100 hover:bg-teal-500 hover:transition-all hover:py-2 hover:rounded border-transparent"
          onClick={() => handleFilterChange("newest")}
        >
          Latest
        </span>
        <SignedIn>
          <Link
            to="/compose"
            className="px-3 lg:text-md 2xl:text-lg font-medium text-gray-600 cursor-pointer hover:text-gray-100 hover:bg-teal-500 hover:transition-all hover:py-2 hover:rounded border-transparent"
          >
            Compose
          </Link>
        </SignedIn>
        <SignedOut>
          <Link to={"/login"}>Sign in</Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
