import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Comment from "./Comment";
import { commentService } from "../../../services/comment.service";
import { useAuth, useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";

const Comments = ({ postId }) => {
  const [comment, setComment] = useState("");
  const { theme } = useContext(ThemeContext);

  const { getToken } = useAuth();
  const { user } = useUser();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending, error, data } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => commentService.getComments(postId),
  });

  const createMutation = useMutation({
    mutationFn: async (newComment) => {
      const token = await getToken();
      return commentService.createComment(newComment, token);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
      setComment("");
    },
    onError: (error) => {
      const err = error.response;
      toast.error(`${err.status === 404 ? err.data : err.statusText}`);
      navigate("/login");
    },
  });

  const onCommentSave = () => {
    if (!comment) return;
    const payload = {
      postId,
      description: comment,
    };
    createMutation.mutate(payload);
  };

  return (
    <section className="flex flex-col gap-8 mb-8">
      <div className="lg:mb-8 sm:py-5 md:py-0 flex gap-2">
        <h1
          className={`text-lg font-bold tracking-tight text-left  underline underline-offset-8 decoration-teal-700
        ${theme === "light" ? "bg-light text-gray-800" : "bg-dark text-dark"}
        `}
        >
          Comments
        </h1>
      </div>
      <div className="flex items-center justify-between gap-8 w-[90%]">
        <textarea
          placeholder="Write a comment..."
          className={`w-full p-4 rounded-xl outline-1 outline-teal-700 ${
            theme === "light" ? "bg-light text-light" : "bg-dark text-dark"
          }`}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          disabled={createMutation.isPending}
          className="bg-teal-700 px-4 py-3 text-white font-medium rounded-lg disabled:bg-teal-400 disabled:cursor-not-allowed"
          onClick={onCommentSave}
        >
          Send
        </button>
      </div>
      {isPending ? (
        "Loading..."
      ) : error ? (
        "Error loading comments"
      ) : (
        <>
          {createMutation.isPending && (
            <Comment
              comment={{
                description: `${createMutation.variables.description} (posting...)`,
                createdAt: new Date(),
                user: {
                  profileImage: user?.imageUrl,
                  username: user?.username,
                },
              }}
            />
          )}
          {data?.map((comment) => (
            <Comment key={comment._id} comment={comment} />
          ))}
        </>
      )}
    </section>
  );
};

export default Comments;
