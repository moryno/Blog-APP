import { useAuth, useUser } from "@clerk/clerk-react";
import moment from "moment";
import Image from "../../../components/Image";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { commentService } from "../../../services/comment.service";
import { toast } from "react-toastify";

const Comment = ({ comment }) => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const queryClient = useQueryClient();

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
    <div className="p-4 bg-slate-50 rounded-xl">
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
