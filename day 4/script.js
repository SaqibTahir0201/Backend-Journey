const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const posts = [
  { id: 1, title: 'Post One' },
  { id: 2, title: 'Post Two' },
  { id: 3, title: 'Post Three' },
]

app.get('/api/posts', (req, res) => {
  // res.json(posts);
  // res.json(req.query);
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    res.json(posts.slice(0, limit));
  } else {
    res.json(posts);
  }
});

// app.get('/api/posts/:id', (req, res) => {
//   const post = posts.find(p => p.id === parseInt(req.params.id));
//   if (!post) return res.status(404).send('Post not found');
//   res.json(post);
// });


app.get('/api/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);
  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }
  res.json(post);
});

// app.get('/api/posts/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const post = posts.find(p => p.id === id);
//   if (!post) {
//     res.status(404).json({ error: 'Post not found' });
//   }
//   else {
//     res.json(post);
//   }
// });



app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
