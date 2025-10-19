import express from 'express';
const router = express.Router();

const posts = [
    { id: 1, title: 'Post One' },
    { id: 2, title: 'Post Two' },
    { id: 3, title: 'Post Three' },
]

router.get('/', (req, res) => {
    // res.json(posts);
    // res.json(req.query);
    const limit = parseInt(req.query.limit);
    if (!isNaN(limit) && limit > 0) {
        res.json(posts.slice(0, limit));
    } else {
        res.json(posts);
    }
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);
    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }
    res.json(post);
});


// create a new post
router.post('/', (req, res) => {
    console.log(req.body);

    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    };
    if (!newPost.title) {
        return res.status(400).json({ error: 'Title is required' });
    }
    posts.push(newPost);
    res.status(201).json(posts);
});

// update a post

export default router;