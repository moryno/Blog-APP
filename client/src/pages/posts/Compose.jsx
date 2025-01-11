import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser, useAuth } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { postService } from "../../services/post.service";
import { FcAddImage, FcVideoFile } from "react-icons/fc";
import Upload from "../../components/Upload";

const Compose = () => {
  const [content, setContent] = useState("");
  const [cover, setCover] = useState("");
  const [img, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [progress, setProgress] = useState(0);

  const { isLoaded, isSignedIn } = useUser();
  const { getToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    img && setContent((prev) => prev + `<p><image src="${img.url}" /></p>`);
  }, [img]);

  useEffect(() => {
    video &&
      setContent(
        (prev) => prev + `<p><iframe class="ql-video" src="${video.url}" /></p>`
      );
  }, [video]);

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return postService.createPost(newPost, token);
    },
    onSuccess: (res) => {
      toast.success("Post has been created");
      navigate(`/${res?.data?.slug}`);
    },
    onError: (error) => {
      const err = error.response;
      toast.error(`${err.status === 404 ? err.data : err.statusText}`);
    },
  });

  const onUploadSuccess = useCallback((res) => {
    setCover(res);
  }, []);
  const onUploadProgress = useCallback((progress) => {
    setProgress(progress);
  }, []);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  if (isLoaded && !isSignedIn) {
    return <p>Please sign in</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!content) return;

    const formValues = new FormData(e.target);
    const payload = {
      cover: cover.filePath || "",
      title: formValues.get("title"),
      category: formValues.get("category"),
      description: formValues.get("description"),
      content: content,
    };

    mutation.mutate(payload);
  };

  return (
    <main className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-xl font-light">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-6">
        <Upload
          type="image"
          onSuccess={onUploadSuccess}
          onProgress={onUploadProgress}
        >
          <button className="w-max p-2 shadow-lg rounded-xl text-sm text-gray-500">
            Add a cover image
          </button>
        </Upload>
        <input
          type="text"
          placeholder="My Awesome Story"
          className="text-4xl font-semibold bg-transparent outline-none"
          name="title"
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
            <option value="ai">AI</option>
          </select>
        </div>
        <textarea
          name="description"
          placeholder="A short Description"
          className="p-4 rounded-xl shadow-lg outline-none"
        />
        <div className="flex flex-1">
          <div className="flex flex-col gap-2 mr-2">
            <Upload
              type="image"
              onProgress={onUploadProgress}
              onSuccess={setImage}
            >
              {" "}
              <FcAddImage size={20} className="cursor-pointer" />
            </Upload>
            <Upload
              type="video"
              onProgress={onUploadProgress}
              onSuccess={setVideo}
            >
              <FcVideoFile size={20} className="cursor-pointer" />
            </Upload>
          </div>
          <ReactQuill
            theme="snow"
            onChange={setContent}
            value={content}
            readOnly={0 < progress && progress < 100}
            className="flex-1 rounded-xl shadow-lg"
          />
        </div>
        <button
          disabled={mutation.isPending || (0 < progress && progress < 100)}
          className="w-36 bg-teal-700 text-white p-2 rounded-xl mt-4 disabled:bg-teal-400 disabled:cursor-not-allowed"
        >
          {mutation.isPending ? "Loading..." : "Publish"}
        </button>
      </form>
    </main>
  );
};

export default Compose;
