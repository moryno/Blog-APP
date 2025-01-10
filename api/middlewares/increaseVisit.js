import Post from "../models/post.model.js";

const updateVisit = async (req, resizeBy, next) => {
  const slug = req.params.slug;

  await Post.findOneAndUpdate({ slug }, { $inc: { visit: 1 } });

  next();
};

export default updateVisit;
