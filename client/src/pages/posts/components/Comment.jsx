import { useAuth, useUser } from "@clerk/clerk-react";
import moment from "moment";
import Image from "../../../components/Image";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { commentService } from "../../../services/comment.service";
import { toast } from "react-toastify";
import { ThemeContext } from "../../../context/ThemeContext";
import { useContext } from "react";

const Comment = ({ comment }) => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const queryClient = useQueryClient();
  const { theme } = useContext(ThemeContext);

  const deleteCommentMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return commentService.deleteComment(comment._id, token);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", comment?.post] });
    },
    onError: (error) => {
      const err = error.response;
      toast.error(`${err.status === 404 ? err.data : err.statusText}`);
    },
  });

  const isAdmin = user?.publicMetadata?.role === "admin" || false;

  const onDelete = () => {
    deleteCommentMutation.mutate();
  };

  return (
    <div
      className={`p-4  rounded-xl ${
        theme === "light" ? "bg-slate-50 text-light" : "bg-gray-800 text-dark"
      }`}
    >
      <div className="flex items-center gap-4">
        <Image
          src={comment.user.profileImage || "userImg.jpeg"}
          alt={comment.user.username}
          width="40"
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="font-medium">{comment.user.username}</span>
        <span className="text-sm">{moment(comment.createdAt).fromNow()}</span>
        {user && (comment.user.username === user.username || isAdmin) && (
          <span
            onClick={onDelete}
            className="text-xs cursor-pointer text-red-500"
          >
            delete
          </span>
        )}
      </div>
      <div className="mt-4">
        <p>{comment.description}</p>
      </div>
    </div>
  );
};

export default Comment;
