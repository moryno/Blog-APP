import { useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";

const Compose = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  if (isLoaded && !isSignedIn) {
    return <p>Please sign in</p>;
  }
  return (
    <main className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-xl font-light">Create a New Post</h1>
      <form className="flex flex-col gap-6 flex-1 mb-6">
        <button className="w-max p-2 shadow-lg rounded-xl text-sm text-gray-500">
          Add a cover image
        </button>
        <input
          type="text"
          placeholder="My Awesome Story"
          className="text-4xl font-semibold bg-transparent outline-none"
        />
        <div className="flex items-center gap-2">
          <label htmlFor="category" className="text-sm">
            Choose a category:
          </label>
          <select
            name="category"
            id="category"
            className="p-2 rounded-xl shadow-lg"
          >
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
          name="description"
          placeholder="A short Description"
          className="p-4 rounded-xl shadow-lg outline-none"
        />
        <ReactQuill theme="snow" className="flex-1 rounded-xl shadow-lg" />
        <button className="w-36 bg-blue-800 text-white p-2 rounded-xl mt-4">
          Publish
        </button>
      </form>
    </main>
  );
};

export default Compose;
