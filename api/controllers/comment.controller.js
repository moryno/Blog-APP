import Comment from "../models/comment.model.js";
import Post from "../models/post.model.js";
import User from "../models/user.model.js";

export const getComments = async (req, res) => {
  const comments = await Comment.find({ post: req.params.postId })
    .populate("user", "username profileImage")
    .sort({ createdAt: -1 });
  res.status(200).json(comments);
};

export const createComment = async (req, res) => {
  const clerkUserId = req.auth.userId;

  if (!clerkUserId) return res.status(401).json("Not Authenticated!");

  const user = await User.findOne({ clerkUserId });
  const post = await Post.findById(req.body.postId);

  if (!user) return res.status(404).json("User not found!");
  if (!post) return res.status(404).json("Post not found!");

  const newComment = new Comment({
    user: user._id,
    post: post._id,
    description: req.body.description,
  });

  const comment = await newComment.save();
  res.status(201).json(comment);
};

export const deleteComment = async (req, res) => {
  const clerkUserId = req.auth.userId;

  if (!clerkUserId) return res.status(401).json("Not Authenticated!");

  const role = req.auth.sessionClaims?.metadata?.role || "user";

  if (role === "admin") {
    await Comment.findByIdAndDelete(req.params.id);
    return res.status(204).json("Post has been deleted.");
  }

  const user = await User.findOne({ clerkUserId });

  if (!user) return res.status(404).json("User not found!");

  const deletedComment = await Comment.findByIdAndDelete({
    _id: req.params.id,
    user: user._id,
  });

  if (!deletedComment)
    return res.status(404).json("You can only delete your comment.");

  res.status(204).json("Comment has been deleted.");
};
