const express = require('express');
const Blog = require('../models/Blog');
const router = express.Router();

// Get all blogs with optional search and filter
router.get('/', async (req, res) => {
  const { search, category } = req.query;

  const query = {};
  if (search) {
    query.$or = [
      { title: { $regex: search, $options: 'i' } },
      { content: { $regex: search, $options: 'i' } },
    ];
  }
  if (category) {
    query.category = category;
  }

  try {
    const blogs = await Blog.find(query);
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new blog (for testing purposes)
router.post('/', async (req, res) => {
  const blog = new Blog(req.body);
  try {
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
