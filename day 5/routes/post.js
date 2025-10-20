import express from "express";
const router = express.Router();

let posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
  { id: 3, title: "Post Three" },
];

// Get all posts (with optional limit)
router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    return res.json(posts.slice(0, limit));
  }
  res.json(posts);
});

// Get post by ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);
  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }
  res.json(post);
});

// Create new post
router.post("/", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };

  if (!newPost.title) {
    return res.status(400).json({ error: "Title is required" });
  }

  posts.push(newPost);
  res.status(201).json(newPost);
});

// Update post
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).json({ error: `Post with ID ${id} not found` });
  }

  if (!req.body.title) {
    return res.status(400).json({ error: "Title is required" });
  }

  post.title = req.body.title;
  res.json(post);
});

// Delete post
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).json({ error: `Post with ID ${id} not found` });
  }

  posts = posts.filter((p) => p.id !== id);
  res.json({ message: `Post ${id} deleted`, posts });
});

export default router;
