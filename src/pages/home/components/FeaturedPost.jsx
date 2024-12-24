import { Link } from "react-router-dom";
import Image from "../../../components/Image";

const FeaturedPost = () => {
  return (
    <section className="mt-8 flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <Image
          src="featured1.jpeg"
          alt="This is featured cover"
          className="rounded-3xl object-cover"
        />
        <div className="flex items-center gap-4">
          <h1 className="flex items-center gap-4">01.</h1>
          <Link to="/" className="text-blue-800 lg:text-lg">
            Web Design
          </Link>
          <span className="text-gray-500">2 days ago</span>
        </div>
        <Link
          to="/test"
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Link>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image
            src="featured2.jpeg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link to="/" className="text-blue-800">
                Development
              </Link>
              <span className="text-gray-500 text-sm">1 days ago</span>
            </div>
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Link>
          </div>
        </div>
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image
            src="featured2.jpeg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link to="/" className="text-blue-800">
                Development
              </Link>
              <span className="text-gray-500 text-sm">1 days ago</span>
            </div>
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Link>
          </div>
        </div>
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image
            src="featured2.jpeg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link to="/" className="text-blue-800">
                Development
              </Link>
              <span className="text-gray-500 text-sm">1 days ago</span>
            </div>
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;
