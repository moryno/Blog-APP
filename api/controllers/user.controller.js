import User from "../models/user.model.js";

export const saveUserPost = async (req, res) => {
  const clerkUserId = req.auth.userId;
  const postId = req.body.postId;

  if (!clerkUserId) return res.status(401).json("Not Authenticated!");

  const user = await User.findOne({ clerkUserId });

  if (!user) return res.status(404).json("User not found!");

  const isSaved = user.posts.some((p) => p === postId);

  if (!isSaved) {
    await User.findByIdAndUpdate(user._id, {
      $push: { posts: postId },
    });
  } else {
    await User.findByIdAndUpdate(user._id, {
      $pull: { posts: postId },
    });
  }
  res.status(200).json(isSaved ? "Post unsaved" : "Post saved");
};

export const getUserSavedPost = async (req, res) => {
  const clerkUserId = req.auth.userId;

  if (!clerkUserId) return res.status(401).json("Not Authenticated!");

  const user = await User.findOne({ clerkUserId });

  if (!user) return res.status(404).json("User not found!");

  res.status(201).json(user.posts);
};
