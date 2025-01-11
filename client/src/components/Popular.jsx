import { Link } from "react-router-dom";

const Popular = () => {
  return (
    <div className="flex flex-col gap-2 mt-5 mb-14">
      <div className="flex flex-col gap-2">
        <Link
          to=""
          className="px-2 py-1 w-fit text-xs text-white rounded-xl bg-[#ff7857]"
        >
          General
        </Link>
        <Link to="" className=" text-lg font-medium">
          A Journey Through Bohemian Beauty: Exploring the streets of Prague
        </Link>
        <Link className="text-xs flex items-center gap-1">
          <span className="font-medium text-gray-600 text-[13px]">
            Joseph Ownen
          </span>
          <span>-</span>
          <span className="text-gray-700">10.08.2025</span>
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <Link
          to=""
          className="px-2 py-1 w-fit text-xs text-white rounded-xl bg-[#ffb14f]"
        >
          Web Design
        </Link>
        <Link to="" className=" font-medium">
          A Journey Through Bohemian Beauty: Exploring the streets of Prague
        </Link>
        <Link className="text-xs flex items-center gap-1">
          <span className="font-medium text-gray-600 text-[13px]">
            Joseph Ownen
          </span>
          <span>-</span>
          <span>10.08.2025</span>
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <Link
          to=""
          className="px-2 py-1 w-fit text-xs text-white rounded-xl bg-[#7fb881]"
        >
          Development
        </Link>
        <Link to="" className=" font-medium">
          A Journey Through Bohemian Beauty: Exploring the streets of Prague
        </Link>
        <Link className="text-xs flex items-center gap-1">
          <span className="font-medium text-gray-600 text-[13px]">
            Joseph Ownen
          </span>
          <span>-</span>
          <span>10.08.2025</span>
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <Link
          to=""
          className="px-2 py-1 w-fit text-xs text-white rounded-xl bg-[#ff7887]"
        >
          Databases
        </Link>
        <Link className=" font-medium">
          A Journey Through Bohemian Beauty: Exploring the streets of Prague
        </Link>
        <Link className="text-xs flex items-center gap-1">
          <span className="font-medium text-gray-600 text-[13px]">
            Joseph Ownen
          </span>
          <span>-</span>
          <span>10.08.2025</span>
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <Link
          to=""
          className="px-2 py-1 w-fit text-xs text-white rounded-xl bg-[#775aec]"
        >
          Search Engines
        </Link>
        <Link to="" className=" font-medium">
          A Journey Through Bohemian Beauty: Exploring the streets of Prague
        </Link>
        <Link className="text-xs flex items-center gap-1">
          <span className="font-medium text-gray-600 text-[13px]">
            Joseph Ownen
          </span>
          <span>-</span>
          <span>10.08.2025</span>
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <Link
          to=""
          className="px-2 py-1 w-fit text-xs text-white rounded-xl bg-[#789cff]"
        >
          AI
        </Link>
        <Link to="" className=" font-medium">
          A Journey Through Bohemian Beauty: Exploring the streets of Prague
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
  );
};

export default Popular;
