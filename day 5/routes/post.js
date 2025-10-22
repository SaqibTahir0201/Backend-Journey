import express from "express";
import { deletePost, getPost, getPosts, newPost, updatePost } from "../controllers/postController.js"
const router = express.Router();



// middleware (better way it to make another folder with name middleware)

// const logger = (req, res, next) => {
//   console.log(
//     `${req.method} ${req.protocol}://${req.get("host")}${req.orignalUrl}`
//   );
//   next();
// };

// Get all posts (with optional limit)
// router.get("/", logger, (req, res) => {
//   const limit = parseInt(req.query.limit);
//   if (!isNaN(limit) && limit > 0) {
//     return res.json(posts.slice(0, limit));
//   }
//   res.json(posts);
// });

// all the functionality shift to the controller
router.get("/",getPosts);

// Get post by ID
router.get("/:id", getPost);

// Create new post
router.post("/", newPost);

// Update post
router.put("/:id", updatePost);

// Delete post
router.delete("/:id", deletePost);

export default router;
