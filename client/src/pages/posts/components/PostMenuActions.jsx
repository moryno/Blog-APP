import { useAuth, useUser } from "@clerk/clerk-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { MdDelete } from "react-icons/md";
import { userService } from "../../../services/user.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { postService } from "../../../services/post.service";

const PostMenuActions = ({ post }) => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: savedPosts } = useQuery({
    queryKey: [`savedPosts`],
    queryFn: async () => {
      const token = await getToken();
      return userService.getUserSavedPost(token);
    },
  });

  const isAdmin = user?.publicMetadata?.role === "admin" || false;
  const isSaved = savedPosts?.data?.some((p) => p === post._id) || false;

  const savePostMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return userService.saveUserPost({ postId: post._id }, token);
    },
    onSuccess: (res) => {
      toast.success(`${res.data}`);
      queryClient.invalidateQueries({ queryKey: ["savedPosts"] });
    },
    onError: (error) => {
      const err = error.response;
      toast.error(`${err.status === 404 ? err.data : err.statusText}`);
    },
  });

  const deletePostMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return postService.deletePost(post._id, token);
    },
    onSuccess: () => {
      toast.success("Post has been deleted");
      navigate(-1);
    },
    onError: (error) => {
      const err = error.response;
      toast.error(`${err.status === 404 ? err.data : err.statusText}`);
    },
  });

  const onDelete = () => {
    deletePostMutation.mutate();
  };
  const onSavePost = () => {
    if (!user) {
      navigate("/login");
    } else {
      savePostMutation.mutate();
    }
  };

  return (
    <div>
      <h1 className="mt-8 mb-4 text-sm font-medium">Actions</h1>

      <div
        onClick={onSavePost}
        className="flex items-center gap-2 py-2 text-sm cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="20px"
          height="20px"
        >
          <path
            d="M12 4C10.3 4 9 5.3 9 7v34l15-9 15 9V7c0-1.7-1.3-3-3-3H12z"
            stroke="black"
            strokeWidth="2"
            fill={isSaved ? "black" : "none"}
          />
        </svg>
        <span>Save this post</span>
        {savePostMutation.isPending && (
          <span className="text-xs">(in progress)</span>
        )}
      </div>

      {user && (post.author.username === user.username || isAdmin) && (
        <div
          onClick={onDelete}
          className="flex items-center gap-2 py-2 text-red-500 text-sm cursor-pointer"
        >
          <MdDelete size={22} />
          <span>Delete this post</span>
          {deletePostMutation.isPending && (
            <span className="text-xs">(in progress)</span>
          )}
        </div>
      )}
    </div>
  );
};

export default PostMenuActions;
