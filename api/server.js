import express from "express";
import { clerkMiddleware } from "@clerk/express";
import cors from "cors";

import userRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.route.js";
import webhookRoutes from "./routes/webhook.route.js";
import connect from "./lib/connect.js";

const app = express();

app.use(clerkMiddleware());
app.use("/webhooks", webhookRoutes);
app.use(express.json());
app.use(cors(process.env.CLIENT_URL));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/comments", commentRoutes);

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  res.json({
    message: error.message || "Something went wrong",
    status: error.status,
    stack: error.stack,
  });
});

app.listen(5000, () => {
  connect();
  console.log("Backend server is running.");
});
