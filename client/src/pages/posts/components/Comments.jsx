import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Comment from "./Comment";
import { commentService } from "../../../services/comment.service";
import { useAuth, useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Comments = ({ postId }) => {
  const [comment, setComment] = useState("");

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
    <section className="flex flex-col gap-8 lg:w-3/5 mb-8">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <div className="flex items-center justify-between gap-8 w-full">
        <textarea
          placeholder="Write a comment..."
          className="w-full p-4 rounded-xl"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          disabled={createMutation.isPending}
          className="bg-teal-700 px-4 py-3 text-white font-medium rounded-xl disabled:bg-teal-400 disabled:cursor-not-allowed"
          onClick={onCommentSave}
        >
          Comment
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
