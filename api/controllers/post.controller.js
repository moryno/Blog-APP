import ImageKit from "imagekit";
import Post from "../models/post.model.js";
import User from "../models/user.model.js";

export const getPosts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;

  const query = {};

  const category = req.query.category;
  const author = req.query.author;
  const searchQuery = req.query.search;
  const sortQuery = req.query.sort;
  const featured = req.query.featured;

  if (category) {
    query.category = category;
  }
  if (searchQuery) {
    query.title = { $regex: searchQuery, $options: "i" };
  }
  if (featured) {
    query.isFeatured = true;
  }
  if (author) {
    const writer = await User.findOne({ username: author }).select("_id");
    if (!writer) return res.status(404).json("Author not found.");

    query.author = writer._id;
  }

  let sortObj = { createdAt: -1 };
  if (sortQuery) {
    switch (sortQuery) {
      case "newest":
        sortObj = { createdAt: -1 };
        break;
      case "oldest":
        sortObj = { createdAt: 1 };
        break;
      case "popular":
        sortObj = { visit: -1 };
        break;
      case "trending":
        sortObj = { visit: -1 };
        query.createdAt = {
          $gte: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000),
        };
        break;

      default:
        break;
    }
  }

  const posts = await Post.find(query)
    .populate("author", "username")
    .sort(sortObj)
    .limit(limit)
    .skip((page - 1) * limit);
  const totalPosts = await Post.countDocuments();
  const hasMore = page * limit < totalPosts;
  res.status(200).json({ posts, hasMore });
};

export const getPost = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug }).populate(
    "author",
    "username profileImage"
  );
  res.status(200).json(post);
};

export const createPost = async (req, res) => {
  const postTitleExist = await Post.findOne({ title: req.body.title });

  if (postTitleExist)
    return res.status(404).json("The post with same title already exist.");

  const slug = req.body.title.replace(/ /g, "-").toLowerCase();

  const newPost = new Post({
    author: req.userId,
    slug,
    ...req.body,
  });

  const post = await newPost.save();
  res.status(201).json(post);
};

export const deletePost = async (req, res) => {
  const clerkUserId = req.auth.userId;

  if (!clerkUserId) return res.status(401).json("Not Authenticated!");

  const role = req.auth.sessionClaims?.metadata?.role || "user";

  if (role === "admin") {
    await Post.findByIdAndDelete(req.params.id);
    return res.status(204).json("Post has been deleted.");
  }

  const user = await User.findOne({ clerkUserId });
  if (!user) return res.status(404).json("User not found!");

  const deletedPost = await Post.findOneAndDelete({
    _id: req.params.id,
    author: user._id,
  });

  if (!deletedPost)
    return res.status(404).json("You can only delete your post.");

  res.status(204).json("Post has been deleted.");
};

export const featurePost = async (req, res) => {
  const postId = req.body.postId;

  const post = await Post.findById(postId);

  if (!post) return res.status(404).json("Post Not Found");

  const isFeatured = post.isFeatured;
  const updatedPost = await Post.findByIdAndUpdate(
    postId,
    { isFeatured: !isFeatured },
    { new: true }
  );

  res.status(204).json(updatedPost);
};

const imagekit = new ImageKit({
  urlEndpoint: process.env.IK_URL_ENDPOINT,
  publicKey: process.env.IK_PUBLIC_KEY,
  privateKey: process.env.IK_PRIVATE_KEY,
});

export const uploadAuth = async (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
};
