let posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
  { id: 3, title: "Post Three" },
];


//  this comes from the routes

// @desc get all post
// @routre GET /api/posts
export const getPosts = (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    return res.json(posts.slice(0, limit));
  }
  res.json(posts);
};

// @desc  get single post
// @route GET /api/posts/:id
export const getPost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    const error = new Error(`a post with the id of ${id} was not found`);
    error.status = 400;
    next(error);
  }
  // if (!post) {
  //   return res.status(404).json({ error: "Post not found" });
  // }
  res.json(post);
};

// @desc  create new post
// @route POST /api/posts
export const newPost = (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };

  if (!newPost.title) {
    return res.status(400).json({ error: "Title is required" });
  }

  posts.push(newPost);
  res.status(201).json(newPost);
};

// @desc  update post
// @route PUT /api/posts/:id
export const updatePost = (req, res) => {
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
};

// @desc  delete post
// @route DELETE /api/posts/:id
export const deletePost = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).json({ error: `Post with ID ${id} not found` });
  }

  posts = posts.filter((p) => p.id !== id);
  res.json({ message: `Post ${id} deleted`, posts });
};


