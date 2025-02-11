import User from "../models/user.model.js";

export const authenticate = async (req, res, next) => {
  const clerkUserId = req.auth.userId;

  if (!clerkUserId) return res.status(401).json("Not Authenticated!");

  const user = await User.findOne({ clerkUserId });

  if (!user) return res.status(404).json("User not found!");

  req.userId = user._id;
  next();
};

export const verifyAdmin = (req, res, next) => {
  const clerkUserId = req.auth.userId;
  if (!clerkUserId) return res.status(401).json("Not Authenticated!");

  const role = req.auth.sessionClaims?.metadata?.role || "user";

  if (role !== "admin") return res.status(401).json("Not Authorized.");
  next();
};
