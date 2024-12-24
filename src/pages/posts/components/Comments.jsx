import Comment from "./Comment";

const Comments = () => {
  return (
    <section className="flex flex-col gap-8 lg:w-3/5 mb-8">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <div className="flex items-center justify-between gap-8 w-full">
        <textarea
          placeholder="Write a comment..."
          className="w-full p-4 rounded-xl"
        />
        <button className="bg-blue-800 px-4 py-3 text-white font-medium rounded-xl">
          Comment
        </button>
      </div>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </section>
  );
};

export default Comments;
